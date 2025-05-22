import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
