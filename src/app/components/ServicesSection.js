const services = [
  {
    icon: "🔧",
    name: "Annual Maintenance Contract",
    desc: "Scheduled inspections, preventive maintenance, and rapid breakdown support to keep your plant running at peak efficiency year-round.",
  },
  {
    icon: "📊",
    name: "Environmental Monitoring & Analysis",
    desc: "Continuous and periodic monitoring of air, water, and soil quality. NABL-accredited lab analysis with detailed compliance reports.",
  },
  {
    icon: "📋",
    name: "Environmental Audit",
    desc: "Systematic evaluation of your facility's environmental performance against regulatory standards and ISO 14001 requirements.",
  },
  {
    icon: "🧪",
    name: "Chemical & Spares Supply",
    desc: "Genuine replacement parts and treatment chemicals sourced and supplied for all makes of water and effluent treatment plants.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <p className="section-label">What We Do</p>
        <h2 className="section-title">Our Services</h2>
        <p className="services-intro">
          End-to-end support — from compliance and monitoring to maintenance and
          supply
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.name} className="service-card">
              <span className="service-step">0{i + 1}</span>
              <div className="service-icon-wrap">{s.icon}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
