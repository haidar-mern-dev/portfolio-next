import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahad Mustafa — Lead Data Engineer",
  description:
    "Lead Data Engineer with 8+ years of experience building enterprise data platforms across AWS, Azure, and GCP. Spark, Kafka, Airflow, Databricks, Snowflake, dbt.",
  keywords: [
    "Data Engineer",
    "Big Data",
    "Cloud",
    "Databricks",
    "Snowflake",
    "Spark",
    "Kafka",
  ],
  openGraph: {
    title: "Fahad Mustafa — Lead Data Engineer",
    description:
      "Building scalable, cloud-native data platforms across AWS, Azure, and GCP.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
