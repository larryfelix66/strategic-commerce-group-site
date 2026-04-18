
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Partner from "./pages/Partner";

const featuredBrands = [
  'Tru',
  'Tabasco',
  'Bigelow Teas',
  'Celestial Seasonings',
  'Simple Mills',
  "Mrs. Meyer's",
  'Cetaphil',
  'Aquaphor',
  'Jergens',
  "Johnson's",
  "Dr. Bronner's",
  'Miracle-Gro',
  'Ortho Home Defense',
  'Roundup',
  'Seachem',
  'Seachem Prime',
  'Kanaplex'
];

const brandWall = [...featuredBrands];

const catalogItems = [
  { name: 'Digital Thermometer', sku: 'SCG-1001', category: 'Medical Supplies' },
  { name: 'Blood Pressure Monitor', sku: 'SCG-1002', category: 'Home Health' },
  { name: 'First Aid Kit', sku: 'SCG-1003', category: 'First Aid' },
  { name: 'Nitrile Exam Gloves', sku: 'SCG-1004', category: 'PPE' },
  { name: 'Alcohol Prep Pads', sku: 'SCG-1005', category: 'Infection Prevention' },
  { name: 'Orthopedic Support Brace', sku: 'SCG-1006', category: 'Daily Living Aids' }
];

const complianceItems = [
  {
    title: 'Authorized Distribution',
    text: 'Products are sourced through authorized distributors, manufacturers, and verified wholesale supply channels.'
  },
  {
    title: 'Product Traceability',
    text: 'We maintain documentation and traceable procurement standards to support supplier confidence and product integrity.'
  },
  {
    title: 'Quality Handling Standards',
    text: 'Products are handled, stored, and distributed according to professional operating standards.'
  },
  {
    title: 'Direct Webstore Sales',
    text: 'Our focus is on distribution through our owned platform and direct customer relationships.'
  },
  {
    title: 'Non-RX Product Focus',
    text: 'Our healthcare assortment is centered on non-prescription products, personal care, and wellness essentials.'
  },
  {
    title: 'Compliance Commitment',
    text: 'We do not participate in product exporting, government bids, or prescription drug distribution.'
  }
];

const whyBrandsPartner = [
  {
    title: 'Controlled Distribution',
    text: 'We support responsible growth through direct webstore sales and structured business purchasing relationships.'
  },
  {
    title: 'Scalable Procurement',
    text: 'Our infrastructure is built to support consistent purchasing, replenishment, and long-term supply relationships.'
  },
  {
    title: 'Long-Term Partnerships',
    text: 'We value stable supplier relationships built on transparency, compliance, and reliable execution.'
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function HomePage() {
  const [supplierForm, setSupplierForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    productLines: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSupplierChange = (e) => {
    setSupplierForm({
      ...supplierForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSupplierSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xaqpazwp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(supplierForm)
    });

    if (response.ok) {
      setSubmitted(true);
      setSupplierForm({
        companyName: '',
        contactName: '',
        email: '',
        productLines: ''
      });

      setTimeout(() => {
        const thankYouSection = document.getElementById('thank-you');
        if (thankYouSection) {
          thankYouSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      alert('There was a problem submitting the form. Please try again.');
    }
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            <img src="/logo.png" alt="Strategic Commerce Group logo" />
            <span>Strategic Commerce Group</span>
          </a>

          <nav className="nav-links">
  <a href="#brands">Brands</a>
  <a href="#medical">Medical Supply</a>
  <a href="#catalog">Catalog</a>
  <a href="#compliance">Compliance</a>
  <a href="#suppliers">Suppliers</a>
  <a href="/partner">Supplier Partnerships</a>
</nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <img
                src="/logo.png"
                alt="Strategic Commerce Group"
                className="hero-logo"
              />

              <p className="eyebrow light">
  Wholesale Distribution & E-Commerce Infrastructure
</p>

<h1>
  National wholesale distribution built for brand protection,
  compliance, and scalable growth.
</h1>

<p className="hero-copy">
  Strategic Commerce Group is a U.S.-based wholesale distribution company
  focused on health, wellness, grocery, household, and essential consumer
  product categories. We partner with manufacturers and distributors to
  support compliant sourcing, structured procurement, and scalable
  multi-channel distribution across wholesale, business purchasing, and
  digital commerce environments.
</p>

              <div className="hero-actions">
                <a className="button button-light" href="#distribution">
                  View Distribution Model
                </a>
                <a className="button button-accent" href="#supplier-application">
                  Become a Supplier
                </a>
              </div>

              <div className="hero-trust-row">
  <span>Authorized sourcing</span>
  <span>Brand protection focused</span>
  <span>Multi-channel distribution</span>
</div>
            </div>

            <div className="hero-panel hero-panel-premium">
              <p className="hero-panel-label">Operational Snapshot</p>
              <h3>Built to support responsible, scalable distribution growth.</h3>

              <div className="hero-metrics">
                <div className="hero-metric">
                  <strong>150+</strong>
                  <span>Brand relationships</span>
                </div>
                <div className="hero-metric">
                  <strong>5,000+</strong>
                  <span>Active SKUs</span>
                </div>
                <div className="hero-metric">
                  <strong>B2B</strong>
                  <span>Wholesale focus</span>
                </div>
                <div className="hero-metric">
                  <strong>U.S.</strong>
                  <span>Distribution reach</span>
                </div>
              </div>

              <div className="hero-panel-divider" />

              <ul className="hero-panel-list">
  <li>Authorized distributor and wholesale sourcing</li>
  <li>Health, wellness, grocery, and household categories</li>
  <li>Wholesale, B2B, and digital commerce support</li>
  <li>Scalable procurement and fulfillment infrastructure</li>
</ul>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-card">
              <strong>150+</strong>
              <span>Brands</span>
            </div>
            <div className="stat-card">
              <strong>5,000+</strong>
              <span>Products</span>
            </div>
            <div className="stat-card">
              <strong>U.S.-Based</strong>
              <span>Distribution</span>
            </div>
            <div className="stat-card">
              <strong>B2B</strong>
              <span>Wholesale Network</span>
            </div>
          </div>
        </section>

        <section className="section section-white" id="medical">
          <div className="container">
            <SectionHeading
              eyebrow="Medical supply distribution"
              title="Medical supply distribution and healthcare essentials built for reliable, compliant growth."
              text="Strategic Commerce Group provides access to non-prescription medical supplies, personal care items, home health products, and healthcare essentials through established wholesale distribution relationships. Our operating model is designed to support product integrity, consistent availability, and scalable distribution across business purchasing, wholesale, and digital commerce channels."
            />

            <div className="grid three-up">
              <Card
                title="Medical Supplies"
                text="Non-RX healthcare products, diagnostics, first aid, and daily-use medical essentials."
              />
              <Card
                title="Personal Care"
                text="Hygiene, wellness, and self-care categories supported by dependable sourcing relationships."
              />
              <Card
                title="Home Health"
                text="Products that support at-home wellness, monitoring, mobility, and routine care needs."
              />
            </div>

            <div className="coverage-box">
              <h3>Core Product Categories</h3>
              <p>
                Personal protective equipment, wound care, first aid, diagnostics,
                monitoring supplies, personal hygiene, OTC wellness products, and
                home health essentials.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="brands">
          <div className="container">
            <SectionHeading
              eyebrow="Brand portfolio"
              title="A brand portfolio that reflects our standards, partnerships, and commitment to quality."
              text="Our brand portfolio is a core part of our identity and the foundation of our business. We take pride in building relationships with trusted, recognized brands and curating a diverse product offering that reflects quality, reliability, and market demand. Each brand we represent contributes to our ability to serve customers across multiple categories while maintaining a high standard of consistency and professionalism. At Strategic Commerce Group, our portfolio represents our commitment to long-term partnerships, responsible distribution, and sustainable growth."
            />

            <div className="brand-grid">
  {brandWall.map((brand) => (
    <div className="brand-card" key={brand}>
      <div className="brand-dot" />
      <span>{brand}</span>
    </div>
  ))}
</div>
          </div>
        </section>

        <section className="section gradient-soft" id="distribution">
          <div className="container">
            <SectionHeading
              eyebrow="Distribution model"
              title="A distribution model built around direct webstore sales, business purchasing, and long-term supplier relationships."
              text="Strategic Commerce Group is focused on building a dependable distribution platform for healthcare, personal care, and essential consumer product categories. Our model emphasizes controlled sourcing, direct customer relationships, and scalable procurement workflows that support steady growth and supplier confidence."
            />

            <div className="grid three-up">
              <Card
                title="Direct Webstore Sales"
                text="A company-owned online storefront built to support compliant product presentation and direct customer purchasing."
              />
              <Card
                title="Business Purchasing Support"
                text="Structured purchasing workflows for approved business buyers and long-term commercial relationships."
              />
              <Card
                title="Procurement Infrastructure"
                text="Operational systems designed to support replenishment, order coordination, and scalable distribution."
              />
            </div>

            <div className="coverage-box">
              <h3>Operating Focus</h3>
              <p>
                U.S.-based distribution focused on direct webstore fulfillment,
                business purchasing support, and long-term supplier alignment.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="compliance">
          <div className="container">
            <SectionHeading
              eyebrow="Trust and compliance"
              title="Compliance, product integrity, and responsible sourcing are central to every supplier relationship we build."
              text="Strategic Commerce Group operates with a strong commitment to authorized sourcing, product traceability, and professional distribution standards. We source through legitimate and verifiable wholesale channels and maintain clear procurement practices designed to support supplier confidence. Our focus is on non-prescription healthcare products, personal care, and wellness essentials distributed through our owned platform and direct business relationships. We do not participate in exporting, government contract bids, or prescription drug distribution."
            />

            <div className="grid three-up">
              {complianceItems.map((item) => (
                <Card key={item.title} title={item.title} text={item.text} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" id="catalog">
  <div className="container">
    <SectionHeading
      eyebrow="Product Categories"
      title="Category-Focused Distribution Built for Scalable Growth"
      text="Strategic Commerce Group focuses on high-demand consumer categories supported by
authorized sourcing, operational consistency, and long-term supplier alignment.

Our assortment strategy is built around essential products with strong replenishment
velocity across e-commerce and wholesale distribution channels."
    />

    <div className="catalog-category-grid">
      <div className="catalog-category-card">
        <div className="catalog-icon">🏥</div>
        <h3>Medical & Home Health</h3>
        <p>
          Non-prescription supplies, diagnostics, home monitoring products,
          first aid, and daily-use healthcare essentials.
        </p>
      </div>

      <div className="catalog-category-card">
        <div className="catalog-icon">🧴</div>
        <h3>Health & Personal Care</h3>
        <p>
          Hygiene, wellness, self-care, and personal care categories aligned
          with consistent consumer demand.
        </p>
      </div>

      <div className="catalog-category-card">
        <div className="catalog-icon">🛒</div>
        <h3>Grocery & Consumables</h3>
        <p>
          High-velocity packaged goods and repeat-purchase essentials suited
          for scalable replenishment.
        </p>
      </div>

      <div className="catalog-category-card">
        <div className="catalog-icon">🏠</div>
        <h3>Household Essentials</h3>
        <p>
          Cleaning, maintenance, and everyday-use products that support
          dependable recurring demand.
        </p>
      </div>

      <div className="catalog-category-card">
        <div className="catalog-icon">🐾</div>
        <h3>Pet Supplies</h3>
        <p>
          Pet care, grooming, hygiene, and maintenance products across trusted
          consumer categories.
        </p>
      </div>

      <div className="catalog-category-card">
        <div className="catalog-icon">📦</div>
        <h3>General Consumer Goods</h3>
        <p>
          Complementary consumer product categories selected for operational
          fit, demand consistency, and channel expansion.
        </p>
      </div>
    </div>

    <div className="purchasing-box">
  <h3>Purchasing & Partnership Approach</h3>

  <p>
    Strategic Commerce Group operates with a long-term purchasing strategy
    centered on consistent reorder cycles, category depth, and supplier alignment.
    Our focus is on building stable procurement relationships that support
    predictable demand, structured growth, and responsible channel expansion.
  </p>

  <ul className="purchasing-list">
    <li>Focused on repeat purchasing and replenishment cycles</li>
    <li>Category-based buying vs. one-off SKU testing</li>
    <li>Aligned with supplier MAP and channel guidelines</li>
    <li>Built for long-term volume growth and predictable demand</li>
  </ul>
<p className="purchasing-note">
  Initial purchasing is structured to validate product performance and support scalable, long-term reorder growth.
</p>
    
    </div>

</div> 
</section>

        <section className="section gradient-soft" id="orders">
          <div className="container">
            <SectionHeading
              eyebrow="B2B order system"
              title="Modern ordering infrastructure powered by scalable technology and efficient workflows."
              text="Strategic Commerce Group utilizes modern B2B ordering methods and evolving technology to create a seamless purchasing experience for partners. Our infrastructure supports scalable order management, streamlined procurement, and flexible purchasing while improving accuracy and fulfillment speed. As our platform continues to advance, we are focused on integrating inventory visibility, account-based pricing, and automated workflows to deliver a reliable wholesale ordering experience."
            />

            <div className="grid four-up">
              <Card
                title="Wholesale Pricing"
                text="Tiered B2B pricing based on customer account structure and order volume."
              />
              <Card
                title="Case and Bulk Orders"
                text="Ordering options for business buyers, retailers, and larger procurement partners."
              />
              <Card
                title="Inventory Visibility"
                text="Future-ready architecture for catalog and stock availability."
              />
              <Card
                title="Automated Procurement"
                text="A structure that supports future supply chain integration and scalable purchasing workflows."
              />
            </div>
          </div>
        </section>

        <section className="section" id="suppliers">
          <div className="container">
            <div className="trust-bar">
              <div className="trust-item">✔ Authorized Distributor Sourcing</div>
              <div className="trust-item">✔ Direct Webstore Sales</div>
              <div className="trust-item">✔ Non-RX Product Focus</div>
              <div className="trust-item">✔ Transparent Procurement</div>
              <div className="trust-item">✔ U.S.-Based Distribution</div>
              <div className="trust-item">✔ Long-Term Supplier Partnerships</div>
            </div>

            <SectionHeading
              eyebrow="Supplier partnerships"
              title="A trusted distribution partner focused on compliance, reliable purchasing, and long-term growth."
              text="Strategic Commerce Group is committed to building lasting relationships with manufacturers and authorized distributors. We operate with a clear focus on direct webstore sales, compliant sourcing, transparent procurement, and dependable operational execution. Our goal is to create stable supplier relationships that support growth, consistency, and professional brand representation."
            />

            <div className="grid three-up">
              {whyBrandsPartner.map((item) => (
                <Card key={item.title} title={item.title} text={item.text} />
              ))}
            </div>
          </div>
        </section>

        <section className="section hero-mini">
          <div className="container hero-mini-grid">
            <div>
              <p className="eyebrow light">Become a distribution partner</p>

              <h2>
                Partner with a distribution company built for compliance,
                consistency, and long-term supply growth.
              </h2>

              <p>
                Strategic Commerce Group works with manufacturers and authorized
                distributors to support healthcare, personal care, and essential
                product categories through direct webstore sales and structured
                business purchasing relationships.
              </p>
            </div>

            <a className="button button-light" href="#supplier-application">
              Apply for partnership
            </a>
          </div>
        </section>

        <section className="section section-white" id="supplier-application">
          <div className="container narrow">
            <SectionHeading
              eyebrow="Supplier application"
              title="A structured onboarding process designed to support strong, long-term supplier partnerships."
              text="Our supplier application process reflects the standards of Strategic Commerce Group, focused on transparency, compliance, and responsible distribution."
            />

            <div className="portal-card">
              {submitted ? (
                <div id="thank-you">
                  <h3>Your partnership inquiry has been submitted.</h3>
                  <p>
                    Thank you for your interest in working with Strategic Commerce Group.
                    Our team will review your information and follow up as appropriate.
                  </p>
                </div>
              ) : (
                <form className="form-grid" onSubmit={handleSupplierSubmit}>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company name"
                    required
                    value={supplierForm.companyName}
                    onChange={handleSupplierChange}
                  />
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Contact name"
                    required
                    value={supplierForm.contactName}
                    onChange={handleSupplierChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    value={supplierForm.email}
                    onChange={handleSupplierChange}
                  />
                  <input
                    type="text"
                    name="productLines"
                    placeholder="Brand or product lines"
                    value={supplierForm.productLines}
                    onChange={handleSupplierChange}
                  />

                  <button className="button button-primary" type="submit">
                    Submit partnership inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionHeading
              eyebrow="Procurement standards"
              title="A procurement approach built on integrity, traceability, and trusted wholesale relationships."
              text="Our procurement standards reflect the operating principles of Strategic Commerce Group. We are committed to sourcing products through authorized distributors, manufacturers, and verified wholesale channels to support authenticity, consistency, and supplier confidence. Through disciplined documentation and traceable purchasing practices, we maintain a professional distribution model built for long-term growth."
            />

            <div className="grid three-up">
              <Card
                title="Authorized Distributor Sourcing"
                text="Inventory is procured from authorized distributors, manufacturers, and verified wholesale partners."
              />
              <Card
                title="Traceable Procurement"
                text="Our process supports documentation and traceability for supplier relationships and inventory sources."
              />
              <Card
                title="Quality Assurance"
                text="Products are stored, handled, and distributed according to professional supply chain standards."
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <img
              className="footer-logo"
              src="/logo.png"
              alt="Strategic Commerce Group logo"
            />
            <p>Strategic Commerce Group</p>
          </div>

          <div>
            <p>www.strategiccommercegroup.com</p>
            <p>U.S.-based distribution company focused on healthcare, personal care, and essential product categories.</p>

            <p>
              Phone:{' '}
              <a href="tel:14809155598" className="footer-link">
                (480) 915-5598
              </a>
            </p>

            <p>
              For more information, contact us at{' '}
              <a
                href="mailto:info@strategiccommercegroup.com"
                className="footer-link"
              >
                info@strategiccommercegroup.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </Router>
  );
}
