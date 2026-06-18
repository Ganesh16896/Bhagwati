const lakeFeatures = [
  {
    icon: "🧫",
    title: "Algae Bloom Control",
    desc: "Selective algaecide application and aeration strategies that break the nutrient cycle without harming aquatic biodiversity.",
  },
  {
    icon: "🌊",
    title: "Sediment Dredging & Nutrient Lock",
    desc: "Removal of phosphorus-rich bottom sediment that fuels recurring blooms in hypereutrophic water bodies.",
  },
  {
    icon: "🌿",
    title: "Macrophyte Re-establishment",
    desc: "Native aquatic plant communities restored to stabilise the shoreline and outcompete algae through natural shading.",
  },
  {
    icon: "🔄",
    title: "Inflow Load Reduction",
    desc: "Source control through constructed wetlands, diversion channels, and upstream STP upgrades to cut nutrient loading.",
  },
];

const tsiSteps = [
  "Baseline water quality survey & TSI mapping",
  "Algae bloom suppression — aeration + algaecide",
  "Sediment nutrient lock or dredge",
  "Inflow load reduction via upstream STP",
  "Macrophyte establishment & monitoring",
  "Long-term AMC & quarterly TSI reporting",
];

const lakePhotos = [
  {
    img: "/images/WaterQualitySurvey.jpg",
    tag: "Survey",
    title: "Baseline Water Quality Survey",
    desc: "Initial TSI mapping and nutrient profiling of hypereutrophic water bodies.",
  },
  {
    img: "/images/aerace_system.jpg",
    tag: "Aeration",
    title: "Aeration System Installation",
    desc: "Diffused aeration arrays deployed to restore dissolved oxygen levels.",
  },
  {
    img: "/images/Wetland.avif",
    tag: "Wetland",
    title: "Constructed Wetland",
    desc: "Engineered wetlands for natural nutrient polishing and inflow treatment.",
  },
  {
    img: "/images/After.jpg",
    tag: "After",
    title: "Post-Restoration Recovery",
    desc: "Clear water phase established after algae bloom suppression program.",
  },
  {
    img: "/images/Monitoring.jpeg",
    tag: "Monitoring",
    title: "Water Quality Monitoring",
    desc: "Real-time TSI tracking and quarterly reporting for long-term AMC.",
  },
  {
    img: "/images/Analysis.webp",
    tag: "Analysis",
    title: "Laboratory TSI Analysis",
    desc: "Sediment nutrient analysis and algae species identification in our lab.",
  },
];

export default function LakeSection() {
  return (
    <section id="lake" className="lake-section">
      <div className="container">
        <div className="lake-grid">
          <div>
            <p className="lake-label">Specialisation</p>
            <h2 className="lake-title">
              Hypereutrophic Lake
              <br />
              Restoration
            </h2>
            <p className="lake-intro">
              A hypereutrophic lake carries a Trophic State Index above 80 —
              nitrogen and phosphorus concentrations so extreme that
              cyanobacteria blooms block sunlight, deplete oxygen, and kill
              aquatic life. Recovery demands a staged, ecosystem-wide
              intervention.
            </p>
            <p className="lake-desc">
              We design, manufacture, and commission the equipment needed at
              every stage — aeration systems, algae harvesting units,
              constructed wetlands, and inlet treatment plants — then back them
              with long-term AMC support.
            </p>
            <div className="lake-features">
              {lakeFeatures.map((f) => (
                <div key={f.title} className="lf-item">
                  <span className="lf-icon">{f.icon}</span>
                  <div>
                    <h4 className="lf-title">{f.title}</h4>
                    <p className="lf-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tsi-card">
            <p className="tsi-label">Trophic State Index (TSI)</p>
            <p className="tsi-value">80+</p>
            <p className="tsi-note">
              Hypereutrophic threshold — our intervention range
            </p>
            <div className="tsi-bar-track">
              <div className="tsi-bar-fill" style={{ width: "90%" }} />
            </div>
            <div className="tsi-range">
              <span>Oligotrophic</span>
              <span>Eutrophic</span>
              <span>Hyper 80+</span>
            </div>
            <div className="tsi-steps">
              {tsiSteps.map((s, i) => (
                <div key={i} className="tsi-step">
                  <span className="tsi-step-num">{i + 1}</span>
                  <span className="tsi-step-text">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lake-gallery">
          <div className="lake-gallery-header">
            <p className="lake-label">Project Gallery</p>
            <h3 className="lake-gallery-title">Restoration in Action</h3>
            <p className="lake-gallery-desc">
              Real projects across India — from baseline survey to
              post-restoration recovery.
            </p>
          </div>
          <div className="lake-gallery-grid">
            {lakePhotos.map((photo) => (
              <div key={photo.title} className="lake-photo-card">
                <div
                  className="lake-photo-img"
                  style={{ backgroundImage: `url(${photo.img})` }}
                />
                <div className="lake-photo-body">
                  <span className="lake-photo-tag">{photo.tag}</span>
                  <h4 className="lake-photo-title">{photo.title}</h4>
                  <p className="lake-photo-desc">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
