import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>{" "}
            <Link href="/products">Products</Link>{" "}
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}