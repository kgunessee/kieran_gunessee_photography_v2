//This is the template for the image pages

//Components
import Gallery from "@/app/components/Gallery";
import { Footer } from "@/app/components/Footer";

export function PageTemplate({
  images,
  bgColourLight,
  bgColourDark,
  isAstroImage = false,
  isLocationCategory = false,
  handleSearchTerm,
  pageText,
  pageTitle,
}) {
  return (
    <main
      // style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      className={`flex min-h-[calc(100dvh-65px)] flex-col justify-between overflow-hidden border-t-[1px] border-white/20 bg-gradient-to-tr from-transparent from-50% lg:min-h-[calc(100dvh-80px)] ${bgColourDark} ${bgColourLight}`}
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

        {!isLocationCategory && (
          <input
            placeholder={`${
              isAstroImage
                ? "Search by name or catalogue ID"
                : "Search by name or location"
            }`}
            className={`mb-4 h-8 w-full rounded bg-black/10 px-2 dark:bg-white/10 dark:text-almostWhite`}
            onChange={handleSearchTerm}
          ></input>
        )}
        <Gallery images={images} isAstroImage={isAstroImage} />
      </section>
      <Footer />
    </main>
  );
}
