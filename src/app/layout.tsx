import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'StreamNest - Endless Entertainment at Your Fingertips',
  description: 'Stream thousands of movies, series, and exclusive originals in stunning 4K Ultra HD. Start your free trial today and dive into a world of entertainment with StreamNest.',
  keywords: ["streaming, movies, series, entertainment, 4K, HD, online video, subscription, originals, TV shows, media"],
  openGraph: {
    "title": "StreamNest - Endless Entertainment at Your Fingertips",
    "description": "Stream thousands of movies, series, and exclusive originals in stunning 4K Ultra HD. Start your free trial today and dive into a world of entertainment with StreamNest.",
    "url": "https://www.streamnest.com",
    "siteName": "StreamNest",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/medium-shot-woman-posing-with-smartphone_23-2149424938.jpg",
        "alt": "People watching streaming content on StreamNest"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "StreamNest - Endless Entertainment at Your Fingertips",
    "description": "Stream thousands of movies, series, and exclusive originals in stunning 4K Ultra HD. Start your free trial today and dive into a world of entertainment with StreamNest.",
    "images": [
      "http://img.b2bpic.net/free-photo/medium-shot-woman-posing-with-smartphone_23-2149424938.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
