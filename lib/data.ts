export const profile = {
  name: "Fahad Mustafa",
  titles: ["Lead Data Engineer", "Big Data Engineer", "Cloud Data Specialist"],
  location: "Lumberton, NJ 08048",
  email: "fahadmustafa8000@gmail.com",
  phone: "(856) 208-0827",
  linkedin: "https://linkedin.com/in/fahad-mustafa-fm747",
  github: "https://github.com/fahadmustafa-data",
  summary:
    "Lead Data Engineer with 8+ years of experience designing, developing, and modernizing enterprise data platforms across AWS, Azure, and GCP. Expertise in building scalable ETL/ELT pipelines, cloud-native data warehouses, and real-time data processing solutions using Python, SQL, Apache Spark, Kafka, Airflow, Databricks, Snowflake, and dbt. Strong background in cloud migration, data modeling, CI/CD, Infrastructure as Code, and mentoring engineering teams.",
};

export const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "3", label: "Cloud Platforms" },
  { value: "4", label: "Certifications" },
  { value: "50+", label: "Pipelines Shipped" },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    skills: ["Python", "SQL (T-SQL, PL/SQL)", "Scala", "Java", "Bash", "YAML", "JSON"],
  },
  {
    title: "Data Engineering",
    icon: "workflow",
    skills: ["ETL/ELT", "Apache Spark", "PySpark", "Kafka", "Spark Streaming", "Airflow", "Dagster", "dbt", "Databricks", "Snowpark"],
  },
  {
    title: "Cloud Platforms",
    icon: "cloud",
    skills: ["AWS", "Azure", "GCP"],
  },
  {
    title: "Cloud Services",
    icon: "server",
    skills: ["Azure Data Factory", "Microsoft Fabric", "Synapse Analytics", "S3", "EC2", "Lambda", "BigQuery"],
  },
  {
    title: "Databases & Warehouses",
    icon: "database",
    skills: ["SQL Server", "PostgreSQL", "Oracle", "MySQL", "Redshift", "Snowflake", "BigQuery", "Apache Iceberg", "Delta Lake"],
  },
  {
    title: "Big Data",
    icon: "layers",
    skills: ["Hadoop", "Spark Streaming", "Apache Flink", "Iceberg", "Delta Lake"],
  },
  {
    title: "Data Modeling",
    icon: "boxes",
    skills: ["Dimensional Modeling", "Star Schema", "Snowflake Schema", "Data Vault 2.0", "Data Marts"],
  },
  {
    title: "Data Governance",
    icon: "shield-check",
    skills: ["Collibra", "Unity Catalog", "Great Expectations", "Data Lineage", "MDM"],
  },
  {
    title: "ML & AI",
    icon: "brain",
    skills: ["MLflow", "Azure ML", "SageMaker", "Vertex AI", "LangChain", "RAG", "Feature Engineering"],
  },
  {
    title: "BI Tools",
    icon: "bar-chart",
    skills: ["Power BI", "Tableau", "Looker", "Amazon QuickSight"],
  },
  {
    title: "DevOps & IaC",
    icon: "git-branch",
    skills: ["Git", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    title: "APIs",
    icon: "plug",
    skills: ["REST", "GraphQL", "gRPC"],
  },
  {
    title: "Security & Compliance",
    icon: "lock",
    skills: ["IAM", "HIPAA", "GDPR", "SOC 2", "RBAC"],
  },
  {
    title: "Monitoring",
    icon: "activity",
    skills: ["Grafana", "Prometheus", "Datadog", "ELK Stack"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Lead Data Engineer",
    company: "Kpak",
    period: "Mar 2024 — Present",
    current: true,
    bullets: [
      "Led enterprise cloud-native data platforms on Databricks, Snowflake, and Spark, serving analytics and AI workloads at scale.",
      "Built reusable ingestion frameworks and real-time pipelines with Kafka, Spark Streaming, Airflow, and dbt.",
      "Migrated legacy systems to Lakehouse architectures across AWS, Azure, and GCP.",
      "Established data governance with Collibra, Unity Catalog, and Great Expectations.",
      "Enabled ML platforms with MLflow, Vertex AI, and SageMaker; automated infrastructure with Terraform, Kubernetes, and GitHub Actions.",
      "Mentored distributed engineering teams and standardized platform practices.",
    ],
    tech: ["Databricks", "Snowflake", "Kafka", "Airflow", "dbt", "Terraform", "Kubernetes", "MLflow"],
  },
  {
    role: "Senior Data Engineer",
    company: "Neo4j",
    period: "Nov 2021 — Feb 2024",
    bullets: [
      "Built cloud-native ETL/ELT pipelines with Databricks, Snowflake, Spark, and dbt.",
      "Designed reusable ingestion frameworks and optimized Spark workloads for cost and performance.",
      "Designed dimensional models and data marts powering enterprise reporting.",
      "Integrated multi-cloud and API data sources into unified analytics layers.",
      "Automated CI/CD with Jenkins and Docker; mentored junior engineers.",
    ],
    tech: ["Databricks", "Snowflake", "Spark", "dbt", "Jenkins", "Docker"],
  },
  {
    role: "Data Engineer",
    company: "Curotec",
    period: "Jun 2019 — Oct 2021",
    bullets: [
      "Built ETL/ELT pipelines with Python, Spark, and Airflow for batch and incremental loads.",
      "Optimized SQL and Spark performance across Redshift and Snowflake warehouses.",
      "Automated data validation with Python, improving data reliability.",
      "Supported AWS batch processing with S3, EC2, and Lambda.",
    ],
    tech: ["Python", "Spark", "Airflow", "Redshift", "Snowflake", "AWS"],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  color: string;
};

export const certifications: Certification[] = [
  {
    title: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    color: "#FF3621",
  },
  {
    title: "Azure Data Engineer Associate (DP-203)",
    issuer: "Microsoft Certified",
    color: "#0078D4",
  },
  {
    title: "AWS Certified Data Analytics — Specialty",
    issuer: "Amazon Web Services",
    color: "#FF9900",
  },
  {
    title: "SnowPro Core Certification",
    issuer: "Snowflake",
    color: "#29B5E8",
  },
];

export const achievements = [
  {
    title: "Platform Modernization",
    text: "Modernized enterprise data platforms with cloud-native architectures, replacing brittle legacy systems with Lakehouse designs built to scale.",
  },
  {
    title: "Batch + Real-Time at Scale",
    text: "Delivered scalable batch and real-time integration solutions powering analytics, reporting, and operational workloads across the business.",
  },
  {
    title: "Engineering Standards",
    text: "Standardized engineering practices with reusable frameworks, automated validation, and governance baked into every pipeline.",
  },
  {
    title: "Multi-Cloud Leadership",
    text: "Led multi-cloud modernization initiatives across AWS, Azure, and GCP, supporting enterprise analytics and AI adoption.",
  },
];

export const education = {
  degree: "Bachelor of Business Administration",
  school: "Temple University",
};
