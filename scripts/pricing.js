/* ============================================================
   PRICING.JS
   Renders the Free vs Pro pricing comparison page.
   ============================================================ */
// Renders the Pricing page - a Free vs Pro comparison. Pro is
// clearly labeled "Coming Soon" since this is a static site with
// no real payment processing behind it; this is UI structure only.
function renderPricing() {
  document.getElementById('pricingView').innerHTML = `
    <a href="#" class="detail-back">← Back to all firms</a>
    <div class="dashboard-title">Pricing</div>
    <div class="pricing-intro">
      <p>The Power Board is free to use. This page shows what a future Pro tier could include - nothing here processes real payments yet.</p>
    </div>

    <div class="pricing-tiers">
      <div class="pricing-card">
        <div class="pricing-tier-name">Free</div>
        <div class="pricing-tier-price"><span class="amount">$0</span> / forever</div>
        <ul class="pricing-feature-list">
    <li>Browse all ${firms.length} tracked VC firms</li>
          <li>Search &amp; advanced filters</li>
          <li>Compare up to 3 firms side-by-side</li>
          <li>Power Match investor scoring</li>
      <li>Power Score™ &amp; Analytics Dashboard</li>
          <li>Save up to 3 firms to your shortlist</li>
        </ul>
        <div class="pricing-cta current">Your Current Plan</div>
      </div>

      <div class="pricing-card pro">
        <div class="pricing-tier-name">Pro <span class="pro-lock-badge">Coming Soon</span></div>
        <div class="pricing-tier-price">Pricing TBD</div>
        <ul class="pricing-feature-list">
          <li>Unlimited saved shortlist</li>
          <li>Priority alerts on tracked firms</li>
          <li>Downloadable comparison reports</li>
          <li>Early access to new firm profiles</li>
          <li>Everything in Free</li>
        </ul>
        <div class="pricing-cta coming-soon">Coming Soon</div>
      </div>
    </div>

    <p class="pricing-note">Built as a demonstration of paywall-ready structure - the free shortlist limit (3 firms) is real and functional; Pro itself is not yet available for purchase.</p>
  `;

  document.querySelector('#pricingView .detail-back').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = '';
  });
}
