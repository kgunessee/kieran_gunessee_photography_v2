//This is the template for the image pages
"use client";
//Components
import Gallery from "@/app/components/Gallery";
import { Footer } from "@/app/components/Footer";
import { useEffect, useState } from "react";

export function PageTemplate({
  images,
  bgColourLight,
  bgColourDark,
  isAstroImage = false,
  isLocationCategory = false,
  pageText,
  pageTitle,
}) {
  const [searchText, setSearchText] = useState("");
  const [radioBtnValue, setRadioBtnValue] = useState("");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  const filteredImages = images.filter((image) => {
    const searchTerm = searchText.toLowerCase();
    if (isAstroImage) {
      return (
        image.title.toLowerCase().includes(searchTerm) ||
        image.catalogue
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(searchTerm) ||
        image.catalogue.toLowerCase().includes(searchTerm)
      );
    } else {
      return (
        image.title.toLowerCase().includes(searchTerm) ||
        image.location.replaceAll(" ", "").toLowerCase().includes(searchTerm) ||
        image.location.toLowerCase().includes(searchTerm)
      );
    }
  });

  const handleRadioButtonValue = (e) => {
    setRadioBtnValue(e.target.value);
  };

  const handleShowFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  useEffect(() => {
    setSearchText(radioBtnValue);
  }, [radioBtnValue]);

  return (
    <section
      // style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      className={`flex min-h-[calc(100dvh-65px)] flex-col justify-between overflow-hidden border-t-[1px] border-white/20 bg-gradient-to-tr from-transparent from-50% lg:min-h-[calc(100dvh-80px)] ${bgColourDark} ${bgColourLight}`}
    >
      <section className={`px-mobileXPadding lg:px-desktopXPadding`}>
        <h2
          className={`mt-2 text-2xl font-semibold text-blueBlack xl:text-3xl dark:text-almostWhite`}
        >
          {pageTitle}
        </h2>
        <p className={`mb-4 text-almostBlack dark:text-almostWhite`}>
          {pageText}
        </p>

        {!isLocationCategory && (
          <div className={`relative mb-4 flex items-center gap-2`}>
            <input
              aria-label={"Search bar to filter images"}
              placeholder={`${
                isAstroImage
                  ? "Search by name or catalogue ID"
                  : "Search by name or location"
              }`}
              className={`h-8 w-full rounded bg-black/10 px-2 xl:h-10 xl:text-xl dark:bg-white/10 dark:text-almostWhite`}
              onChange={handleSearchTerm}
              value={searchText}
            ></input>
            <button
              onClick={handleShowFilterMenu}
              className={`flex h-8 w-8 items-center justify-center rounded xl:h-10 xl:w-10 dark:bg-white/10 dark:hover:bg-white/15`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#e8eaed"
                viewBox="0 -960 960 960"
              >
                <path d="M400-240v-80h160v80H400zM240-440v-80h480v80H240zM120-640v-80h720v80H120z"></path>
              </svg>
            </button>
            <fieldset
              className={`absolute ${showFilterMenu ? "block" : "hidden"} right-0 top-10 z-20 flex flex-col gap-2 border-[1px] border-white/40 bg-almostWhite dark:bg-almostBlack`}
            >
              <legend className="text-almostWhite">Filter by location</legend>
              <div>
                <input
                  onClick={(e) => handleRadioButtonValue(e)}
                  type={"radio"}
                  name={"filter"}
                  id={"iceland"}
                  value={"iceland"}
                />
                <label className={`text-almostWhite`} htmlFor={"iceland"}>
                  iceland
                </label>
              </div>
              <div>
                <input
                  onClick={(e) => handleRadioButtonValue(e)}
                  type={"radio"}
                  name={"filter"}
                  id={"dartmoor"}
                  value={"dartmoor"}
                />
                <label className={`text-almostWhite`} htmlFor={"dartmoor"}>
                  dartmoor
                </label>
              </div>
            </fieldset>
          </div>
        )}
        <Gallery images={filteredImages} isAstroImage={isAstroImage} />
      </section>
      <Footer />
    </section>
  );
}
