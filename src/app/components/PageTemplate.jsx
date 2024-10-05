//This is the template for the image pages

//Components
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
    <main
      className={`overflow-hidden bg-gradient-to-tr from-transparent from-50% ${bgColourDark} ${bgColourLight} pb-4`}
    >
      <section className={`px-mobileXPadding lg:px-desktopXPadding`}>
        <h2
          className={`mt-2 text-2xl font-semibold text-blueBlack dark:text-almostWhite`}
        >
          {pageTitle}
        </h2>
        <p className={`mb-4 text-almostBlack dark:text-almostWhite`}>
          {pageText}
        </p>

        <input
          placeholder={`${
            isAstroImage
              ? "Search by name or catalogue ID"
              : "Search by name or location"
          }`}
          className={`mb-4 h-8 w-full rounded bg-black/10 px-2 dark:bg-white/10 dark:text-almostWhite`}
          onChange={handleSearchTerm}
        ></input>
      </section>
      <Gallery images={images} isAstroImage={isAstroImage} />
    </main>
  );
}
