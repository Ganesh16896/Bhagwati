"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-hero">
          <div className="about-hero-text">
            <p className="about-label">About Us</p>
            <h2 className="about-title">
              Driven by purpose,
              <br />
              powered by expertise
            </h2>
            <p className="about-intro">
              Bhagwati Equipments & Services is a manufacturer and service
              provider of water treatment, wastewater treatment, and
              environmental restoration solutions — from design through
              maintenance.
            </p>
          </div>
          <div className="about-hero-image">
            <Image
              src="/images/about_u.jpg"
              alt=""
              width={800}
              height={400}
              className="about-hero-img"
            />
          </div>
        </div>

        {/* <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support & AMC</span>
          </div>
        </div> */}

        <div className="about-grid">
          <div className="about-content">
            <p>
              We design, manufacture, install, and maintain high-performance
              systems — ETP, STP, WTP, RO Plants, Ultra Filtration, Water
              Softeners, and DM Plants. Every solution is built for efficiency,
              compliance, and long-term reliability.
            </p>
            <p>
              With a commitment to quality, innovation, and sustainability, we
              help industries and communities achieve efficient water
              management, environmental compliance, and long-term operational
              excellence.
            </p>
            <div className="" style={{ borderRadius: "10px" }}>
              <Image
                src="/images/manufacture.jpg"
                alt=""
                width={800}
                height={290}
                className=""
              />
            </div>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12L6 8M6 8L10 12M6 8V20" />
                  <path d="M22 12L18 8M18 8L14 12M18 8V20" />
                  <path d="M12 2V4M12 6V8M12 10V12" />
                </svg>
              </div>
              <h3 className="card-title">Vision</h3>
              <p className="card-text">
                To be the most trusted partner in water and environmental
                solutions — restoring ecosystems, enabling compliance, and
                conserving resources for future generations.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6V12L16 14" />
                </svg>
              </div>
              <h3 className="card-title">Mission</h3>
              <ul className="card-list">
                <li>
                  Deliver high-quality water & wastewater treatment systems.
                </li>
                <li>
                  Restore aquatic ecosystems through sustainable solutions.
                </li>
                <li>Help industries achieve environmental compliance.</li>
                <li>Drive innovation in environmental technologies.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <Image
            src="/images/about_us.jpg"
            alt="Lake Restoration by Bhagwati"
            className="about-image"
            width={1200}
            height={480}
          />
          <div className="about-image-caption">
            Hypereutrophic lake restoration — before and after treatment
          </div>
        </div>
      </div>
    </section>
  );
}
