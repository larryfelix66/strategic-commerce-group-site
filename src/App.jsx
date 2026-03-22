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
  ...Array.from({ length: 1 }, (_, i) => `Brand Partner ${i + 1}`)
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
            </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
  <div className="container hero-grid">
    <div>
      <img
        src="/logo.png"
        alt="Strategic Commerce Group"
        className="hero-logo"
      />

      <p className="eyebrow light">National Wholesale Distribution</p>

      <h1>
        Reliable supply. Trusted partnerships. Scalable distribution.
      </h1>

      <p className="hero-copy">
        Strategic Commerce Group provides dependable access to quality inventory,
        streamlined procurement, and professional distribution support.
        We help brands, retailers, and partners improve efficiency,
        strengthen supply continuity, and scale with confidence.
      </p>

      <div className="hero-actions">
        <a className="button button-accent" href="#supplier-application">
          Become a Supplier
        </a>

        <a className="button button-outline" href="#distribution">
          View Distribution Model
        </a>
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
  title="A brand portfolio that reflects our standards, partnerships, and commitment to quality."
  text="Our brand portfolio is a core part of our identity and the foundation of our business. We take pride in building relationships with trusted, recognized brands and curating a diverse product offering that reflects quality, reliability, and market demand. Each brand we represent contributes to our ability to serve customers across multiple categories while maintaining a high standard of consistency and professionalism. At Strategic Commerce Group, our portfolio represents our commitment to long-term partnerships, responsible distribution, and sustainable growth."
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
  title="A multi-channel distribution model built to expand reach, drive sales, and support long-term growth."
  text="Our ability to operate across retail, wholesale, and e-commerce channels is a core strength of Strategic Commerce Group. By positioning products where they perform best, we expand brand reach, increase visibility, and support consistent sales across multiple channels. This approach provides our partners with broader market access, controlled distribution, and a scalable pathway for growth, while strengthening our ability to adapt and deliver long-term value."
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
      title="Trust and compliance are the foundation of every supplier relationship we build."
      text="Strategic Commerce Group operates with a strict commitment to sourcing products exclusively through authorized distributors, manufacturers, and verified wholesale channels. We maintain clear procurement documentation, uphold MAP and brand policy standards, and prioritize responsible marketplace representation to protect brand integrity. Our processes are designed to align with manufacturer expectations, ensuring transparency, consistency, and accountability across every transaction. By maintaining high compliance standards and a long-term partnership approach, we position ourselves as a reliable and trusted distribution partner—making it easy for brands and suppliers to confidently approve and grow with us."
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
  title="A growing catalog built to support scale, consistency, and market expansion."
  text="Our product catalog reflects the continued growth of Strategic Commerce Group. We are focused on building a diverse, high-quality selection of products sourced through trusted channels, allowing us to meet the evolving needs of our customers and partners. As our catalog expands, so does our ability to strengthen market presence, support scalable distribution, and deliver reliable supply across retail, wholesale, and e-commerce channels."
/>
            <div className="catalog-grid">
              {catalogItems.map((item) => (
                <div className="catalog-card" key={item.sku}> <span className="pill">{item.category}</span> <h3>{item.name}</h3> <p>{item.description}</p> </div>
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
  title="Modern ordering infrastructure powered by scalable technology and efficient workflows."
  text="Strategic Commerce Group utilizes modern B2B ordering methods and evolving technology to create a seamless purchasing experience for our partners. Our infrastructure supports scalable order management, streamlined procurement, and flexible purchasing, while improving accuracy and fulfillment speed. As our platform continues to advance, we are focused on integrating real-time inventory, tiered pricing, and automated workflows to deliver a reliable and efficient wholesale ordering experience."
/>
            <div className="grid four-up">
              <Card title="Wholesale Pricing" text="Tiered B2B pricing based on customer account structure and order volume." />
              <Card title="Case and Pallet Orders" text="Bulk ordering options for retailers, distributors, and larger procurement partners." />
              <Card title="Inventory Sync" text="Future-ready architecture for real-time stock and catalog availability." />
              <Card title="Automated Procurement" text="A structure that supports future supply chain integration and scalable purchasing workflows." />
            </div>
          </div>
        </section>        

        <section className="section" id="suppliers">
          <div className="container">
            <div className="trust-bar">
  <div className="trust-item">✔ Authorized Distributor Sourcing</div>
  <div className="trust-item">✔ MAP Policy Compliant</div>
  <div className="trust-item">✔ Brand Protection Focused</div>
  <div className="trust-item">✔ Transparent Procurement</div>
  <div className="trust-item">✔ Scalable Distribution Network</div>
  <div className="trust-item">✔ Long-Term Partnership Approach</div>
</div>
                       <SectionHeading
  eyebrow="Supplier acquisition"
  title="A trusted distribution partner focused on long-term growth, compliance, and brand protection."
  text="Strategic Commerce Group is committed to building long-term relationships with manufacturers and authorized distributors. We operate with a strong focus on brand integrity, compliant sourcing, and controlled distribution across all channels. By aligning with supplier expectations, maintaining transparency, and supporting responsible marketplace practices, we provide a reliable and professional partnership model that allows brands to confidently expand and grow with us."
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
  Partner with a distribution network built for growth, compliance, and long-term brand value.
</h2>

<p>
  Strategic Commerce Group works with manufacturers and authorized distributors to responsibly expand product reach across retail, wholesale, and e-commerce channels. Our focus on brand protection, transparent operations, and controlled growth allows us to serve as a reliable extension of your distribution strategy.
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
  title="A procurement approach built on integrity, transparency, and trusted partnerships."
  text="Our procurement standards reflect the core values of Strategic Commerce Group. We are committed to sourcing inventory exclusively through authorized distributors, manufacturers, and verified wholesale channels, ensuring authenticity, reliability, and brand alignment. Through disciplined processes, documentation, and traceability, we support responsible distribution while protecting brand integrity and building long-term supplier trust."
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
            <img
              className="footer-logo"
              src="/logo.png"
              alt="Strategic Commerce Group logo"
            />
            <p>Strategic Commerce Group</p>
          </div>

          <div>
            <p>strategiccommercegroup.com</p>
            <p>National wholesale distribution and commerce infrastructure.</p>
            <p>
              Phone:{' '}
              <a href="tel:14809155598" className="footer-link">
                (480) 915-5598
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
