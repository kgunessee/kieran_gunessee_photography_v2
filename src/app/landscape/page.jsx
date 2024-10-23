//Components
import { landscapeImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Landscape - Kieran Gunessee Photography",
  description:
    "My photos of hills, mountains, vistas and interesting landmarks.",
  keywords: [
    "photography",
    "landscape",
    "landscape photography",
    "hills",
    "mountains",
    "scenic views",
  ],
};

export default function Landscape() {
  const pageText =
    "Hills, mountains, sweeping vistas and interesting landmarks. Exploring nature's landscapes from every angle.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"LANDSCAPE"}
        pageText={pageText}
        images={landscapeImageInfo}
        bgColourDark={"dark:to-orange-300/5"}
        bgColourLight={"to-orange-300/20"}
        locations={["Iceland", "UK", "Lanzarote", "Midlands", "Devon"]}
        nonAstroKeywords={[
          "Wide angle",
          "Minimalist",
          "Mountains",
          "Hills",
          "Atmospheric",
          "Black & white",
        ]}
      />
    </main>
  );
}
