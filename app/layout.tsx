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
  title: "Haidar Ali — Senior Software Engineer",
  description:
    "Senior Full Stack Software Engineer specializing in React.js, Next.js, Node.js, TypeScript, and MERN stack development.",
  icons: {
    icon: "/p.png",
    apple: "/p.png",
  },
  keywords: [
    "Senior Software Engineer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MERN Stack",
  ],
  openGraph: {
    title: "Haidar Ali — Senior Software Engineer",
    description:
      "Building scalable frontend and full stack applications with React.js, Next.js, Node.js, and TypeScript.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
