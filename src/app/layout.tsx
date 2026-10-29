import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralBackground } from "@/components/NeuralBackground";
import { JsonLd } from "@/components/JsonLd";
import { PERSONAL_INFO } from "@/lib/portfolioData";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://praveen-portfolio.vercel.app"),
  title: {
    default: `${PERSONAL_INFO.name} | Data & AI Pipeline Engineer`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description:
    "Production Data & AI Pipeline Engineer specialized in streaming architectures at Flipkart scale, 19-VM CDC platforms for solar manufacturing (Tata Power), SEBI-compliant Voice2Trade AI (Bajaj Broking), and frontier LLM adversarial red-teaming.",
  keywords: [
    "Praveen T",
    "Data Engineer",
    "AI Pipeline Engineer",
    "Apache Spark",
    "MSSQL",
    "Kafka",
    "Flink",
    "LLM Evaluation",
    "Red-Teaming",
    "Real-time CDC",
    "Debezium",
    "ClickHouse",
    "Databricks",
    "Apache Beam",
    "RocksDB",
    "Aerospike",
    "Google Cloud Platform",
    "SEBI Compliance",
    "RLHF",
    "GEO",
    "AEO",
    "SEO",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.gitHub }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://praveen-portfolio.vercel.app",
    title: `${PERSONAL_INFO.name} | Data & AI Pipeline Engineer`,
    description:
      "Petabyte-scale distributed data pipelines, 19-VM CDC for solar manufacturing, and frontier LLM red-teaming.",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Data & AI Pipeline Engineer`,
    description:
      "Petabyte-scale data pipelines, 19-VM CDC for solar manufacturing, and frontier LLM red-teaming.",
  },
  alternates: {
    canonical: "https://praveen-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#09090B] text-[#FAFAFA] font-sans selection:bg-[#10B981]/20 selection:text-[#10B981]">
        <NeuralBackground />
        <Navbar />
        <main className="flex-1 pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
