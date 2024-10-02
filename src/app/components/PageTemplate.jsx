import Gallery from "@/app/components/Gallery";

export function PageTemplate({
  images,
  bgColourLight,
  bgColourDark,
  isAstroImage,
  handleSearchTerm,
  pageText,
  pageTitle,
}) {
  return (
    <main className={`overflow-hidden pb-4`}>
      <div
        className={`absolute -right-1/3 top-[-10%] -z-10 aspect-square w-full rounded-full blur-3xl backdrop-filter ${bgColourDark} ${bgColourLight}`}
      ></div>
      <div className={`px-mobileXPadding lg:px-desktopXPadding`}>
        <h2
          className={`mt-2 text-2xl font-semibold text-blueBlack dark:text-almostWhite`}
        >
          {pageTitle}
        </h2>
        <p className={`mb-4 text-almostBlack dark:text-almostWhite`}>
          {pageText}
        </p>
        {isAstroImage && (
          <input
            placeholder={"Search by name or catalogue ID"}
            className={`mb-4 h-8 w-full rounded bg-black/10 px-2 dark:bg-white/10 dark:text-almostWhite`}
            onChange={handleSearchTerm}
          ></input>
        )}
      </div>
      <Gallery images={images} isAstroImage={isAstroImage} />
    </main>
  );
}
