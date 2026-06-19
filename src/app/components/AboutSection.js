"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-8 py-32 bg-off-white relative max-md:px-5 max-md:py-20 max-[480px]:px-4 max-[480px]:py-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-12 max-md:gap-8 max-md:mb-8">
          <div className="max-w-[560px] max-md:max-w-full">
            <p className="text-base font-semibold tracking-[0.25em] uppercase text-algae mb-4">
              About Us
            </p>
            <h2 className="font-oswald text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] text-dark-slate mb-6 max-w-[540px] max-[480px]:text-[2rem]">
              Driven by purpose,
              <br />
              powered by expertise
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-text-muted max-w-[600px] mb-14 max-md:mb-0 max-[480px]:text-[0.97rem]">
              Bhagwati Equipments & Services is a manufacturer and service
              provider of water treatment, wastewater treatment, and
              environmental restoration solutions — from design through
              maintenance.
            </p>
          </div>
          <div className="flex justify-center items-center max-md:order-[-1]">
            <Image
              src="/images/about_u.jpg"
              alt=""
              width={800}
              height={400}
              className="w-full max-w-[600px] h-auto rounded-lg max-md:max-w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16 max-md:gap-8 max-md:mb-10 max-[480px]:gap-6">
          <div>
            <p className="text-[0.95rem] leading-[1.8] text-text-muted mb-[1.2rem]">
              We design, manufacture, install, and maintain high-performance
              systems — ETP, STP, WTP, RO Plants, Ultra Filtration, Water
              Softeners, and DM Plants. Every solution is built for efficiency,
              compliance, and long-term reliability.
            </p>
            <p className="text-[0.95rem] leading-[1.8] text-text-muted mb-[1.2rem]">
              With a commitment to quality, innovation, and sustainability, we
              help industries and communities achieve efficient water
              management, environmental compliance, and long-term operational
              excellence.
            </p>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src="/images/manufacture.jpg"
                alt="Manufacturing"
                width={800}
                height={290}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[rgba(92,64,51,0.08)] rounded-lg p-6 pl-7 transition duration-200 hover:border-[rgba(92,64,51,0.18)] hover:shadow-[0_4px_20px_rgba(92,64,51,0.06)]">
              <div className="w-8 h-8 text-algae mb-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M2 12L6 8M6 8L10 12M6 8V20" />
                  <path d="M22 12L18 8M18 8L14 12M18 8V20" />
                  <path d="M12 2V4M12 6V8M12 10V12" />
                </svg>
              </div>
              <h3 className="font-oswald text-[1.1rem] font-semibold text-dark-slate mb-2 tracking-[0.03em] uppercase">
                Vision
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-text-muted">
                To be the most trusted partner in water and environmental
                solutions — restoring ecosystems, enabling compliance, and
                conserving resources for future generations.
              </p>
            </div>

            <div className="bg-white border border-[rgba(92,64,51,0.08)] rounded-lg p-6 pl-7 transition duration-200 hover:border-[rgba(92,64,51,0.18)] hover:shadow-[0_4px_20px_rgba(92,64,51,0.06)]">
              <div className="w-8 h-8 text-algae mb-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6V12L16 14" />
                </svg>
              </div>
              <h3 className="font-oswald text-[1.1rem] font-semibold text-dark-slate mb-2 tracking-[0.03em] uppercase">
                Mission
              </h3>
              <ul className="list-none m-0 p-0">
                <li className="relative pl-5 text-[0.88rem] leading-[1.7] text-text-muted mb-[0.3rem] before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-[5px] before:h-[5px] before:rounded-full before:bg-algae">
                  Deliver high-quality water & wastewater treatment systems.
                </li>
                <li className="relative pl-5 text-[0.88rem] leading-[1.7] text-text-muted mb-[0.3rem] before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-[5px] before:h-[5px] before:rounded-full before:bg-algae">
                  Restore aquatic ecosystems through sustainable solutions.
                </li>
                <li className="relative pl-5 text-[0.88rem] leading-[1.7] text-text-muted mb-[0.3rem] before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-[5px] before:h-[5px] before:rounded-full before:bg-algae">
                  Help industries achieve environmental compliance.
                </li>
                <li className="relative pl-5 text-[0.88rem] leading-[1.7] text-text-muted mb-[0.3rem] before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-[5px] before:h-[5px] before:rounded-full before:bg-algae">
                  Drive innovation in environmental technologies.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/about_us.jpg"
            alt="Lake Restoration by Bhagwati"
            className="w-full h-[320px] object-cover rounded-md block max-md:h-[220px]"
            width={1200}
            height={480}
          />
          <p className="text-[0.75rem] text-text-muted mt-[0.6rem] tracking-[0.02em]">
            Hypereutrophic lake restoration — before and after treatment
          </p>
        </div>
      </div>
    </section>
  );
}
