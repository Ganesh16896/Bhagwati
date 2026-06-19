export default function FooterSection() {
  return (
    <footer className="bg-dark-slate text-[rgba(217,203,176,0.5)] py-12 px-8 text-center">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-4">
        <div className="font-oswald text-[1.2rem] font-bold text-white uppercase tracking-[0.06em]">
          Bhagwati Equipments &amp; Services
        </div>
        <div className="text-[0.78rem] tracking-[0.12em] uppercase text-algae-light">
          Lake Restoration · Water Treatment · Environmental Services
        </div>
        <ul className="flex flex-wrap gap-6 list-none mt-2">
          <li>
            <a
              href="#home"
              className="text-[0.78rem] text-[rgba(217,203,176,0.4)] no-underline uppercase tracking-[0.08em] transition-colors duration-200 hover:text-algae"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#lake"
              className="text-[0.78rem] text-[rgba(217,203,176,0.4)] no-underline uppercase tracking-[0.08em] transition-colors duration-200 hover:text-algae"
            >
              Lake Restoration
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-[0.78rem] text-[rgba(217,203,176,0.4)] no-underline uppercase tracking-[0.08em] transition-colors duration-200 hover:text-algae"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[0.78rem] text-[rgba(217,203,176,0.4)] no-underline uppercase tracking-[0.08em] transition-colors duration-200 hover:text-algae"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[0.78rem] text-[rgba(217,203,176,0.4)] no-underline uppercase tracking-[0.08em] transition-colors duration-200 hover:text-algae"
            >
              Contact
            </a>
          </li>
        </ul>
        <p className="text-[0.73rem] mt-2 text-[rgba(217,203,176,0.25)]">
          &copy; 2025 Bhagwati Equipments and Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
