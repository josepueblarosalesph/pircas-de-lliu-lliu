import type { Metadata, Viewport } from "next";
import { Cormorant, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Pircas de Lliu Lliu | Parcelas en Limache",
  description: "Parcelas planas de 5.000 m² con rol propio, agua y luz en Limache, desde 2.250 UF.",
  metadataBase: new URL("https://pircasdelliulliu.cl"),
  icons: {
    icon: [{ url: "/favicon.png?v=2", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
  openGraph: {
    title: "Pircas de Lliu Lliu | Parcelas en Limache",
    description: "Vive entre la naturaleza y la ciudad en la parcela de tus sueños.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Itagra · Pircas de Lliu Lliu" }],
    locale: "es_CL",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#eee9df" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
