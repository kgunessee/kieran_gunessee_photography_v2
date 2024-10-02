//Components

import { waterImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

export default function Water() {
  const pageText =
    "Waterfalls, rivers and oceans - the flow of water in every form.";
  return (
    <>
      <Header />
      <PageTemplate
        pageTitle={"WATER"}
        pageText={pageText}
        handleSearchTerm={null}
        images={waterImageInfo}
        isAstroImage={false}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-blue-500/15"}
      />
    </>
  );
}
