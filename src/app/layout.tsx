import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralBackground } from "@/components/NeuralBackground";
import { JsonLd } from "@/components/JsonLd";
import { PERSONAL_INFO } from "@/lib/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://praveen-portfolio.vercel.app"),
  title: {
    default: `${PERSONAL_INFO.name} | Data & AI Pipeline Engineer (Petabyte-Scale, CDC, Red-Teaming)`,
    template: `%s | ${PERSONAL_INFO.name} — Data & AI Pipeline Engineer`,
  },
  description:
    "Production Data & AI Pipeline Engineer specialized in streaming architectures at Flipkart scale, 19-VM CDC platforms for solar manufacturing (Tata Power), SEBI-compliant Voice2Trade AI (Bajaj Broking), and frontier LLM adversarial red-teaming with multi-tool evaluation.",
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
    "GCP Certified",
    "SEBI Compliance",
    "RLHF",
    "GEO",
    "AEO",
    "SEO",
    "Photoshop",
    "Illustrator",
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
      "Blending Petabyte-Scale streaming systems (Kafka, Flink, Spark, CDC) with frontier AI evaluation, digital marketing (AEO/GEO), and high-end design.",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Data & AI Pipeline Engineer`,
    description:
      "Petabyte-scale data pipelines, 19-VM CDC for solar manufacturing, Flipkart ad scale, and frontier LLM red-teaming.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#ededed] font-sans selection:bg-[#00F0FF]/20 selection:text-[#00F0FF]">
        <NeuralBackground />
        <Navbar />
        <main className="flex-1 pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
