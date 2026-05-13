import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trust & Security — Delta Green",
  description:
    "Delta Green's security posture, certifications, privacy practices, and compliance documentation. ISO 27001:2022 certified.",
  openGraph: {
    title: "Trust & Security — Delta Green",
    description:
      "Delta Green's security posture, certifications, privacy practices, and compliance documentation.",
    url: "https://deltagreen.energy/trust",
    siteName: "Delta Green",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
