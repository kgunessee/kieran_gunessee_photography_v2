//Fonts
import { DM_Sans, Inter, Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });
//
// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });

//Styles
import "./globals.css";

/** @type {import("next").Metadata} */
export const metadata = {
  title: {
    default: "Kieran Gunessee Photography",
    template: "%s - Kieran Gunessee",
  },
  keywords: [
    "photography, kieran gunessee, landscape, astrophotography, fine art photography, macro, macro photography, nature, nature photography",
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
        className={`dark overflow-x-hidden bg-almostWhite antialiased transition-colors duration-200 dark:bg-almostBlack`}
      >
        {children}
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
// ${manrope.className}
