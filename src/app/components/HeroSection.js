export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="ripple-bg" aria-hidden>
        <div className="ripple" />
        <div className="ripple" />
        <div className="ripple" />
        <div className="ripple" />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">
          Hypereutrophic Lake Restoration &amp; Algae Control
        </p>
        <h1 className="hero-headline">
          We Restore <em>Dead Lakes</em>
          <br />
          Back to Life
        </h1>
        <p className="hero-sub">
          Bhagwati Equipments and Services manufactures and deploys advanced
          water treatment systems — from factory ETP and RO plants to
          full-scale restoration of hypereutrophic lakes choked by algae and
          nutrient overload.
        </p>
        <div className="hero-actions">
          <a href="#lake" className="btn-primary">
            Lake Restoration
          </a>
          <a href="#products" className="btn-outline">
            Our Products
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-number">80+</div>
            <div className="stat-label">Plants Installed</div>
          </div>
          <div>
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div>
            <div className="stat-number">6</div>
            <div className="stat-label">Lake Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
