//Fonts
import { DM_Sans, Manrope, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

//Styles
import "./globals.css";

/** @type {import("next").Metadata} */
export const metadata = {
  title: {
    default: "Kieran Gunessee Photography",
    template: "%s - Kieran Gunessee Photography",
  },
  keywords: [
    "photography, kieran gunessee, landscape, astrophotography, fine art photography",
  ],
  description:
    "Astro, Landscape, Nature & Macro Photographer based in the Midlands, UK.",
  author: "Kieran Gunessee",
  twitter: {
    card: "summary_large_image",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} dark overflow-x-hidden bg-almostWhite antialiased transition-colors duration-200 dark:bg-almostBlack`}
      >
        {children}
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
