import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "Web-Wallet",
  description: "web based wallet access from anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
