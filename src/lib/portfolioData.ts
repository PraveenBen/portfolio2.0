export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  period: string;
  category: "AI & Red-Teaming" | "Renewable Energy & IoT" | "FinTech & Trading" | "E-Commerce & Scale" | "Enterprise Database";
  featured: boolean;
  shortDescription: string;
  fullOverview: string;
  problemStatement: string;
  architectureDetails: string;
  pipelineStages: {
    stage: string;
    description: string;
    tech: string;
  }[];
  keyHighlights: string[];
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  technologies: string[];
  documentation: {
    title: string;
    type: "Architecture Blueprint" | "Benchmark Report" | "Security Audit" | "SEBI Spec" | "GitHub Repository";
    url: string;
    external: boolean;
  }[];
  colorAccent: string; // Hex for Obsidian Matrix electric accents
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  badge: string;
  technologies: string[];
}

export interface HybridSkillCategory {
  title: string;
  tagline: string;
  color: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Production / Expert"
    context: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Praveen T",
  title: "Data & AI Pipeline Engineer",
  tagline: "Blending Petabyte-Scale Data with Digital Marketing & High-End Graphic Design",
  bio: "Data Engineer with 3+ years building production streaming, batch, and BI architectures across Flipkart scale, Tata Power solar manufacturing, and frontier LLM red-teaming. Specialized in high-throughput CDC, stateful stream processing, and multi-modal AI evaluation.",
  location: "Bangalore, India",
  email: "praveenbenakannanavar@outlook.com",
  phone: "+91 9535055419",
  linkedIn: "https://linkedin.com/in/praveen-benakannanavar",
  gitHub: "https://github.com/PraveenBen",
  availability: "Open to High-Impact Data & AI Engineering Roles",
  status: "ONLINE | PIPELINES HEALTHY",
};

export const KEY_METRICS = [
  {
    id: "experience",
    value: 3,
    suffix: "+",
    label: "Years in Production",
    description: "Streaming, batch, BI, and LLM evaluation architectures",
  },
  {
    id: "data-scale",
    value: 10,
    prefix: ">",
    suffix: " PB+",
    label: "Data Volume Optimized",
    description: "Flipkart Ads clickstream, solar IoT telemetry, and Spark batches",
  },
  {
    id: "uptime",
    value: 99.9,
    suffix: "%",
    label: "Production Uptime",
    description: "High-availability Kafka, Flink, and GKE deployments",
  },
  {
    id: "nodes-deployed",
    value: 19,
    suffix: " VMs",
    label: "HA Stack Provisioned",
    description: "Debezium, Kafka, Flink, and ClickHouse stood up in 3 days",
  },
  {
    id: "query-speedup",
    value: 80,
    suffix: "%",
    label: "Max Latency Reduction",
    description: "Legacy Stored Procedures slashed from 15 min to 3 min",
  },
  {
    id: "traffic-spike",
    value: 21,
    suffix: "x",
    label: "Spike Multiplier Handled",
    description: "Dynamic auto-scaling during Big Billion Days sales events",
  },
];

export const SKILLS_MARQUEE = [
  "Apache Spark",
  "Apache Kafka",
  "Apache Flink",
  "Apache Beam",
  "MSSQL Server",
  "ClickHouse",
  "Databricks",
  "Debezium CDC",
  "RocksDB",
  "Google Cloud Platform (GCP)",
  "Next.js App Router",
  "LLM Red-Teaming",
  "RLHF & Gemini Alignment",
  "Aerospike Cache",
  "Power BI",
  "Apache Superset",
  "Photoshop & Illustrator",
  "Technical SEO / AEO / GEO",
  "Azkaban & Airflow",
  "Kubernetes (GKE)",
  "Mistral & Gemini 3.5",
  "Delta Lake",
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "claude-code-frontier-ai",
    title: "Frontier AI Evaluation & Multi-Tool Red-Teaming",
    subtitle: "Adversarial Injection & Multi-Hop Reasoning Stress Testing for LLM Agents",
    client: "Outlier.AI (Freelance Client)",
    role: "GenAI Evaluation Engineer & Red-Teamer",
    period: "06/2023 – Present",
    category: "AI & Red-Teaming",
    featured: true,
    shortDescription:
      "Constructed complex adversarial scenarios across 13 mock enterprise tool environments. Authored deceptive SQL datasets and conflicting state records to probe multi-step agentic reasoning and uncover frontier model failure modes.",
    fullOverview:
      "Modern frontier LLMs (such as Claude Code and Gemini) are deployed in agentic environments where they invoke tools autonomously. This project created comprehensive adversarial evaluation harnesses that placed models in 13 simulated tools (email, corporate chat, Git version control, issue trackers, and database consoles) to rigorously stress-test multi-hop reasoning, state reconciliation, and vulnerability to adversarial prompt injection.",
    problemStatement:
      "Agentic models often hallucinate or take destructive actions when encountering ambiguous or conflicting data distributed across systems. Standard static benchmarks fail to detect failure modes in stateful multi-tool workflows.",
    architectureDetails:
      "Engineered an evaluation harness featuring 13 simulated REST/CLI mock tools. Injected synthetic relational tables via SQL containing realistic distractors, timestamp inconsistencies, and subtle conflicting claims. Required models to perform 4-6 hop verification paths before taking irreversible actions.",
    pipelineStages: [
      {
        stage: "1. Tool Environment Mocking",
        description: "Implemented high-fidelity mock tools simulating Git, Slack, Jira, Gmail, and DB terminals.",
        tech: "Python, REST APIs, JSON-RPC",
      },
      {
        stage: "2. Adversarial SQL Synthesis",
        description: "Authored synthetic database records with subtle integrity flaws and conflicting timestamps.",
        tech: "MSSQL, PostgreSQL, Faker, Custom Generators",
      },
      {
        stage: "3. Multi-Hop Evaluation Runner",
        description: "Orchestrated complex reasoning chains forcing the model to cross-reference multiple tools.",
        tech: "Agentic Eval Harness, Python",
      },
      {
        stage: "4. RLHF & Human-in-the-Loop Alignment",
        description: "Conducted fine-tuning annotations across text, image, and audio for Google's Gemini models.",
        tech: "RLHF, Pairwise Preference, Ground Truth Authoring",
      },
    ],
    keyHighlights: [
      "Simulated 13 enterprise tool endpoints to stress-test frontier autonomous agents.",
      "Authored deceptive synthetic SQL datasets to test model robustness under contradictory enterprise states.",
      "Executed RLHF workflows for Google's Gemini foundational models across text, image, and audio modalities.",
      "Identified critical multi-hop reasoning edge cases, preventing tool hallucination in production.",
    ],
    metrics: [
      { label: "Mock Tools", value: "13", subtext: "Enterprise APIs simulated" },
      { label: "Reasoning Hops", value: "4 to 6", subtext: "Cross-system verification" },
      { label: "Modalities", value: "3", subtext: "Text, Vision & Audio RLHF" },
      { label: "Failure Modes", value: "40+", subtext: "Vulnerabilities discovered" },
    ],
    technologies: [
      "LLM Evaluation",
      "Red-Teaming",
      "RLHF",
      "Google Gemini 3.5",
      "Mistral 658B",
      "Python",
      "Synthetic SQL",
      "Agentic Scenarios",
    ],
    documentation: [
      {
        title: "Adversarial Red-Teaming Methodology Spec",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "Multi-Tool Agentic Reasoning Evaluation Suite",
        type: "GitHub Repository",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "Synthetic Data & SQL Distractor Framework",
        type: "Benchmark Report",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#00F0FF",
  },
  {
    id: "solar-manufacturing-realtime-cdc",
    title: "Near Real-Time CDC Platform for Solar Manufacturing",
    subtitle: "19-VM High-Availability Topology Streaming 24 MSSQL Tables to Databricks",
    client: "Tata Power Mumbai (via DataSturdy Consulting)",
    role: "Associate Data Engineer (Lead Topology Architect)",
    period: "01/2025 – 09/2026",
    category: "Renewable Energy & IoT",
    featured: true,
    shortDescription:
      "Architected an end-to-end cross-cloud CDC platform streaming 24 MSSQL tables across every stage of solar panel manufacturing. Provisioned a 19-VM HA cluster (Debezium, Kafka, Flink, ClickHouse) in 3 days, recognized by Tata Power leadership.",
    fullOverview:
      "Solar module production requires millisecond-level traceability of stage-level electrical, thermal, and visual testing records. This mission-critical platform captures changes from 24 production MSSQL operational tables, transports them over encrypted cross-cloud VPN tunnels, deduplicates and enriches streams via Apache Flink with exactly-once semantics, and sinks them to ClickHouse and downstream Databricks analytics.",
    problemStatement:
      "Legacy polling caused excessive load on production line MSSQL servers, creating up to 45 minutes of telemetry lag and risking undetected cell defects during high-speed PV wafer assembly.",
    architectureDetails:
      "Designed a distributed 19-VM high-availability stack: 2-node clustered Debezium connectors for CDC capture from MSSQL transaction logs, 3-node Apache Kafka cluster for resilient buffer queuing, 5-node Apache Flink cluster with RocksDB state backend for exactly-once stream processing, and 9-node ClickHouse cluster for sub-second analytical querying, consumed by Databricks ML models.",
    pipelineStages: [
      {
        stage: "1. Source Log Mining",
        description: "Capturing transactional delta from 24 MSSQL tables without read locks.",
        tech: "MSSQL CDC, Debezium (2 VMs)",
      },
      {
        stage: "2. Resilient Event Transport",
        description: "Partitioned topic streaming with replication factor 3 across cross-cloud VPN.",
        tech: "Apache Kafka (3 VMs), IPsec VPN",
      },
      {
        stage: "3. Stateful Stream Processing",
        description: "Stage-level assembly aggregation, deduplication, and exactly-once checkpointing.",
        tech: "Apache Flink (5 VMs), RocksDB State",
      },
      {
        stage: "4. OLAP & Analytics Serving",
        description: "Distributed columnar ingestion and real-time operations dashboards.",
        tech: "ClickHouse (9 VMs), Grafana, Databricks",
      },
    ],
    keyHighlights: [
      "Stood up full 19-VM HA topology with end-to-end source-to-sink connectivity in just 3 days.",
      "Formally recognized by Tata Power project leadership for rapid execution and flawless deployment.",
      "Achieved zero data loss and exactly-once processing across 24 critical solar manufacturing tables.",
      "Deployed real-time Grafana dashboards monitoring pipeline lag, throughput, and wafer test stages.",
      "Guided junior engineer on IoT remote power management subsystem with battery-state monitoring.",
    ],
    metrics: [
      { label: "VM Topology", value: "19", subtext: "Nodes across HA stack" },
      { label: "MSSQL Tables", value: "24", subtext: "Manufacturing stages streamed" },
      { label: "Turnaround Time", value: "3 Days", subtext: "End-to-end deployment" },
      { label: "Data Freshness", value: "< 2s", subtext: "From factory sensor to OLAP" },
    ],
    technologies: [
      "Debezium",
      "Apache Kafka",
      "Apache Flink",
      "ClickHouse",
      "MSSQL Server",
      "Databricks",
      "Grafana",
      "Cross-Cloud VPN",
    ],
    documentation: [
      {
        title: "19-VM CDC Architecture Topology Blueprint",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "Solar Manufacturing Telemetry Benchmarks",
        type: "Benchmark Report",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "Flink Exactly-Once Checkpointing & RocksDB Spec",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#FFE600",
  },
  {
    id: "voice-to-trade-ai-engine",
    title: "Voice to Trade: AI-Driven Execution & SEBI Compliance",
    subtitle: "Automated Audio Extraction & Trade Reconciliation Engine",
    client: "Bajaj Broking (via DataSturdy Consulting)",
    role: "Lead AI Data Engineer",
    period: "2025",
    category: "FinTech & Trading",
    featured: true,
    shortDescription:
      "Architected Voice2Trade for Bajaj Broking: converting call recordings into structured financial orders using Gemini 3.5 Flash and Mistral 658B, with automated SEBI regulatory consent reconciliation.",
    fullOverview:
      "In institutional and retail stockbroking, regulatory mandates from SEBI require proof of explicit client consent prior to order execution. Voice2Trade ingests thousands of daily telephony audio files, performs noise suppression, transcribes audio, extracts securities (ISIN, strike, option type, lot size), and reconciles extracted intent against terminal trade logs.",
    problemStatement:
      "Manual audit of thousands of hours of audio recordings was error-prone, cost millions, and introduced severe regulatory non-compliance exposure under SEBI strict audit rules.",
    architectureDetails:
      "Built an automated streaming audio ingestion pipeline integrating Gemini 3.5 Flash for rapid speech-to-text with financial domain acoustic modeling, followed by Mistral 658B structured extraction with strict JSON schema validation. Implemented an automated nightly reconciliation engine comparing trade parameters against OMS execution records.",
    pipelineStages: [
      {
        stage: "1. Telephony Audio Ingestion",
        description: "Bulk batch and stream ingestion of stereo customer call recordings.",
        tech: "Cloud Storage, Python Telephony Worker",
      },
      {
        stage: "2. Speech Transcription",
        description: "Transcription of financial terminology and Indian market accents.",
        tech: "Gemini 3.5 Flash Speech API",
      },
      {
        stage: "3. Intent & Entity Extraction",
        description: "Extraction of stock symbol, quantity, order type, price limit, and explicit consent token.",
        tech: "Mistral 658B, Structured Pydantic Schemas",
      },
      {
        stage: "4. SEBI Regulatory Reconciliation",
        description: "Automated discrepancy detection between executed orders and call audio consent.",
        tech: "MSSQL, Python, SEBI Audit Reports",
      },
    ],
    keyHighlights: [
      "Engineered automated compliance pipeline satisfying strict SEBI trading mandate regulations.",
      "Transcribed and extracted structured trade orders with >98% accuracy using Gemini 3.5 Flash & Mistral.",
      "Eliminated manual call auditing overhead, saving hundreds of engineering and audit hours weekly.",
      "Automated automated reconciliation matching audio consent timestamps against OMS order logs.",
    ],
    metrics: [
      { label: "Accuracy", value: ">98%", subtext: "Entity & intent extraction" },
      { label: "Model Stack", value: "Gemini + Mistral", subtext: "Flash 3.5 & 658B LLMs" },
      { label: "Compliance", value: "100%", subtext: "SEBI regulatory audit coverage" },
      { label: "Processing Speed", value: "< 5s", subtext: "Per 3-minute trade call" },
    ],
    technologies: [
      "Google Gemini 3.5",
      "Mistral 658B",
      "Python",
      "Audio Transcription",
      "SEBI Compliance",
      "MSSQL",
      "FastAPI",
    ],
    documentation: [
      {
        title: "Voice2Trade Regulatory Compliance Specification",
        type: "SEBI Spec",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "LLM Audio Extraction & Prompt Chain Architecture",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#A855F7",
  },
  {
    id: "flipkart-ads-scale-etl",
    title: "Flipkart Ads: Near Real-Time High-Throughput ETL",
    subtitle: "Apache Beam on GKE with RocksDB Deduplication Handling 21x Traffic Spikes",
    client: "Flipkart Ads Project (via DataSturdy Consulting)",
    role: "Big Data & Streaming Pipeline Engineer",
    period: "2025",
    category: "E-Commerce & Scale",
    featured: true,
    shortDescription:
      "Engineered a low-latency Apache Beam (Java) streaming pipeline on GKE processing millions of ad clicks and views from Google Pub/Sub. Used RocksDB stateful deduplication and Aerospike sub-millisecond cache lookups to handle 21x Big Billion Days traffic.",
    fullOverview:
      "During Flipkart's annual Big Billion Days (BBD), advertising clickstreams explode up to 21 times baseline traffic. This platform ingests multi-channel ad engagement events across Flipkart, Hyperlocal, and Grocery marketplaces, performs sub-millisecond cache lookups against Aerospike for ad campaign metadata, statefully deduplicates duplicate clicks with RocksDB, and publishes enriched streams to Kafka and analytics storage.",
    problemStatement:
      "Duplicate click events caused ad attribution inaccuracies and advertiser billing disputes during massive traffic bursts, while legacy batch jobs failed to scale under 21x BBD load.",
    architectureDetails:
      "Built with Apache Beam Java SDK deployed natively on Google Kubernetes Engine (GKE) with horizontal pod autoscaling. State management backed by RocksDB for sliding-window idempotency. Aerospike deployed in-cluster for sub-millisecond enriched dimension lookups. Integrated cross-platform Data Sanity Framework and Spark batch reconciliation on Google Dataproc.",
    pipelineStages: [
      {
        stage: "1. Event Ingestion",
        description: "High-volume click and impression ingestion across 3 marketplaces.",
        tech: "Google Cloud Pub/Sub, Kafka",
      },
      {
        stage: "2. Stateful Processing & Dedup",
        description: "Exactly-once deduplication and sliding sessionization.",
        tech: "Apache Beam (Java SDK), RocksDB State Backend",
      },
      {
        stage: "3. Sub-Millisecond Enrichment",
        description: "Real-time campaign, advertiser, and placement metadata resolution.",
        tech: "Aerospike In-Memory Cache",
      },
      {
        stage: "4. OLAP & Sanity Validation",
        description: "Automated daily financial reconciliation and Superset BI dashboards.",
        tech: "ClickHouse, Apache Druid, Apache Spark, Dataproc",
      },
    ],
    keyHighlights: [
      "Sustained 21x traffic spikes during peak Big Billion Days sales events with 99.9% uptime on GKE.",
      "Implemented stateful sliding-window deduplication with RocksDB, guaranteeing zero billing discrepancies.",
      "Achieved sub-millisecond attribute lookups via Aerospike cluster caching.",
      "Created an automated cross-platform Data Sanity Framework validating data across MySQL, ClickHouse, Druid, and GCS.",
      "Benchmarked and tuned Spark executor memory, shuffle partitions, and mapper/reducers to cut compute costs.",
    ],
    metrics: [
      { label: "Spike Tolerance", value: "21x", subtext: "Big Billion Days peak load" },
      { label: "Uptime SLA", value: "99.9%", subtext: "Automated GKE orchestration" },
      { label: "Lookup Latency", value: "< 1 ms", subtext: "Aerospike metadata enrichment" },
      { label: "Marketplaces", value: "3", subtext: "Flipkart, Hyperlocal, Grocery" },
    ],
    technologies: [
      "Apache Beam (Java)",
      "RocksDB",
      "Aerospike",
      "Google Pub/Sub",
      "GKE",
      "Apache Spark",
      "Dataproc",
      "ClickHouse",
      "Druid",
      "Azkaban",
    ],
    documentation: [
      {
        title: "Big Billion Days Scale Testing & Optimization Report",
        type: "Benchmark Report",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "Beam & RocksDB Stateful Deduplication Architecture",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "Cross-Platform Data Sanity Framework Spec",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#39FF14",
  },
  {
    id: "infosys-enterprise-db-tuning",
    title: "Infosys ALCON & OMS Database Performance Optimization",
    subtitle: "Stored Procedure Restructuring & Query Optimization slashes Runtime by 80%",
    client: "Infosys (via DataSturdy Consulting)",
    role: "Database Optimization Engineer",
    period: "2025",
    category: "Enterprise Database",
    featured: false,
    shortDescription:
      "Targeted high-latency legacy Stored Procedures in mission-critical enterprise systems (ALCON and OMS). Implemented strategic indexing and query plan restructuring to achieve a 25% average latency reduction, cutting peak queries from 15 min to 3 min.",
    fullOverview:
      "Enterprise supply chain and order management systems (ALCON and OMS) faced severe blocking, table locks, and memory grant bottlenecks caused by decade-old nested stored procedures. Through granular execution plan analysis, index restructuring, and temp-table optimization, mission-critical procedures were modernized without touching underlying business schemas.",
    problemStatement:
      "Nightly and transactional batch procedures took over 15 minutes, blocking core OMS processing and resulting in operational timeouts for enterprise end-users.",
    architectureDetails:
      "Analyzed execution plans using SQL Server Profiler and Extended Events. Eliminated implicit conversions, resolved key lookups with covering indexes, decomposed monolithic cursor-heavy procedures into set-based CTE transformations, and optimized parameter sniffing with query hints.",
    pipelineStages: [
      {
        stage: "1. Profiling & Bottleneck Isolation",
        description: "Capturing wait statistics, high CPU, and heavy I/O stored procedures.",
        tech: "Extended Events, SQL Server Profiler",
      },
      {
        stage: "2. Query Plan Restructuring",
        description: "Replacing procedural loops with high-performance set-based relational algebra.",
        tech: "T-SQL, Execution Plans, CTEs",
      },
      {
        stage: "3. Strategic Index Architecture",
        description: "Adding targeted covering indexes and filtered indexes to eliminate table scans.",
        tech: "MSSQL Nonclustered Indexes, Partitions",
      },
      {
        stage: "4. Production Validation",
        description: "Deploying 6 optimized stored procedures with zero business logic regression.",
        tech: "Production Stored Procedures, CI/CD",
      },
    ],
    keyHighlights: [
      "Achieved 25% average latency reduction across production enterprise applications.",
      "Slashed slowest stored procedure execution times from 15 minutes down to 3 minutes (80% improvement).",
      "Successfully deployed 6 modernized, mission-critical stored procedures to production environments.",
      "Eliminated transaction deadlocks and table scans on high-concurrency order tables.",
    ],
    metrics: [
      { label: "Max Speedup", value: "80%", subtext: "15 min reduced to 3 min" },
      { label: "Average Gain", value: "25%", subtext: "Latency reduction" },
      { label: "Procedures Deployed", value: "6", subtext: "Zero-defect enterprise rollout" },
    ],
    technologies: ["MSSQL Server", "T-SQL", "Execution Plans", "SQL Profiler", "Performance Tuning"],
    documentation: [
      {
        title: "MSSQL Enterprise Performance Tuning Blueprint",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#00F0FF",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "DataSturdy Consulting Private Limited",
    role: "Associate Data Engineer",
    period: "01/2025 – 09/2026",
    location: "Bengaluru, India",
    badge: "Production Data & Stream Architecture",
    description:
      "Led high-impact data engineering engagements spanning renewable energy IoT (Tata Power), trading FinTech AI (Bajaj Broking), e-commerce scale (Flipkart Ads), and enterprise database modernization (Infosys).",
    bullets: [
      "Tata Power Mumbai: Architected end-to-end cross-cloud near real-time CDC platform streaming 24 MSSQL tables across all solar panel manufacturing and testing stages into Databricks.",
      "Tata Power Mumbai: Provisioned 19-VM HA stack (2-node Debezium, 3-node Kafka, 5-node Flink, 9-node ClickHouse) in 3 days; formally commended by client leadership.",
      "Bajaj Broking: Architected Voice2Trade AI pipeline extracting structured trade data from customer audio recordings with Gemini 3.5 Flash and Mistral 658B, enforcing strict SEBI regulatory compliance.",
      "Flipkart Ads: Built low-latency Apache Beam (Java) streaming pipeline on GKE with RocksDB stateful deduplication and Aerospike sub-millisecond cache lookups; scaled through 21x Big Billion Days traffic with 99.9% uptime.",
      "Flipkart Ads: Built cross-platform Data Sanity Framework validating consistency across MySQL, ClickHouse, Druid, and GCS with automated Spark financial reconciliations and automated daily SMTP reports.",
      "Infosys Enterprise: Modernized 6 mission-critical Stored Procedures in ALCON and OMS applications, delivering 25% average query speedup and cutting peak latencies from 15 min to 3 min.",
    ],
    technologies: [
      "Apache Spark",
      "Apache Beam",
      "Apache Kafka",
      "Apache Flink",
      "Debezium",
      "ClickHouse",
      "MSSQL",
      "RocksDB",
      "Aerospike",
      "Databricks",
      "GKE",
      "Gemini 3.5",
      "Mistral",
    ],
  },
  {
    company: "Outlier.AI",
    role: "GenAI Evaluation Engineer & Red-Teamer (Freelance)",
    period: "06/2023 – Present",
    location: "Remote",
    badge: "Frontier AI & Multi-Modal RLHF",
    description:
      "Engineered high-complexity adversarial evaluation harnesses and executed RLHF fine-tuning workflows for frontier LLM agents and foundational multi-modal models.",
    bullets: [
      "Designed adversarial evaluation scenarios to stress-test frontier LLM agents operating across 13 simulated enterprise tool environments (email, chat, version control, project tracking).",
      "Constructed multi-hop reasoning tasks requiring models to verify distributed information rather than rely on shallow direct retrieval.",
      "Authored and ingested synthetic relational datasets into evaluation environments using SQL, seeding realistic distractors to probe model reliability under ambiguity.",
      "Executed Reinforcement Learning from Human Feedback (RLHF) workflows to fine-tune foundational LLMs including Google's Gemini across text, image, and audio modalities.",
      "Performed factual verification, task-specific evaluation, and ground-truth authoring to improve multi-step agentic constraint satisfaction.",
    ],
    technologies: [
      "Google Gemini",
      "LLM Red-Teaming",
      "RLHF",
      "Multi-Modal Alignment",
      "Adversarial Testing",
      "Python",
      "Synthetic SQL",
    ],
  },
  {
    company: "AffordPlan",
    role: "Financial Counselor & BI Reporting Specialist",
    period: "05/2022 – 12/2022",
    location: "Bengaluru, India",
    badge: "BI Infrastructure & Healthcare Analytics",
    description:
      "Maintained and enhanced analytics and BI infrastructure supporting 11+ hospital healthcare partners under the AffordPlan Swasth initiative.",
    bullets: [
      "Maintained and optimized Apache Superset dashboards for 11+ partner hospital chains, delivering mission-critical analytics to sales and leadership.",
      "Wrote custom high-performance SQL queries for specialized healthcare charts and proactively resolved broken queries to eliminate reporting delays.",
    ],
    technologies: ["Apache Superset", "SQL", "Data Modeling", "Business Intelligence", "Healthcare Analytics"],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Christ Academy Institute for Advanced Studies",
    period: "02/2023 – 12/2024",
    location: "Bengaluru, India",
    details: "Advanced coursework in Distributed Systems, Cloud Architecture, Database Systems, and Applied AI.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "VEIT Degree College",
    period: "2018 – 2021",
    location: "Bengaluru, India",
    details: "Foundations in Data Structures, Relational Databases, Operating Systems, and Object-Oriented Software.",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Google Associate Cloud Engineer",
    issuer: "Google Cloud Platform",
    badge: "Cloud Architecture",
    description: "Certified proficiency in deploying applications, monitoring operations, and managing enterprise GCP cloud solutions.",
    link: "https://cloud.google.com/certification/cloud-engineer",
  },
  {
    name: "GitHub Foundational",
    issuer: "GitHub",
    badge: "DevOps & CI/CD",
    description: "Expertise in collaborative software development, repository management, and GitHub Actions automation workflows.",
    link: "https://resources.github.com/learn/certifications/",
  },
  {
    name: "Machine Learning Certification",
    issuer: "GIT, Hubli",
    badge: "Applied ML",
    description: "Comprehensive training in statistical learning algorithms, data modeling, feature engineering, and evaluation.",
    link: "#",
  },
  {
    name: "TCS National Qualifier Exam (NQT)",
    issuer: "Tata Consultancy Services",
    badge: "Scored 72%",
    description: "National benchmark certification for advanced quantitative analysis, algorithmic problem-solving, and programming.",
    link: "#",
  },
];

export const HYBRID_SKILLS: HybridSkillCategory[] = [
  {
    title: "Data Engineering & Stream Architecture",
    tagline: "Petabyte-scale distributed ingestion, stateful processing, and OLAP analytics",
    color: "#00F0FF",
    iconName: "Database",
    description:
      "3+ years building high-throughput pipelines. From 19-VM cross-cloud CDC topologies to RocksDB stateful deduplication on Kubernetes handling 21x traffic spikes.",
    skills: [
      { name: "Apache Spark (Dataproc / Databricks)", level: "Production / Expert", context: "Cost/performance optimization, shuffle tuning, Dataproc cluster sizing" },
      { name: "Apache Kafka & Google Pub/Sub", level: "Production / Expert", context: "Clustered multi-broker HA topologies, partitioning, cross-cloud VPN transport" },
      { name: "Apache Flink", level: "Production / Advanced", context: "Exactly-once checkpointing, sliding windows, RocksDB state backend" },
      { name: "Apache Beam (Java SDK)", level: "Production / Advanced", context: "Stateful stream processing, Aerospike sub-ms cache lookup, GKE autoscaling" },
      { name: "ClickHouse & Druid", level: "Production / Expert", context: "9-node distributed OLAP clusters, sub-second queries on manufacturing telemetry" },
      { name: "MSSQL Server & CDC", level: "Production / Expert", context: "Debezium log capture, 24 tables real-time replication, Stored Procedure tuning" },
    ],
  },
  {
    title: "Frontier AI, Red-Teaming & RLHF",
    tagline: "Adversarial evaluation, multi-agent reasoning, and model alignment",
    color: "#A855F7",
    iconName: "Cpu",
    description:
      "Specialized in constructing adversarial multi-hop scenarios across 13 mock enterprise tool environments, stress-testing frontier LLMs, and executing RLHF for Google Gemini.",
    skills: [
      { name: "Adversarial Red-Teaming", level: "Frontier / Specialist", context: "13 mock tool calls, injection scenarios, multi-hop reasoning failure surfacing" },
      { name: "RLHF & Preference Tuning", level: "Production / Specialist", context: "Google Gemini alignment across text, visual, and audio modalities" },
      { name: "LLM Audio & Intent Extraction", level: "Production / Advanced", context: "Gemini 3.5 Flash & Mistral 658B for Voice2Trade with SEBI compliance" },
      { name: "Synthetic Data & SQL Distractors", level: "Advanced", context: "Authoring realistic contradictory datasets to probe agentic reasoning under ambiguity" },
    ],
  },
  {
    title: "Digital Marketing, SEO, AEO & GEO",
    tagline: "Bridging technical infrastructure with AI engine visibility and algorithmic growth",
    color: "#39FF14",
    iconName: "TrendingUp",
    description:
      "Expertise in modern Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and Technical SEO — architecting structured data (JSON-LD) for LLMs and crawler indexing.",
    skills: [
      { name: "Generative Engine Optimization (GEO)", level: "Specialist", context: "Optimizing content topology and citations for Perplexity, ChatGPT, Claude, and Gemini" },
      { name: "Answer Engine Optimization (AEO)", level: "Specialist", context: "Direct answer structured schemas, FAQ knowledge trees, and entity graph mapping" },
      { name: "Technical SEO & Semantic HTML5", level: "Expert", context: "Core Web Vitals, SSR Next.js performance, microdata JSON-LD, crawl budget tuning" },
      { name: "Data-Driven Marketing Analytics", level: "Advanced", context: "Multi-touch attribution models, clickstream analysis, and conversion funnels" },
    ],
  },
  {
    title: "Creative Graphic Design & Visual Communication",
    tagline: "Translating complex distributed topologies into stunning visual assets",
    color: "#FFE600",
    iconName: "Palette",
    description:
      "A rare dual-brain competency: Combining rigorous backend engineering with high-end graphic design, UI/UX prototyping, brand identity design, and technical data art.",
    skills: [
      { name: "Adobe Photoshop", level: "Advanced / Creative", context: "High-fidelity digital assets, compositing, visual branding, and dark UI styling" },
      { name: "Adobe Illustrator", level: "Advanced / Vector", context: "Vector system architecture diagrams, custom iconography, and brand identity design" },
      { name: "UI/UX & Interactive Design", level: "Expert", context: "Obsidian Matrix aesthetic, Framer Motion micro-interactions, dark mode glassmorphism" },
      { name: "Information Architecture", level: "Expert", context: "Translating 19-VM topologies and petabyte pipelines into intuitive visual schemas" },
    ],
  },
];
