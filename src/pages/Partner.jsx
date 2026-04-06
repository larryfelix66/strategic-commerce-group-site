import React from "react";

const trustItems = [
  "150+ Brand Network",
  "Nationwide Fulfillment",
  "Amazon & E-Commerce Specialists",
  "Compliance-Focused Distribution",
];

const offerItems = [
  {
    title: "Wholesale Purchasing",
    text: "Structured purchasing workflows designed for consistent reorders and long-term supplier relationships.",
  },
  {
    title: "Marketplace Expansion",
    text: "We help bring products into high-performing e-commerce channels with disciplined listing and catalog execution.",
  },
  {
    title: "Inventory Management",
    text: "Operational processes support forecasting, inventory flow, and fulfillment coordination across growing catalogs.",
  },
  {
    title: "Brand Protection",
    text: "We emphasize compliant sourcing, traceability, and responsible channel representation for partner brands.",
  },
];

const processItems = [
  "Supplier review and category alignment",
  "Product and catalog evaluation",
  "Operational onboarding and documentation",
  "Launch planning for long-term distribution",
];

const categories = [
  "Health & Personal Care",
  "Beauty & Skincare",
  "Grocery & Consumables",
  "Household Essentials",
  "Pet Supplies",
  "General Merchandise",
];

export default function Partner() {
  return (
    <main className="partner-page">
      <section className="partner-hero">
        <div className="partner-container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Strategic Commerce Group</span>
            <h1>National Wholesale Distribution Partner</h1>
            <p className="hero-text">
              Strategic Commerce Group connects leading brands to high-performing
              e-commerce channels through disciplined distribution,
              compliance-first operations, and long-term supplier partnerships.
            </p>

            <div className="hero-actions">
              <a href="#partner-form" className="partner-btn partner-btn-primary">
                Request Partnership
              </a>
              <a href="#overview" className="partner-btn partner-btn-secondary">
                Learn More
              </a>
            </div>

            <div className="contact-strip">
              <a href="tel:14809155598">Office: (480) 915-5598</a>
              <a href="https://strategiccommercegroup.com" target="_blank" rel="noreferrer">
                strategiccommercegroup.com
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="hero-card-label">Built for supplier confidence</p>
              <ul>
                <li>Authorized supply chain focus</li>
                <li>Brand-safe marketplace representation</li>
                <li>Operational infrastructure for scale</li>
                <li>Structured distribution growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-trust-bar">
        <div className="partner-container trust-grid">
          {trustItems.map((item) => (
            <div className="trust-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="partner-section" id="overview">
        <div className="partner-container two-column">
          <div>
            <span className="section-kicker">About Strategic Commerce Group</span>
            <h2>Distribution infrastructure designed for long-term brand partnerships</h2>
          </div>
          <div>
            <p>
              Strategic Commerce Group is a U.S.-based wholesale distribution and
              e-commerce infrastructure company focused on health, beauty,
              grocery, household, and adjacent consumer categories.
            </p>
            <p>
              We work with brands and authorized suppliers to support structured
              growth across online channels while maintaining compliance,
              product traceability, and brand integrity.
            </p>
            <p>
              Our model is built around responsible procurement, operational
              discipline, and partnerships that scale over time.
            </p>
          </div>
        </div>
      </section>

      <section className="partner-section partner-section-alt">
        <div className="partner-container">
          <div className="section-heading-center">
            <span className="section-kicker">What We Offer</span>
            <h2>Capabilities that support supplier growth</h2>
            <p>
              From purchasing and onboarding to channel execution, our approach
              is designed to give suppliers confidence in how their products are
              represented and distributed.
            </p>
          </div>

          <div className="offer-grid">
            {offerItems.map((item) => (
              <article className="offer-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="partner-container two-column split-emphasis">
          <div className="panel-dark">
            <span className="section-kicker light">Core Categories</span>
            <h2>Focused on essential consumer product categories</h2>
            <div className="category-list">
              {categories.map((category) => (
                <span className="category-pill" key={category}>
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="panel-light">
            <span className="section-kicker">Partnership Process</span>
            <h2>Simple onboarding with a long-term mindset</h2>
            <ol className="process-list">
              {processItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="partner-section partner-cta-band">
        <div className="partner-container cta-band-grid">
          <div>
            <span className="section-kicker light">Partner With Us</span>
            <h2>Actively onboarding new supplier and brand relationships</h2>
            <p>
              If your company is looking for a distribution partner with a
              compliance-focused approach and strong e-commerce alignment, we
              would welcome the opportunity to connect.
            </p>
          </div>
          <div className="cta-band-actions">
            <a href="#partner-form" className="partner-btn partner-btn-primary">
              Start Partnership Inquiry
            </a>
          </div>
        </div>
      </section>

      <section className="partner-section" id="partner-form">
        <div className="partner-container form-layout">
          <div className="form-copy">
            <span className="section-kicker">Partnership Inquiry</span>
            <h2>Start a conversation with Strategic Commerce Group</h2>
            <p>
              Complete the form below and our team will review your inquiry for
              category fit, supplier alignment, and onboarding potential.
            </p>
            <ul className="form-points">
              <li>Brand and supplier inquiries welcome</li>
              <li>Structured review process</li>
              <li>Built for long-term channel growth</li>
            </ul>
          </div>

          <form
            action="https://formspree.io/f/xaqpazwp"
            method="POST"
            className="partner-form-card"
          >
            <input type="hidden" name="_subject" value="New Supplier Partnership Inquiry - Strategic Commerce Group" />
            <input type="hidden" name="_next" value="https://strategiccommercegroup.com/partner#thank-you" />

            <div className="form-row">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" type="text" placeholder="Your full name" required autoComplete="off" />
            </div>

            <div className="form-row">
              <label htmlFor="company">Company Name</label>
              <input id="company" name="company" type="text" placeholder="Company name" required autoComplete="off" />
            </div>

            <div className="form-row two-up">
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="name@company.com" required autoComplete="off" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" autoComplete="off" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="category">Product Category</label>
              <input id="category" name="category" type="text" placeholder="Health, beauty, grocery, household, pet, etc." autoComplete="off" />
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your brand, product line, or distribution opportunity."
                required
                autoComplete="off"
              />
            </div>

            <button type="submit" className="partner-btn partner-btn-primary form-submit">
              Submit Partnership Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="partner-section thank-you-section" id="thank-you">
        <div className="partner-container thank-you-card">
          <span className="section-kicker">Thank You</span>
          <h2>Your inquiry has been received</h2>
          <p>
            Thank you for reaching out to Strategic Commerce Group. We review
            partnership inquiries carefully and will follow up as appropriate.
          </p>
        </div>
      </section>

      <footer className="partner-footer">
        <div className="partner-container footer-grid">
          <div>
            <h3>Strategic Commerce Group</h3>
            <p>Wholesale Distribution & E-Commerce Infrastructure</p>
          </div>
          <div>
            <a href="tel:14809155598">(480) 915-5598</a>
            <a href="https://strategiccommercegroup.com" target="_blank" rel="noreferrer">
              strategiccommercegroup.com
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        :root {
          --partner-black: #0b0b0b;
          --partner-gold: #c9a227;
          --partner-gold-soft: #e6d18a;
          --partner-white: #ffffff;
          --partner-text: #1a1a1a;
          --partner-muted: #5b5b5b;
          --partner-border: rgba(201, 162, 39, 0.2);
          --partner-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
        }

        .partner-page {
          background: #fff;
          color: var(--partner-text);
        }

        .partner-container {
          width: min(1120px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .partner-hero {
          background:
            radial-gradient(circle at top right, rgba(201, 162, 39, 0.18), transparent 26%),
            linear-gradient(135deg, #050505 0%, #101010 55%, #161616 100%);
          color: var(--partner-white);
          padding: 96px 0 72px;
        }

        .hero-grid,
        .two-column,
        .cta-band-grid,
        .form-layout,
        .footer-grid {
          display: grid;
          gap: 2rem;
        }

        .hero-grid {
          grid-template-columns: 1.25fr 0.75fr;
          align-items: center;
        }

        .eyebrow,
        .section-kicker {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--partner-gold);
          margin-bottom: 1rem;
        }

        .section-kicker.light {
          color: var(--partner-gold-soft);
        }

        .partner-hero h1,
        .partner-section h2,
        .partner-footer h3 {
          margin: 0;
          line-height: 1.08;
        }

        .partner-hero h1 {
          font-size: clamp(2.3rem, 5vw, 4.4rem);
          max-width: 10ch;
        }

        .hero-text,
        .section-heading-center p,
        .form-copy p,
        .thank-you-card p,
        .panel-light p,
        .panel-dark p,
        .partner-section p,
        .partner-cta-band p {
          line-height: 1.7;
          font-size: 1.03rem;
        }

        .hero-text {
          max-width: 42rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 1.25rem 0 0;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin: 2rem 0 1.4rem;
        }

        .partner-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0.9rem 1.35rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .partner-btn:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .partner-btn-primary {
          background: var(--partner-gold);
          color: var(--partner-black);
        }

        .partner-btn-secondary {
          background: transparent;
          color: var(--partner-white);
          border-color: rgba(255, 255, 255, 0.22);
        }

        .contact-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem 1.5rem;
          margin-top: 1rem;
        }

        .contact-strip a,
        .partner-footer a {
          color: rgba(255, 255, 255, 0.88);
          text-decoration: none;
        }

        .hero-card {
          display: flex;
          justify-content: flex-end;
        }

        .hero-card-inner {
          width: 100%;
          max-width: 360px;
          padding: 1.6rem;
          border: 1px solid var(--partner-border);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          box-shadow: var(--partner-shadow);
        }

        .hero-card-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.11em;
          color: var(--partner-gold-soft);
          margin-bottom: 1rem;
        }

        .hero-card ul,
        .form-points,
        .process-list {
          margin: 0;
          padding-left: 1.1rem;
        }

        .hero-card li,
        .form-points li,
        .process-list li {
          margin-bottom: 0.7rem;
          line-height: 1.55;
        }

        .partner-trust-bar {
          background: var(--partner-black);
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .trust-item {
          color: var(--partner-white);
          padding: 1rem;
          text-align: center;
          font-weight: 600;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .trust-item:last-child {
          border-right: none;
        }

        .partner-section {
          padding: 82px 0;
        }

        .partner-section-alt {
          background: #fcfaf3;
        }

        .two-column {
          grid-template-columns: 1fr 1fr;
          align-items: start;
        }

        .section-heading-center {
          max-width: 760px;
          margin: 0 auto 2.2rem;
          text-align: center;
        }

        .section-heading-center h2,
        .partner-section h2,
        .partner-cta-band h2 {
          font-size: clamp(1.9rem, 3vw, 3rem);
          margin-bottom: 1rem;
        }

        .offer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
        }

        .offer-card,
        .partner-form-card,
        .thank-you-card,
        .panel-light {
          background: var(--partner-white);
          border-radius: 24px;
          box-shadow: 0 14px 45px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .offer-card {
          padding: 1.5rem;
        }

        .offer-card h3 {
          margin-top: 0;
          margin-bottom: 0.75rem;
          font-size: 1.15rem;
        }

        .split-emphasis {
          grid-template-columns: 1fr 1fr;
        }

        .panel-dark,
        .panel-light {
          padding: 2rem;
          border-radius: 28px;
        }

        .panel-dark {
          background: linear-gradient(145deg, #0b0b0b 0%, #171717 100%);
          color: var(--partner-white);
          box-shadow: var(--partner-shadow);
        }

        .category-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .category-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.65rem 0.95rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--partner-white);
          font-size: 0.95rem;
        }

        .partner-cta-band {
          background: linear-gradient(135deg, #0b0b0b 0%, #111111 100%);
          color: var(--partner-white);
        }

        .cta-band-grid {
          grid-template-columns: 1.3fr 0.7fr;
          align-items: center;
        }

        .cta-band-actions {
          display: flex;
          justify-content: flex-end;
        }

        .form-layout {
          grid-template-columns: 0.9fr 1.1fr;
          align-items: start;
        }

        .partner-form-card {
          padding: 1.6rem;
        }

        .form-row {
          margin-bottom: 1rem;
        }

        .form-row.two-up {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .partner-form-card label {
          display: block;
          font-weight: 700;
          margin-bottom: 0.45rem;
        }

        .partner-form-card input,
        .partner-form-card textarea {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 16px;
          padding: 0.95rem 1rem;
          font: inherit;
          color: var(--partner-text);
          background: #fff;
          box-sizing: border-box;
        }

        .partner-form-card input:focus,
        .partner-form-card textarea:focus {
          outline: 2px solid rgba(201, 162, 39, 0.25);
          border-color: var(--partner-gold);
        }

        .form-submit {
          width: 100%;
          border: none;
          margin-top: 0.25rem;
        }

        .thank-you-section {
          padding-top: 0;
        }

        .thank-you-card {
          padding: 2rem;
          text-align: center;
          max-width: 780px;
        }

        .partner-footer {
          background: var(--partner-black);
          color: var(--partner-white);
          padding: 34px 0;
        }

        .footer-grid {
          grid-template-columns: 1fr auto;
          align-items: center;
        }

        .partner-footer p,
        .partner-footer a {
          margin: 0.2rem 0;
        }

        @media (max-width: 980px) {
          .hero-grid,
          .two-column,
          .split-emphasis,
          .cta-band-grid,
          .form-layout,
          .footer-grid,
          .trust-grid,
          .offer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .offer-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-card {
            justify-content: flex-start;
          }

          .cta-band-actions {
            justify-content: flex-start;
          }

          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .trust-item:nth-child(2) {
            border-right: none;
          }

          .trust-item:nth-child(-n + 2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
        }

        @media (max-width: 680px) {
          .partner-hero {
            padding: 72px 0 58px;
          }

          .hero-grid,
          .two-column,
          .split-emphasis,
          .cta-band-grid,
          .form-layout,
          .footer-grid,
          .offer-grid,
          .form-row.two-up,
          .trust-grid {
            grid-template-columns: 1fr;
          }

          .hero-actions,
          .contact-strip {
            flex-direction: column;
            align-items: flex-start;
          }

          .trust-item {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .trust-item:last-child {
            border-bottom: none;
          }

          .partner-section {
            padding: 64px 0;
          }

          .partner-form-card,
          .panel-dark,
          .panel-light,
          .thank-you-card {
            padding: 1.35rem;
          }
        }
      `}</style>
    </main>
  );
}

