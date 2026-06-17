/** @type {import('next').NextConfig} */
const nextConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-lake": "url('./assets/lake-restoration-bg.jpg')",
      },
    },
  },
};

module.exports = nextConfig;
