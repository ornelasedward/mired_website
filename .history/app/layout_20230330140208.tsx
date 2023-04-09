import "./globals.css";

export const metadata = {
  title: "Mired",
  description: "Web design and development services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-[#F6F3EC] bg-gradient-to-r from-[#F6F3EC] to-rose-200
    "
    >
      <body>{children}</body>
    </html>
  );
}
