import type { Metadata } from "next";
import { Inter, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { GlobalCursor } from "@/components/GlobalCursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXTEC. | Brutalist Creative Agency",
  description: "An Awwwards-winning digital product studio crafting brutalist web experiences. We redefine the digital landscape with bold typography and premium motion design.",
  openGraph: {
    title: "NEXTEC. | Brutalist Creative Agency",
    description: "An Awwwards-winning digital product studio crafting brutalist web experiences.",
    url: "https://nextec.studio",
    siteName: "NEXTEC.",
    images: [
      {
        url: "https://nextec.studio/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXTEC. | Brutalist Creative Agency",
    description: "An Awwwards-winning digital product studio crafting brutalist web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="cursor-none">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${vt323.variable} antialiased bg-background text-foreground`}
      >
        <GlobalCursor />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
