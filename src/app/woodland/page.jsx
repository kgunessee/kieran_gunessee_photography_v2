//Components
import { woodlandImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

export default function woodland() {
  const pageText =
    "Trees, leaves, orange and green - the chaos and calm of the woods.";
  return (
    <>
      <Header />
      <PageTemplate
        pageTitle={"WOODLAND"}
        pageText={pageText}
        handleSearchTerm={null}
        images={woodlandImageInfo}
        isAstroImage={false}
        bgColourDark={"dark:bg-emerald-700/10"}
        bgColourLight={"bg-emerald-700/20"}
      />
    </>
  );
}
