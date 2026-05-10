import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Symptom & Medication Interaction Checker",
  description: "Check if your symptoms match medication side effects. Built for chronic illness patients, elderly patients, and caregivers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="06b16c42-88eb-4db5-a217-3b883f70f8a0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
