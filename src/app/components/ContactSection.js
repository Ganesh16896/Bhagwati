export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Talk to Us</p>
        <h2 className="section-title" style={{ color: "var(--dark-slate)" }}>
          Get in Touch
        </h2>
        <div className="contact-grid">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Organisation</label>
                <input type="text" placeholder="Company / Department" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>I am inquiring about</label>
              <select defaultValue="">
                <option value="" disabled>
                  Select an interest
                </option>
                <option>Lake Restoration / Algae Control</option>
                <option>Effluent Treatment Plant (ETP)</option>
                <option>Sewage Treatment Plant (STP)</option>
                <option>Water Treatment Plant (WTP)</option>
                <option>Zero Liquid Discharge (ZLD)</option>
                <option>Reverse Osmosis Plant (RO)</option>
                <option>Water Softener Plant</option>
                <option>Demineralization Plant</option>
                <option>Annual Maintenance Contract</option>
                <option>Environmental Monitoring & Audit</option>
                <option>Chemical & Spares</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Describe your requirement — site location, capacity, current water quality, etc." />
            </div>
            <button type="submit" className="form-submit">
              Send Enquiry →
            </button>
          </form>
          <div className="contact-info">
            <h3>
              Bhagwati Equipments
              <br />
              and Services
            </h3>
            <p>
              Manufacturers and service providers for water treatment systems
              and lake restoration projects. Reach us for technical
              consultation, site visits, or quotation requests.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-item-icon">📍</span>
                <div className="contact-item-text">
                  <strong>Office Address</strong>
                  Your full address here, City, State — PIN
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">📞</span>
                <div className="contact-item-text">
                  <strong>Phone</strong>
                  +91 XXXXX XXXXX
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">✉️</span>
                <div className="contact-item-text">
                  <strong>Email</strong>
                  info@bhagwatiequipments.com
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">🕑</span>
                <div className="contact-item-text">
                  <strong>Working Hours</strong>
                  Mon – Sat, 9:00 AM – 6:00 PM IST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
