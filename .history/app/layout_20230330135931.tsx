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
    <html lang="en" className="bg-[#F6F3EC]">
      <body>{children}</body>
    </html>
  );
}
