import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], style: ["normal", "italic"], weight: ["400", "500", "600"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Nsikak Udoh | Technology operations for lean teams",
  description: "I build and run the workflows between a new inquiry and a paid client: intake, retainers, documents, and payments.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
