import "./globals.css";


export const metadata = {
  title: "BLM - Home",
  description: "Ashcorp Technologies Machine Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
