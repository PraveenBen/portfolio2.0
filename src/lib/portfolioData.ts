export interface ProofStripMetric {
  value: string;
  label: string;
  subtext: string;
  badge: string;
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface TechStackCategory {
  category: string;
  description: string;
  tools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  period: string;
  category: "Renewable Energy & IoT" | "E-Commerce & Scale" | "FinTech & Trading" | "Enterprise Database" | "AI & Red-Teaming";
  featured: boolean;
  shortDescription: string;
  problemStatement: string;
  whatIBuilt: string;
  builtToHoldUp: string;
  builtToHoldUpLabel?: string;
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
  colorAccent: string;
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
    level: string; // "Production" or "Advanced"
    context: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Praveen T",
  title: "Data & AI Pipeline Engineer",
  tagline: "Streaming data systems that stay correct under peak load.",
  bio: "Data engineer based in Bangalore. Production data engineering since 2025 across Flipkart scale, Tata Power solar manufacturing, and LLM pipelines under SEBI compliance.",
  location: "Bangalore, India",
  email: "praveenbenakannanavar@outlook.com",
  phone: "",
  linkedIn: "https://linkedin.com/in/praveen-benakannanavar",
  gitHub: "https://github.com/PraveenBen",
  availability: "Available for remote contract and full-time roles with US/UK startups",
  status: "ONLINE | PIPELINES HEALTHY",
};

export const KEY_METRICS = [
  {
    id: "experience",
    value: 2025,
    prefix: "Since ",
    label: "Production Engineering",
    description: "Streaming pipelines, CDC systems, and LLM evaluation in production",
  },
  {
    id: "traffic-spike",
    value: 21,
    suffix: "x",
    label: "Spike Multiplier Handled",
    description: "Live ad event pipeline on GKE through Big Billion Days traffic",
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
    id: "tables-streamed",
    value: 24,
    label: "MSSQL Tables Replicated",
    description: "Near real-time CDC across solar panel manufacturing stages",
  },
  {
    id: "query-speedup",
    value: 80,
    suffix: "%",
    label: "Max Latency Reduction",
    description: "Slowest legacy stored procedure slashed from 15 min to 3 min",
  },
];

export const PROOF_STRIP_METRICS: ProofStripMetric[] = [
  {
    value: "21x",
    label: "Traffic Spikes Handled",
    subtext: "traffic spikes handled on a live ads pipeline, 99.9% uptime",
    badge: "Flipkart Ads",
  },
  {
    value: "3 days",
    label: "19-VM HA Stack Turnaround",
    subtext: "to stand up a 19-VM HA CDC stack (Debezium, Kafka, Flink, ClickHouse)",
    badge: "Tata Power",
  },
  {
    value: "24",
    label: "MSSQL Tables Replicated",
    subtext: "MSSQL tables replicated in near real time",
    badge: "Zero Data Loss",
  },
  {
    value: "15 min → 3 min",
    label: "Legacy SP Optimization",
    subtext: "slowest legacy stored procedure after tuning (25% average gain across 6 procedures)",
    badge: "Infosys",
  },
];

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: "streaming-pipelines",
    number: "01",
    title: "Streaming pipelines",
    tagline: "Exactly-Once & Fault Tolerant",
    description:
      "Kafka, Pub/Sub, Flink, and Beam, built for exactly-once semantics, replay, and fault tolerance.",
    deliverables: [
      "Exactly-once semantics with Apache Flink checkpointing & RocksDB",
      "Streaming ingestion from Pub/Sub and Kafka with replay support",
      "Dynamic auto-scaling during traffic bursts with 99.9% uptime",
    ],
    technologies: ["Kafka", "Pub/Sub", "Flink", "Beam"],
  },
  {
    id: "cdc-platforms",
    number: "02",
    title: "Change data capture",
    tagline: "Near Real-Time Database Replication",
    description:
      "Moving operational databases like SQL Server into analytics stores in near real time with Debezium, without losing or duplicating records.",
    deliverables: [
      "Non-locking transaction log mining with Debezium connectors",
      "Cross-cloud encrypted transport with restricted network routes",
      "Exactly-once sinks into ClickHouse with automated schema drift handling",
    ],
    technologies: ["Debezium", "MSSQL", "Kafka", "ClickHouse"],
  },
  {
    id: "fast-olap",
    number: "03",
    title: "Fast analytics on ClickHouse and Druid",
    tagline: "Sub-Second Operational Queries",
    description:
      "Cluster setup, ingestion, and sub-second queries on high-volume operational data.",
    deliverables: [
      "ClickHouse and Druid cluster provisioning and shard replication",
      "Primary sorting key, partition pruning, and compression tuning",
      "Sub-second response times for live Grafana and Superset dashboards",
    ],
    technologies: ["ClickHouse", "Druid", "Grafana", "Superset"],
  },
  {
    id: "data-quality",
    number: "04",
    title: "Data quality and reconciliation",
    tagline: "Automated Cross-System Validation",
    description:
      "Automated checks across MySQL, ClickHouse, Druid, and GCS, so bad data gets caught before finance or your customers see it.",
    deliverables: [
      "Automated daily cross-platform Spark reconciliations",
      "Automated anomaly detection and HTML reports replacing manual audits",
      "Row-count, checksum, and sliding-window sanity verification",
    ],
    technologies: ["Spark", "MySQL", "ClickHouse", "Druid", "GCS"],
  },
  {
    id: "spark-tuning",
    number: "05",
    title: "Spark cost and performance tuning",
    tagline: "Memory, Partitioning & Capacity Projections",
    description:
      "Executor memory, shuffle partitions, and cluster sizing, plus capacity and cost projections before big events.",
    deliverables: [
      "Dataproc and Databricks executor memory and shuffle partition tuning",
      "Mapper and reducer counts optimized to cut compute cost under peak load",
      "Capacity and cost projections prepared in advance of major events",
    ],
    technologies: ["Spark", "Dataproc", "Databricks", "Azkaban"],
  },
  {
    id: "llm-pipelines",
    number: "06",
    title: "LLM-powered pipelines and evaluation",
    tagline: "Speech-to-Text, Extraction & Agent Testing",
    description:
      "Speech-to-text and LLM extraction pipelines with compliance checks, plus adversarial testing of LLM agents.",
    deliverables: [
      "Voice-to-trade structured order extraction with Gemini 3.5 Flash and Mistral",
      "Daily automated checks reconciling extracted orders to verify customer consent",
      "Adversarial multi-step reasoning evaluations with conflicting records",
    ],
    technologies: ["Gemini", "Mistral", "Python", "LLM evaluation"],
  },
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    category: "Streaming",
    description: "Built for exactly-once semantics, replay, and fault tolerance",
    tools: ["Kafka", "Pub/Sub", "Flink", "Beam", "Debezium"],
  },
  {
    category: "Analytics stores",
    description: "High-volume operational data and sub-second analytical queries",
    tools: ["ClickHouse", "Druid", "Delta Lake", "MSSQL", "MySQL", "PostgreSQL"],
  },
  {
    category: "Batch and orchestration",
    description: "Cluster sizing, cost optimization, and directed workflow scheduling",
    tools: ["Spark (Dataproc, Databricks)", "Airflow", "Azkaban"],
  },
  {
    category: "Cloud and infra",
    description: "Production container orchestration, monitoring, and cloud infrastructure",
    tools: ["GCP (Associate Cloud Engineer)", "GKE", "Azure", "AWS", "Grafana"],
  },
  {
    category: "Languages",
    description: "Languages used across streaming pipelines, data transformations, and tooling",
    tools: ["Java", "Python", "SQL", "Shell"],
  },
  {
    category: "BI",
    description: "Operational reporting, metrics semantic layers, and dashboards",
    tools: ["Superset", "Power BI"],
  },
];

export const STARTUP_ENGAGEMENT = {
  availability: "Remote contract (fixed scope or monthly) or full-time",
  location: "Bangalore, India (IST / UTC+5:30)",
  timezoneOverlap: "Overlap of 4–5 hours with UK time and 3–4 hours with US East/West time",
  start: "Available immediately",
  responseTime: "Within 1 business day",
  idealFirstProjects: [
    {
      title: "Pipeline Audit",
      description: "Identify lag, serialization overhead, Spark shuffle spills, and memory grant bottlenecks.",
    },
    {
      title: "CDC Setup",
      description: "Move operational databases like SQL Server into analytics stores in near real time with Debezium.",
    },
    {
      title: "ClickHouse Migration",
      description: "Cluster setup, partition tuning, and materialization for sub-second analytical querying.",
    },
    {
      title: "Data-Quality Framework",
      description: "Automated checks across MySQL, ClickHouse, Druid, and GCS before bad data reaches production.",
    },
    {
      title: "Spark Cost Reduction",
      description: "Executor memory, shuffle partitions, and cluster sizing to cut cloud compute waste.",
    },
  ],
};

export const SKILLS_MARQUEE = [
  "Kafka",
  "Flink",
  "Beam",
  "Pub/Sub",
  "Debezium",
  "ClickHouse",
  "Druid",
  "Delta Lake",
  "Spark",
  "Databricks",
  "Dataproc",
  "GKE",
  "GCP",
  "MSSQL",
  "Airflow",
  "Azkaban",
  "Gemini",
  "Mistral",
  "LLM evaluation",
  "RLHF",
  "Superset",
  "Grafana",
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "solar-manufacturing-realtime-cdc",
    title: "Near real-time CDC for solar manufacturing",
    subtitle: "Cross-Cloud CDC Platform Streaming 24 Tables into ClickHouse",
    client: "Tata Power",
    role: "Associate Data Engineer",
    period: "2025 – 2026",
    category: "Renewable Energy & IoT",
    featured: true,
    shortDescription:
      "A cross-cloud CDC platform streaming 24 tables into ClickHouse, feeding downstream Databricks workloads across every stage of solar panel manufacturing.",
    problemStatement:
      "Factory test and production data across every stage of solar panel manufacturing sat in MSSQL, and the analytics team needed it fresh.",
    whatIBuilt:
      "A cross-cloud CDC platform streaming 24 tables into ClickHouse, feeding downstream Databricks workloads. Stack topology: 2-node Debezium, 3-node Kafka, 5-node Flink, 9-node ClickHouse (19 VMs). I provisioned it and had source-to-sink connectivity working in 3 days; project leadership formally recognized the turnaround.",
    builtToHoldUp:
      "Exactly-once semantics, replay, VPN-encrypted transport, restricted network routes, least-privilege access, and Grafana dashboards for lag, freshness, and throughput.",
    builtToHoldUpLabel: "Built to hold up",
    pipelineStages: [
      {
        stage: "1. Source Log Mining",
        description: "Capturing transactional deltas from 24 MSSQL tables without read locks.",
        tech: "Debezium (2 VMs)",
      },
      {
        stage: "2. Event Transport",
        description: "Partitioned topic streaming with replication factor 3 across VPN.",
        tech: "Kafka (3 VMs), IPsec VPN",
      },
      {
        stage: "3. Stream Processing",
        description: "Stage-level assembly aggregation, deduplication, and exactly-once checkpointing.",
        tech: "Flink (5 VMs), RocksDB",
      },
      {
        stage: "4. OLAP & Serving",
        description: "Distributed columnar ingestion and real-time operations dashboards.",
        tech: "ClickHouse (9 VMs), Grafana, Databricks",
      },
    ],
    keyHighlights: [
      "Stood up full 19-VM HA topology with source-to-sink connectivity working in 3 days.",
      "Formally recognized by Tata Power project leadership for rapid execution and deployment.",
      "Achieved exactly-once processing across 24 solar manufacturing tables.",
      "Deployed Grafana dashboards monitoring pipeline lag, freshness, and throughput.",
    ],
    metrics: [
      { label: "HA Stack", value: "19 VMs", subtext: "Debezium, Kafka, Flink, ClickHouse" },
      { label: "Turnaround", value: "3 Days", subtext: "Source-to-sink connectivity working" },
      { label: "Replication", value: "24 Tables", subtext: "MSSQL manufacturing tables" },
      { label: "Semantics", value: "Exactly-Once", subtext: "Replay & VPN-encrypted transit" },
    ],
    technologies: ["Debezium", "Kafka", "Flink", "ClickHouse", "Grafana", "Databricks"],
    documentation: [
      {
        title: "19-VM CDC Architecture Blueprint",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "Flink Exactly-Once & RocksDB Spec",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#10B981",
  },
  {
    id: "flipkart-ads-scale-etl",
    title: "Real-time ads event pipeline",
    subtitle: "Apache Beam (Java) on GKE Handling 21x Traffic Spikes",
    client: "Flipkart Ads",
    role: "Data Engineer",
    period: "2025",
    category: "E-Commerce & Scale",
    featured: true,
    shortDescription:
      "A streaming pipeline in Apache Beam (Java) reading from Pub/Sub with RocksDB stateful deduplication and sub-millisecond Aerospike lookups, holding 99.9% uptime through 21x traffic spikes.",
    problemStatement:
      "Millions of click and view events from three marketplaces had to be deduplicated, enriched, and delivered fast, including during Big Billion Days.",
    whatIBuilt:
      "A streaming pipeline in Apache Beam (Java) reading from Pub/Sub. Stateful deduplication with RocksDB, enrichment with sub-millisecond Aerospike lookups, sink to Kafka. Runs on GKE with CI/CD and autoscaling, and held 99.9% uptime through 21x traffic spikes.",
    builtToHoldUp:
      "Before sale events I tuned Spark workloads on Dataproc (executor memory, shuffle partitions, mapper and reducer counts) to cut compute cost while sustaining peak load, and produced capacity and cost projections for planning. I also built a cross-platform data sanity framework covering MySQL, ClickHouse, Druid, and GCS, with daily Spark reconciliations and automated HTML reports that replaced manual validation.",
    builtToHoldUpLabel: "Around it",
    pipelineStages: [
      {
        stage: "1. Event Ingestion",
        description: "Reading millions of click and view events from 3 marketplaces.",
        tech: "Pub/Sub, Kafka",
      },
      {
        stage: "2. Stateful Processing & Dedup",
        description: "Stateful deduplication and sliding sessionization.",
        tech: "Beam (Java), RocksDB",
      },
      {
        stage: "3. Sub-Millisecond Enrichment",
        description: "Real-time campaign and attribution metadata lookups.",
        tech: "Aerospike Cache",
      },
      {
        stage: "4. OLAP & Sanity Validation",
        description: "Automated daily Spark reconciliations and HTML reports.",
        tech: "ClickHouse, Druid, Spark, Dataproc",
      },
    ],
    keyHighlights: [
      "Held 99.9% uptime through 21x traffic spikes during Big Billion Days sales events on GKE.",
      "Implemented stateful deduplication with RocksDB and sub-millisecond Aerospike lookups.",
      "Tuned Dataproc Spark executor memory, shuffle partitions, and mapper/reducers to cut compute costs.",
      "Built cross-platform data sanity framework with daily Spark reconciliations across 4 stores.",
    ],
    metrics: [
      { label: "Traffic Spikes", value: "21x", subtext: "Held 99.9% uptime during sales events" },
      { label: "Uptime SLA", value: "99.9%", subtext: "Runs on GKE with autoscaling" },
      { label: "Lookup Latency", value: "< 1 ms", subtext: "Aerospike in-memory lookups" },
      { label: "Reconciliation", value: "4 Stores", subtext: "MySQL, ClickHouse, Druid, GCS" },
    ],
    technologies: [
      "Beam (Java)",
      "Pub/Sub",
      "Kafka",
      "RocksDB",
      "Aerospike",
      "GKE",
      "Spark",
      "Dataproc",
      "Azkaban",
      "ClickHouse",
      "Druid",
    ],
    documentation: [
      {
        title: "Scale Testing & Optimization Report",
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
    ],
    colorAccent: "#10B981",
  },
  {
    id: "voice-to-trade-ai-engine",
    title: "Voice2Trade: LLM trade extraction under SEBI rules",
    subtitle: "Speech-to-Text & LLM Order Extraction Pipeline with Consent Reconciliation",
    client: "Bajaj Broking",
    role: "Data & AI Pipeline Engineer",
    period: "2025",
    category: "FinTech & Trading",
    featured: true,
    shortDescription:
      "A pipeline that converts call recordings into structured trade data using speech-to-text and LLM extraction (Gemini 3.5 Flash and Mistral), plus automated checks verifying customer consent.",
    problemStatement:
      "Customer trade instructions arrive as phone calls, and regulators require proof of consent.",
    whatIBuilt:
      "A pipeline that converts call recordings into structured trade data using speech-to-text and LLM extraction (Gemini 3.5 Flash and Mistral), plus a daily automated check that reconciles extracted orders against executed trades to verify customer consent.",
    builtToHoldUp:
      "Strict structured schema validation, noise-resilient financial acoustic modeling, and daily automated checks reconciling extracted orders against executed trades to verify customer consent under SEBI rules.",
    builtToHoldUpLabel: "Built to hold up",
    pipelineStages: [
      {
        stage: "1. Telephony Audio Ingestion",
        description: "Stream and batch ingestion of customer call recordings.",
        tech: "Cloud Storage, Python",
      },
      {
        stage: "2. Speech Transcription",
        description: "Acoustic transcription of financial terminology and market instructions.",
        tech: "Gemini 3.5 Flash",
      },
      {
        stage: "3. Intent & Order Extraction",
        description: "Extracting stock symbol, quantity, order type, price limit, and consent.",
        tech: "Mistral, Structured Schemas",
      },
      {
        stage: "4. Consent Reconciliation",
        description: "Daily automated check matching extracted orders against executed trades.",
        tech: "MSSQL, Python, SEBI Checks",
      },
    ],
    keyHighlights: [
      "Engineered automated compliance pipeline satisfying SEBI trading consent regulations.",
      "Extracted structured trade instructions using Gemini 3.5 Flash and Mistral.",
      "Implemented daily automated reconciliation verifying extracted orders against executed trades.",
      "Replaced manual audit workflows with automated verification pipelines.",
    ],
    metrics: [
      { label: "Models", value: "Gemini + Mistral", subtext: "Speech-to-text & LLM extraction" },
      { label: "Compliance", value: "SEBI Rules", subtext: "Automated consent reconciliation" },
      { label: "Processing", value: "Near Real-Time", subtext: "Automated daily verification" },
      { label: "Verification", value: "Daily Audit", subtext: "Reconciles against executed trades" },
    ],
    technologies: ["Gemini", "Mistral", "Python", "LLM evaluation"],
    documentation: [
      {
        title: "Voice2Trade Regulatory Consent Specification",
        type: "SEBI Spec",
        url: "https://github.com/PraveenBen",
        external: true,
      },
      {
        title: "LLM Audio Extraction Architecture Blueprint",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#10B981",
  },
  {
    id: "infosys-enterprise-db-tuning",
    title: "Stored procedure optimization",
    subtitle: "Query Restructuring & Indexing for Critical Enterprise Applications",
    client: "Infosys",
    role: "Database Optimization Engineer",
    period: "2025",
    category: "Enterprise Database",
    featured: true,
    shortDescription:
      "Tuned high-latency legacy stored procedures in two critical enterprise applications through indexing and query restructuring, dropping execution times by 25% and cutting the slowest query from 15 min to 3 min.",
    problemStatement:
      "High-latency legacy stored procedures in two critical enterprise applications caused operational timeouts and bottlenecks.",
    whatIBuilt:
      "Tuned high-latency legacy stored procedures in two critical enterprise applications through indexing and query restructuring. Average execution time dropped 25%, and one query went from 15 minutes to 3. Six optimized procedures went to production with data integrity and business logic unchanged.",
    builtToHoldUp:
      "Targeted covering indexes, filtered indexes to eliminate table scans, set-based relational refactoring, and zero regression in production business logic.",
    builtToHoldUpLabel: "Built to hold up",
    pipelineStages: [
      {
        stage: "1. Profiling & Bottleneck Isolation",
        description: "Capturing wait statistics, high CPU, and heavy I/O stored procedures.",
        tech: "SQL Server Profiler",
      },
      {
        stage: "2. Query Plan Restructuring",
        description: "Replacing procedural loops with set-based relational algebra.",
        tech: "T-SQL, Execution Plans",
      },
      {
        stage: "3. Strategic Indexing",
        description: "Adding covering indexes and filtered indexes to eliminate table scans.",
        tech: "MSSQL Nonclustered Indexes",
      },
      {
        stage: "4. Production Validation",
        description: "Deploying 6 optimized stored procedures with business logic unchanged.",
        tech: "Production Rollout",
      },
    ],
    keyHighlights: [
      "Average execution time dropped 25% across tuned stored procedures.",
      "Slowest query execution time dropped from 15 minutes to 3 minutes.",
      "Six optimized procedures successfully deployed to production environments.",
      "Data integrity and core business logic maintained with zero regression.",
    ],
    metrics: [
      { label: "Slowest Query", value: "15m → 3m", subtext: "80% execution drop" },
      { label: "Average Gain", value: "25%", subtext: "Execution time drop" },
      { label: "Procedures", value: "6 Deployed", subtext: "Zero logic regression" },
      { label: "Integrity", value: "100%", subtext: "Business logic preserved" },
    ],
    technologies: ["MSSQL", "Stored procedures", "Indexing"],
    documentation: [
      {
        title: "MSSQL Performance Tuning Blueprint",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#10B981",
  },
  {
    id: "claude-code-frontier-ai",
    title: "Frontier AI evaluation (freelance, since 2023)",
    subtitle: "Adversarial Test Scenarios & Multi-Step Agentic Reasoning Stress Testing",
    client: "Freelance",
    role: "LLM Evaluation Engineer",
    period: "2023 – Present",
    category: "AI & Red-Teaming",
    featured: true,
    shortDescription:
      "Designing adversarial test scenarios across mock tools and evaluating frontier models including Google’s Gemini across text, image, and audio.",
    problemStatement:
      "Evaluating agent reliability and multi-step reasoning under ambiguous distributed system states.",
    whatIBuilt:
      "I work on LLM evaluation and RLHF, including Google’s Gemini across text, image, and audio. I also design adversarial test scenarios where an agent has to find and cross-check information across email, chat, version control, and project trackers. The data I seed includes distractors and conflicting records, which exposes where models fail at multi-step reasoning. That makes me careful about where LLM output can be trusted in production pipelines.",
    builtToHoldUp:
      "Simulated mock tools (email, chat, version control, project trackers), synthetic relational records with conflicting state, and ground-truth verification.",
    builtToHoldUpLabel: "Built to hold up",
    pipelineStages: [
      {
        stage: "1. Tool Environment Mocking",
        description: "Simulating enterprise tool endpoints for agentic tool use.",
        tech: "Python, Mock Tool APIs",
      },
      {
        stage: "2. Conflicting State Synthesis",
        description: "Authoring synthetic relational records with distractors and conflicting timestamps.",
        tech: "Synthetic SQL, Python",
      },
      {
        stage: "3. Multi-Hop Reasoning Testing",
        description: "Probing models where cross-referencing distributed state is required.",
        tech: "Adversarial Test Suite",
      },
      {
        stage: "4. RLHF & Human-in-the-Loop",
        description: "Fine-tuning evaluations for Google Gemini across text, image, and audio.",
        tech: "RLHF, Pairwise Preference",
      },
    ],
    keyHighlights: [
      "Evaluated Google’s Gemini foundational models across text, image, and audio modalities.",
      "Designed adversarial scenarios requiring agents to find and cross-check distributed tool state.",
      "Seeded distractors and conflicting records to expose multi-step reasoning failures.",
      "Applied evaluation rigor to establish where LLM outputs can be trusted in production pipelines.",
    ],
    metrics: [
      { label: "Modalities", value: "3", subtext: "Text, image, and audio" },
      { label: "Coverage", value: "Multi-Tool", subtext: "Email, chat, Git, trackers" },
      { label: "Approach", value: "Adversarial", subtext: "Distractors & conflicting state" },
      { label: "Alignment", value: "RLHF", subtext: "Human-in-the-loop evaluation" },
    ],
    technologies: ["Gemini", "Mistral", "Python", "LLM evaluation", "RLHF"],
    documentation: [
      {
        title: "Adversarial Evaluation Suite Blueprint",
        type: "Architecture Blueprint",
        url: "https://github.com/PraveenBen",
        external: true,
      },
    ],
    colorAccent: "#10B981",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "DataSturdy Consulting Private Limited",
    role: "Associate Data Engineer",
    period: "01/2025 – 09/2026",
    location: "Bengaluru, India",
    badge: "Production Data Engineering",
    description:
      "Production data engineering across renewable energy IoT (Tata Power), trading FinTech AI (Bajaj Broking), e-commerce scale (Flipkart Ads), and enterprise database modernization (Infosys).",
    bullets: [
      "Tata Power: Delivered cross-cloud CDC platform streaming 24 MSSQL tables across solar panel manufacturing stages into ClickHouse and Databricks.",
      "Tata Power: Provisioned 19-VM HA stack (2-node Debezium, 3-node Kafka, 5-node Flink, 9-node ClickHouse) in 3 days; formally commended by client leadership.",
      "Bajaj Broking: Built Voice2Trade AI pipeline converting call recordings into structured orders with Gemini 3.5 Flash and Mistral, verifying customer consent under SEBI rules.",
      "Flipkart Ads: Maintained streaming pipeline in Apache Beam (Java) on GKE with RocksDB stateful deduplication and Aerospike lookups; held 99.9% uptime through 21x traffic spikes.",
      "Flipkart Ads: Built cross-platform data sanity framework covering MySQL, ClickHouse, Druid, and GCS with daily Spark reconciliations and automated HTML reports.",
      "Infosys: Tuned legacy stored procedures in critical enterprise applications, dropping execution times by 25% and cutting the slowest query from 15 min to 3 min.",
    ],
    technologies: [
      "Spark",
      "Beam",
      "Kafka",
      "Flink",
      "Debezium",
      "ClickHouse",
      "MSSQL",
      "RocksDB",
      "Aerospike",
      "Databricks",
      "GKE",
      "Gemini",
      "Mistral",
    ],
  },
  {
    company: "Freelance",
    role: "LLM Evaluation Engineer",
    period: "06/2023 – Present",
    location: "Remote",
    badge: "Frontier AI & RLHF",
    description:
      "LLM evaluation, RLHF, and adversarial test scenarios for foundation models and autonomous agents.",
    bullets: [
      "Work on LLM evaluation and RLHF, including Google’s Gemini across text, image, and audio.",
      "Design adversarial test scenarios where an agent has to find and cross-check information across email, chat, version control, and project trackers.",
      "Seed synthetic relational datasets with distractors and conflicting records to expose multi-step reasoning failures.",
      "Apply evaluation rigor to determine where LLM outputs can be reliably trusted in production pipelines.",
    ],
    technologies: [
      "Gemini",
      "LLM evaluation",
      "RLHF",
      "Adversarial testing",
      "Python",
      "Synthetic SQL",
    ],
  },
  {
    company: "AffordPlan",
    role: "Financial Counselor & BI Reporting Specialist",
    period: "05/2022 – 12/2022",
    location: "Bengaluru, India",
    badge: "BI & Reporting",
    description:
      "Maintained and enhanced analytics and reporting infrastructure supporting healthcare partner chains.",
    bullets: [
      "Maintained Apache Superset dashboards delivering reporting analytics to leadership.",
      "Wrote custom high-performance SQL queries for reporting charts and resolved query bottlenecks.",
    ],
    technologies: ["Superset", "SQL", "Data Modeling", "Business Intelligence"],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Christ Academy Institute for Advanced Studies",
    period: "02/2023 – 12/2024",
    location: "Bengaluru, India",
    details: "Coursework in Distributed Systems, Cloud Architecture, Database Systems, and Applied AI.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "VEIT Degree College",
    period: "2018 – 2021",
    location: "Bengaluru, India",
    details: "Foundations in Data Structures, Relational Databases, Operating Systems, and Software Engineering.",
  },
];

export const CERTIFICATIONS = [
  {
    name: "Google Associate Cloud Engineer",
    issuer: "Google Cloud Platform",
    badge: "Cloud Infrastructure",
    description: "Certified proficiency in deploying applications, monitoring operations, and managing enterprise GCP cloud solutions.",
    link: "https://cloud.google.com/certification/cloud-engineer",
  },
  {
    name: "GitHub Foundational",
    issuer: "GitHub",
    badge: "DevOps & CI/CD",
    description: "Collaborative software development, repository management, and GitHub Actions workflows.",
    link: "https://resources.github.com/learn/certifications/",
  },
  {
    name: "Machine Learning Certification",
    issuer: "GIT, Hubli",
    badge: "Applied ML",
    description: "Training in statistical learning algorithms, data modeling, feature engineering, and evaluation.",
    link: "#",
  },
  {
    name: "TCS National Qualifier Exam (NQT)",
    issuer: "Tata Consultancy Services",
    badge: "Scored 72%",
    description: "National benchmark certification for quantitative analysis, algorithmic problem-solving, and programming.",
    link: "#",
  },
];

export const HYBRID_SKILLS: HybridSkillCategory[] = [
  {
    title: "Streaming and Real-Time Systems",
    tagline: "Exactly-once stream processing and event transport",
    color: "#10B981",
    iconName: "Database",
    description:
      "Production data engineering since 2025 across Kafka, Flink, and Beam architectures.",
    skills: [
      { name: "Kafka & Pub/Sub", level: "Production", context: "Topic partitioning, replication factor 3, and cross-cloud transport" },
      { name: "Flink & Beam", level: "Production", context: "Exactly-once checkpointing, sliding windows, and RocksDB state backends" },
      { name: "ClickHouse & Druid", level: "Production", context: "Distributed OLAP clusters with sub-second queries on high-volume data" },
      { name: "Debezium & MSSQL CDC", level: "Production", context: "Non-locking transaction log capture streaming 24 tables into analytics stores" },
    ],
  },
  {
    title: "Batch, Storage and Orchestration",
    tagline: "Cluster tuning, cost optimization, and directed workflow scheduling",
    color: "#10B981",
    iconName: "Server",
    description:
      "Performance and cost optimization across Spark, Databricks, Dataproc, and Airflow.",
    skills: [
      { name: "Spark (Dataproc / Databricks)", level: "Production", context: "Shuffle partition sizing, executor memory tuning, and capacity projections" },
      { name: "Delta Lake & Data Warehousing", level: "Production", context: "Lakehouse integration, ACID operations, and schema evolution" },
      { name: "Azkaban & Airflow", level: "Production", context: "Directed workflow scheduling, automated sanity checks, and SLA alerting" },
      { name: "Data Quality & Reconciliation", level: "Production", context: "Automated checks across MySQL, ClickHouse, Druid, and GCS" },
    ],
  },
  {
    title: "Frontier AI and Evaluation",
    tagline: "Adversarial testing, structured extraction, and alignment",
    color: "#10B981",
    iconName: "Cpu",
    description:
      "LLM evaluation, RLHF for Gemini, and adversarial test scenarios across mock enterprise tools.",
    skills: [
      { name: "LLM Evaluation & Adversarial Testing", level: "Production", context: "Cross-tool scenario testing with distractors and conflicting records" },
      { name: "RLHF & Preference Tuning", level: "Production", context: "Google’s Gemini alignment across text, image, and audio modalities" },
      { name: "Speech-to-Text & Order Extraction", level: "Production", context: "Voice2Trade extraction with Gemini 3.5 Flash and Mistral under SEBI rules" },
      { name: "Synthetic Relational Data", level: "Production", context: "Authoring realistic contradictory datasets to expose multi-step reasoning failures" },
    ],
  },
  {
    title: "Database Optimization and Infrastructure",
    tagline: "Query tuning, indexing, and cloud container orchestration",
    color: "#10B981",
    iconName: "Cloud",
    description:
      "Restructuring legacy relational procedures and deploying cloud infrastructure on GCP.",
    skills: [
      { name: "MSSQL Performance Tuning", level: "Production", context: "Stored procedure restructuring, dropping execution times by 25% and 15m to 3m" },
      { name: "GCP & GKE (Associate Cloud Engineer)", level: "Production", context: "Certified Google Cloud engineering, Kubernetes autoscaling, and container workloads" },
      { name: "Aerospike & RocksDB", level: "Production", context: "Sub-millisecond ad attribution cache lookups and stateful deduplication" },
      { name: "Superset & Power BI", level: "Production", context: "Semantic models and operational executive dashboards" },
    ],
  },
];
