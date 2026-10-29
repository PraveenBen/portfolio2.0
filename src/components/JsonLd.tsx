import React from "react";
import { PERSONAL_INFO, PROJECTS_DATA } from "@/lib/portfolioData";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://praveen-portfolio.vercel.app/#person",
        name: PERSONAL_INFO.name,
        jobTitle: PERSONAL_INFO.title,
        description: PERSONAL_INFO.bio,
        url: "https://praveen-portfolio.vercel.app",
        sameAs: [
          PERSONAL_INFO.linkedIn,
          PERSONAL_INFO.gitHub,
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "India",
        },
        email: PERSONAL_INFO.email,
        telephone: PERSONAL_INFO.phone,
        knowsAbout: [
          "Apache Spark",
          "Apache Kafka",
          "Apache Flink",
          "Apache Beam",
          "Change Data Capture (CDC)",
          "Debezium",
          "MSSQL Server",
          "ClickHouse",
          "Databricks",
          "Google Cloud Platform (GCP)",
          "LLM Evaluation & Red-Teaming",
          "Reinforcement Learning from Human Feedback (RLHF)",
          "Distributed Stream Processing",
          "Real-Time Data Warehousing & OLAP",
          "Query Optimization & Index Restructuring",
          "Kubernetes & GKE",
          "FastAPI & AI Pipelines",
          "RocksDB Stateful Streaming",
          "Aerospike In-Memory Caching",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Data & AI Pipeline Engineer",
          occupationalCategory: "15-1252.00 - Software Developers",
          skills: "Petabyte-Scale Stream Processing, Real-Time CDC, LLM Red-Teaming, High Availability Distributed Systems",
        },
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Christ Academy Institute for Advanced Studies",
            degree: "Master of Computer Applications (MCA)",
          },
          {
            "@type": "EducationalOrganization",
            name: "VEIT Degree College",
            degree: "Bachelor of Computer Applications (BCA)",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://praveen-portfolio.vercel.app/#website",
        url: "https://praveen-portfolio.vercel.app",
        name: "Praveen T | Data & AI Pipeline Engineer Portfolio",
        description:
          "Official portfolio of Praveen T, Data & AI Pipeline Engineer specializing in Petabyte-Scale Data, Real-Time CDC, and Frontier AI Red-Teaming.",
        publisher: {
          "@id": "https://praveen-portfolio.vercel.app/#person",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://praveen-portfolio.vercel.app/#projects",
        name: "Engineered High-Scale Data & AI Projects",
        itemListElement: PROJECTS_DATA.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            applicationCategory: project.category,
            operatingSystem: "Cloud / Distributed Systems / Kubernetes",
            description: project.shortDescription,
            author: {
              "@id": "https://praveen-portfolio.vercel.app/#person",
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
