const productItems = [
  {
    name: "Effluent Treatment Plants (ETP)",
    desc: "Industrial ETP systems engineered to treat and neutralise hazardous effluents before safe discharge, meeting CPCB/SPCB norms.",
    img: "/images/etp.jpeg",
    imgPosition: "0% 10%",
    tag: "ETP",
  },
  {
    name: "Sewage Treatment Plants (STP)",
    desc: "Compact STP solutions for residential complexes, commercial buildings, and municipalities — biological and membrane-based designs.",
    img: "/images/stp.jpeg",
    imgPosition: "0% 75%",
    tag: "STP",
  },
  {
    name: "Water Treatment Plants",
    desc: "Full-cycle WTP for potable and process water: coagulation, flocculation, filtration, and disinfection stages.",
    img: "/images/wtp.jpeg",
    imgPosition: "0% 5%",
    tag: "WTP",
  },
  {
    name: "Water Softener Plants",
    desc: "Ion-exchange softening systems to eliminate hardness and prevent scaling in boilers, cooling towers, and process lines.",
    img: "/images/wsop.jpg",
    imgPosition: "0% 90%",
    tag: "WSP",
  },
  {
    name: "Zero Liquid Discharge Systems",
    desc: "End-to-end ZLD plants that recover water for reuse and achieve zero effluent discharge — meeting the strictest regulatory mandates.",
    img: "/images/zlds.jpeg",
    imgPosition: "0% 5%",
    tag: "ZLD",
  },
  {
    name: "Demineralization Plants",
    desc: "DM plants for high-purity water requirements in power plants, pharmaceuticals, and electronics manufacturing.",
    img: "/images/dmplate.jpg",
    imgPosition: "0% 55%",
    tag: "DM",
  },
  {
    name: "Reverse Osmosis Plants (RO)",
    desc: "High-recovery RO systems for industrial and drinking water applications. Custom TDS targets, pre-treatment included.",
    img: "/images/rop.jpg",
    imgPosition: "0% 6%",
    tag: "RO",
  },
  {
    name: "Chemicals & Spares",
    desc: "Activated carbon, resin, antiscalants, and genuine replacement parts supplied for all makes of water treatment plants.",
    img: "/images/ro-chemicals.jpeg",
    imgPosition: "0% 100%",
    tag: "CHEM",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <p className="section-label">What We Make</p>
        <h2 className="section-title">Our Products</h2>
        <p className="products-intro">
          Every plant is designed, built, and commissioned in-house. Below are
          photographs from our actual installed projects.
        </p>

        <div className="products-photo-grid">
          {productItems.map((p) => (
            <div key={p.name} className="photo-card">
              <div
                className="photo-card-img"
                style={{
                  backgroundImage: `url(${p.img})`,
                  backgroundPosition: p.imgPosition,
                }}
              >
                <span className="photo-tag">{p.tag}</span>
              </div>
              <div className="photo-card-body">
                <h3 className="photo-card-title">{p.name}</h3>
                <p className="photo-card-desc">{p.desc}</p>
                <a href="#contact" className="product-link">
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
