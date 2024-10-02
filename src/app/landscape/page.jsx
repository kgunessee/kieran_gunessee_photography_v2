//Components
import { landscapeImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

export default function Landscape() {
  const pageText =
    "Hills, mountains, sweeping vistas and interesting landmarks. Exploring nature's landscapes from every angle.";
  return (
    <>
      <Header />
      <PageTemplate
        pageTitle={"LANDSCAPE"}
        pageText={pageText}
        handleSearchTerm={null}
        images={landscapeImageInfo}
        isAstroImage={false}
        bgColourDark={"dark:to-orange-300/5"}
        bgColourLight={"to-orange-300/20"}
      />
    </>
  );
}
