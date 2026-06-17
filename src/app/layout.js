import "./globals.css";

export const metadata = {
  title: "Bhagwati Equipments & Services | Lake Restoration & Water Treatment",
  description:
    "Specialists in hypereutrophic lake restoration, algae control, and industrial water treatment plants. Manufacturer of ETP, STP, RO, UF, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
