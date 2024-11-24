import "./globals.css";
import DynamicHeight from "@/components/ui/dynamicHeight";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syncs",
  description: "Sync your social media profiles",
  icons: { icon: "/favicon.ico" },
  keywords: "social media",
  url: "https://syncs.vercel.app/",
  canonical: "https://syncs.vercel.app/",
  robots: "index, follow",
  author: "Ujjwal",
  publisher: "Ujjwal",
  lang: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang={metadata.lang}>
      <body className={`${inter.className} antialiased`}>
        <DynamicHeight />
        <Navbar />
        <div className="p-14 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
