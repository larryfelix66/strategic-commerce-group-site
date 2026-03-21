import React, { useState } from 'react';

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

const brandWall = [
  ...featuredBrands,
  ...Array.from({ length: 133 }, (_, i) => `Brand Partner ${i + 1}`)
];

const catalogItems = [
  { name: 'Medical Diagnostic Device', sku: 'SCG-1001', category: 'Medical' },
  { name: 'Professional Hair Trimmer', sku: 'SCG-1002', category: 'Personal Care' },
  { name: 'Digital Blood Pressure Monitor', sku: 'SCG-1003', category: 'Healthcare' },
  { name: 'Electric Toothbrush', sku: 'SCG-1004', category: 'Oral Care' },
  { name: 'LED Desk Lamp', sku: 'SCG-1005', category: 'Electronics' },
  { name: 'Orthopedic Support Brace', sku: 'SCG-1006', category: 'Medical' }
];

const complianceItems = [
  {
    title: 'Authorized Supply Chains',
    text: 'Inventory is sourced through authorized distributors, manufacturers, and verified wholesale partners.'
  },
  {
    title: 'MAP Policy Compliance',
    text: 'We support responsible pricing standards and brand policy compliance across distribution channels.'
  },
  {
    title: 'Brand Protection',
    text: 'We prioritize long-term brand value, channel integrity, and responsible ecommerce representation.'
  },
  {
    title: 'Retail Channel Management',
    text: 'Our network supports controlled retail distribution and vetted ecommerce partnerships.'
  },
  {
    title: 'Supply Chain Transparency',
    text: 'Strategic Commerce Group maintains traceable procurement standards and source documentation.'
  },
  {
    title: 'Marketplace Standards',
    text: 'We promote responsible marketplace distribution aligned with manufacturer expectations.'
  }
];

const whyBrandsPartner = [
  {
    title: 'Responsible Marketplace Distribution',
    text: 'We help brands expand through retail and ecommerce channels while protecting brand value.'
  },
  {
    title: 'Scalable Distribution',
    text: 'Our model supports wholesale, retail, and ecommerce growth across North America.'
  },
  {
    title: 'Long-Term Partnerships',
    text: 'We focus on sustainable supplier relationships and strategic distribution growth.'
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

export default function App() {
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
            <a href="#catalog">Catalog</a>
            <a href="#distribution">Distribution</a>
            <a href="#suppliers">Suppliers</a>
            <a href="#portal">Wholesale Login</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow light">National Wholesale Distribution</p>
              <h1>Distribution infrastructure built to impress manufacturers and wholesale partners.</h1>
              <p className="hero-copy">
                Strategic Commerce Group connects manufacturers, authorized distributors, retailers,
                and ecommerce sellers through a professional B2B distribution model.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#portal">Open Wholesale Account</a>
                <a className="button button-accent" href="#supplier-application">Become a Supplier</a>
              </div>
            </div>
            <div className="hero-panel">
              <h3>Distribution Overview</h3>
              <ul>
                <li>150+ brand partnerships</li>
                <li>5,000+ active SKUs</li>
                <li>Nationwide B2B distribution</li>
                <li>Retail and ecommerce supply</li>
                <li>Procurement and fulfillment solutions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-card"><strong>150+</strong><span>Brands</span></div>
            <div className="stat-card"><strong>5,000+</strong><span>Products</span></div>
            <div className="stat-card"><strong>Nationwide</strong><span>Distribution</span></div>
            <div className="stat-card"><strong>B2B</strong><span>Wholesale Network</span></div>
          </div>
        </section>

        <section className="section" id="brands">
          <div className="container">
            <SectionHeading
              eyebrow="Brand portfolio"
              title="A broad catalog that gives your company instant scale."
              text="Use this wall as a starting point today, then replace placeholders with official brand logos over time."
            />
            <div className="brand-grid">
              {brandWall.map((brand) => (
                <div className="brand-chip" key={brand}>
                  <div className="brand-mark" aria-hidden="true" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section gradient-soft" id="distribution">
          <div className="container">
            <SectionHeading
              eyebrow="Distribution network"
              title="National reach across retail, ecommerce, and wholesale channels."
              text="This section is built to reassure supplier reps that Strategic Commerce Group operates like a serious distribution partner."
            />
            <div className="grid three-up">
              <Card title="Retail Distribution" text="Supplying specialty retailers and established resellers across multiple product categories." />
              <Card title="Ecommerce Channels" text="Supporting responsible marketplace and online retail distribution with channel discipline." />
              <Card title="Fulfillment Infrastructure" text="Procurement, order management, and fulfillment processes designed for scalable B2B operations." />
            </div>
            <div className="coverage-box">
              <h3>North American Distribution Coverage</h3>
              <p>West Coast distribution, Central distribution, East Coast distribution, online marketplace supply, B2B retail supply, and wholesale partner coverage.</p>
            </div>
          </div>
        </section>

        <section className="section" id="compliance">
          <div className="container">
            <SectionHeading
              eyebrow="Trust and compliance"
              title="Distribution standards that help brands feel safe approving your account."
              text="These are the exact signals many manufacturers and authorized distributors look for when they review a prospective wholesale partner."
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
              eyebrow="Product catalog"
              title="A wholesale catalog structure that looks enterprise-ready."
              text="Catalog access can remain gated until you are ready to launch a live customer portal later."
            />
            <div className="catalog-grid">
              {catalogItems.map((item) => (
                <div className="catalog-card" key={item.sku}>
                  <span className="pill">{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>SKU: {item.sku}</p>
                  <a className="button button-outline" href="#catalog-request">View details</a>
                </div>
              ))}
            </div>
            <div className="catalog-request" id="catalog-request">
              <h3>Catalog access request</h3>
              <p>Full wholesale catalog access will be available soon for approved retailers and distribution partners.</p>
              <button className="button button-primary" type="button">Request Catalog Access — Coming Soon</button>
            </div>
          </div>
        </section>

        <section className="section gradient-soft" id="orders">
          <div className="container">
            <SectionHeading
              eyebrow="B2B order system"
              title="Ordering infrastructure designed to look like a real wholesale platform."
              text="This section creates the right perception today and can later evolve into a live portal with pricing tiers, MOQ controls, and real-time inventory."
            />
            <div className="grid four-up">
              <Card title="Wholesale Pricing" text="Tiered B2B pricing based on customer account structure and order volume." />
              <Card title="Case and Pallet Orders" text="Bulk ordering options for retailers, distributors, and larger procurement partners." />
              <Card title="Inventory Sync" text="Future-ready architecture for real-time stock and catalog availability." />
              <Card title="Automated Procurement" text="A structure that supports future supply chain integration and scalable purchasing workflows." />
            </div>
          </div>
        </section>

        <section className="section" id="portal">
          <div className="container narrow">
            <SectionHeading
              eyebrow="Wholesale login portal"
              title="Private customer access for approved wholesale buyers."
              text="This portal can remain informational today and later connect to Shopify B2B, NetSuite, or another ordering platform."
            />
            <div className="portal-card">
              <div className="form-grid">
                <input type="email" placeholder="Email address" />
                <input type="password" placeholder="Password" />
                <button className="button button-primary" type="button">Login</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="suppliers">
          <div className="container">
            <SectionHeading
              eyebrow="Supplier acquisition"
              title="Pages designed to get wholesale approvals."
              text="This messaging helps sales managers and manufacturer reps understand why partnering with Strategic Commerce Group benefits their brand."
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
              <h2>Professional positioning for manufacturers, importers, and authorized distributors.</h2>
              <p>
                Strategic Commerce Group is structured to look like a long-term distribution partner with a focus on responsible channel growth.
              </p>
            </div>
            <a className="button button-light" href="#supplier-application">Apply for partnership</a>
          </div>
        </section>

        <section className="section section-white" id="supplier-application">
  <div className="container narrow">
    <SectionHeading
      eyebrow="Supplier application"
      title="A structured onboarding process designed to support strong, long-term supplier partnerships."
      text="Our supplier application process reflects the standards of Strategic Commerce Group, focused on transparency, compliance, and responsible distribution. This initial step allows us to align with manufacturers and authorized distributors, understand product lines, and establish a foundation for long-term collaboration. As our systems evolve, this process will support streamlined onboarding and ongoing partnership management."
    />

    <div className="portal-card">
      <form className="form-grid" onSubmit={handleSupplierSubmit} autoComplete="off">
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
    </div>
  </div>
</section>

{submitted && (
  <section className="section section-white" id="thank-you">
    <div className="container narrow">
      <SectionHeading
        eyebrow="Thank you"
        title="Your partnership inquiry has been submitted."
        text="Thank you for your interest in working with Strategic Commerce Group. Our team will review your information and follow up as appropriate."
      />
    </div>
  </section>
)}

        <section className="section" id="about">
          <div className="container">
            <SectionHeading
              eyebrow="Procurement standards"
              title="Authorized supply chain and procurement standards."
              text="This is one of the strongest trust-building sections for supplier approvals, because it signals that you are not sourcing inventory through retail arbitrage or gray-market channels."
            />
            <div className="grid three-up">
              <Card title="Authorized Distributor Sourcing" text="Inventory is procured from authorized distributors, manufacturers, and verified wholesale partners." />
              <Card title="Traceable Procurement" text="Our process supports documentation and traceability for supplier relationships and inventory sources." />
              <Card title="Quality Assurance" text="Products are stored, handled, and distributed according to professional supply chain standards." />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <img className="footer-logo" src="/logo.png" alt="Strategic Commerce Group logo" />
            <p>Strategic Commerce Group</p>
          </div>
          <div>
            <p>strategiccommercegroup.com</p>
            <p>National wholesale distribution and commerce infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
