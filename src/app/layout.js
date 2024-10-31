//Fonts
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

//Styles
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Kieran Gunessee Photography",
  keywords: [
    "photography, kieran gunessee, landscape, astrophotography, fine art photography",
  ],
  description:
    "Astro, Landscape, Nature & Macro Photographer based in the Midlands, UK.",
  author: "Kieran Gunessee",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} dark overflow-x-hidden bg-almostWhite antialiased transition-colors duration-200 dark:bg-almostBlack`}
      >
        {children}
      </body>
      {/*<SpeedInsights />*/}
      {/*<Analytics />*/}
    </html>
  );
}
