"use client";

//Hooks and Plugins
import { useEffect, useState } from "react";
//Components
import Gallery from "@/app/components/Gallery";
import { Footer } from "@/app/components/Footer";
import { CloseButton } from "@/app/components/CloseButton";

export function PageTemplate({
  images,
  bgColourLight,
  bgColourDark,
  isAstroImage = false,
  isLocationCategory = false,
  pageText,
  pageTitle,
  locations = null,
  nonAstroKeywords = null,
  astroCameraType = null,
  astroPalette = null,
  astroFocalLength = null,
  astroObjectType = null,
}) {
  const [searchText, setSearchText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterLogic, setFilterLogic] = useState(true);

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  // Toggle filter button on click - update setSelectedFilters state with keywords to filter images with
  const handleFilterClick = (buttonValue) => {
    setSelectedFilters(
      // Grab the value already stored in the useState Array
      (prevFilters) =>
        prevFilters.includes(buttonValue) // Does the useState Array contain the value of the button just clicked
          ? prevFilters.filter((item) => item !== buttonValue) // Yes, remove the item by creating a new array via .filter() and excluding the clicked item
          : [...prevFilters, buttonValue], // No, add the button value to the array
    );
  };

  const handleFilterLogic = (bool) => {
    setFilterLogic(bool);
  };

  const handleClearSearchbar = () => {
    setSearchText("");
  };

  // Filtering logic
  const filteredImages = images.filter((image) => {
    // Filter the images that are displayed.
    const searchTerm = searchText.toLowerCase(); // Text input by the user in the search box

    // Returns images that include the chosen keywords selected via the filtering buttons
    const hasSelectedFilters =
      selectedFilters.length === 0 || // If no filters have been chosen, show all
      filterLogic
        ? selectedFilters.every(
            // Return images that contain all filter words in the selectedFilters state array
            (filter) => image.keywords.includes(filter.toLowerCase()),
          )
        : selectedFilters.some(
            // Return images that contain all filter words in the selectedFilters state array
            (filter) => image.keywords.includes(filter.toLowerCase()),
          );

    return (
      // Show images based on search text AND the filters
      (isAstroImage
        ? image.title.toLowerCase().includes(searchTerm) ||
          image.catalogue.toLowerCase().includes(searchTerm) ||
          image.keywords.includes(searchTerm)
        : image.title.toLowerCase().includes(searchTerm) ||
          image.location.toLowerCase().includes(searchTerm) ||
          image.keywords.includes(searchTerm)) && hasSelectedFilters
    );
  });

  const handleShowFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  return (
    <section
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

        {/*isLocationCategory checks if the page/category is for a location (Iceland, Dartmoor etc.), or a specific category (woodland, water etc.). If true, hide the search bar*/}
        {!isLocationCategory && (
          <div className={`relative flex flex-col gap-2`}>
            <div className={`flex`}>
              <input
                aria-label={"Search bar to filter images"}
                placeholder={`${
                  isAstroImage
                    ? "Search by name or catalogue ID"
                    : "Search by name or location"
                }`}
                className={`h-12 w-full rounded-l bg-black/10 px-2 xl:text-xl dark:bg-white/10 dark:text-almostWhite`}
                onChange={handleSearchTerm}
                value={searchText}
              ></input>
              <button
                onClick={handleClearSearchbar}
                aria-label={"Clear search bar"}
                title={"Clear search bar"}
                className={`bg-black/10 px-2 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/10`}
              >
                <svg
                  className={`opacity-70`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#e8eaed"
                  viewBox="0 -960 960 960"
                >
                  <path d="M256-200l-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224z"></path>
                </svg>
              </button>
              <button
                aria-label={"Show image filtering options"}
                title={"Show image filtering options"}
                onClick={handleShowFilterMenu}
                className={`relative flex items-center justify-center rounded-r bg-black/10 px-2 hover:bg-black/15 active:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/10`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#e8eaed"
                  viewBox="0 -960 960 960"
                >
                  <path d="M400-240v-80h160v80H400zM240-440v-80h480v80H240zM120-640v-80h720v80H120z"></path>
                </svg>
                <div
                  className={`${
                    selectedFilters.length > 0 ? "block" : "hidden"
                  } absolute right-[7%] top-[7%] h-2 w-2 rounded-full bg-sky-400`}
                ></div>
              </button>
            </div>
            <section
              className={`${
                showFilterMenu
                  ? "pointer-events-auto mb-4 max-h-[999px] translate-y-0 opacity-100"
                  : "pointer-events-none mb-0 mt-0 max-h-0 -translate-y-1 opacity-0"
              } transition-all duration-300`}
            >
              <div
                className={`mb-2 flex gap-4 text-[0.75rem] text-almostBlack/70 dark:text-almostWhite/70`}
              >
                <div className={`flex items-center justify-center gap-1`}>
                  <button
                    onClick={() => handleFilterLogic(true)}
                    className={`aspect-square w-4 rounded border-[1px] border-white/40 px-2 py-1 text-sm transition-colors ${
                      filterLogic
                        ? "bg-sky-700 text-white dark:text-almostWhite"
                        : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                    }`}
                  ></button>
                  <p className={`mt-1`}>
                    Show images that match <strong>all</strong> selected
                    filters.
                  </p>
                </div>
                <div className={`flex items-center justify-center gap-1`}>
                  <button
                    onClick={() => handleFilterLogic(false)}
                    className={`aspect-square w-4 rounded border-[1px] border-white/40 px-2 py-1 text-sm transition-colors ${
                      !filterLogic
                        ? "bg-sky-700 text-white dark:text-almostWhite"
                        : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                    }`}
                  ></button>
                  <p className={`mt-1`}>
                    Show images that match <strong>any</strong> selected
                    filters.
                  </p>
                </div>
              </div>
              <hr
                className={`mb-2 h-[1px] border-none bg-almostBlack/40 dark:bg-white/40`}
              />
              {/*-------------------------------------------------------------------------- ASTRO FILTERS --------------------------------------------------------------------------*/}
              {/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              {isAstroImage && (
                <fieldset className={`flex flex-wrap gap-6 pb-2 sm:gap-10`}>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Object Type
                    </h4>
                    <div className={`flex flex-wrap gap-2`}>
                      {astroObjectType.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleFilterClick(item)}
                          className={`rounded px-2 py-1 text-sm transition-colors ${
                            selectedFilters.includes(item)
                              ? "bg-sky-700 text-white dark:text-almostWhite"
                              : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Colour Palette
                    </h4>
                    <div className={`flex flex-wrap gap-2`}>
                      {astroPalette.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleFilterClick(item)}
                          className={`rounded px-2 py-1 text-sm transition-colors ${
                            selectedFilters.includes(item)
                              ? "bg-sky-700 text-white dark:text-almostWhite"
                              : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Camera Type{" "}
                    </h4>
                    <div className={`flex flex-wrap gap-2`}>
                      {astroCameraType.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleFilterClick(item)}
                          className={`rounded px-2 py-1 text-sm transition-colors ${
                            selectedFilters.includes(item)
                              ? "bg-sky-700 text-white dark:text-almostWhite"
                              : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Focal Length
                    </h4>
                    <div className={`flex flex-wrap gap-2`}>
                      {astroFocalLength.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleFilterClick(item)}
                          className={`rounded px-2 py-1 text-sm transition-colors ${
                            selectedFilters.includes(item)
                              ? "bg-sky-700 text-white dark:text-almostWhite"
                              : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </fieldset>
              )}
              {/*-------------------------------------------------------------------------- NON-ASTRO FILTERS --------------------------------------------------------------------------*/}
              {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              {!isAstroImage && (
                <fieldset
                  className={`${
                    showFilterMenu
                      ? "pointer-events-auto mb-4 mt-2 max-h-[999px] translate-y-0 opacity-100"
                      : "pointer-events-none mb-0 mt-0 max-h-0 -translate-y-1 opacity-0"
                  } flex flex-wrap gap-6 pb-2 transition-all duration-300 sm:gap-10`}
                >
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Object Type
                    </h4>
                    <div className={`flex flex-wrap gap-2`}>
                      {nonAstroKeywords.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleFilterClick(item)}
                          className={`rounded px-2 py-1 text-sm transition-colors ${
                            selectedFilters.includes(item)
                              ? "bg-sky-700 text-white dark:text-almostWhite"
                              : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Colour Palette
                    </h4>
                    <div className={`flex flex-wrap gap-2`}>
                      {locations.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleFilterClick(item)}
                          className={`rounded px-2 py-1 text-sm transition-colors ${
                            selectedFilters.includes(item)
                              ? "bg-sky-700 text-white dark:text-almostWhite"
                              : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </fieldset>
              )}
            </section>
          </div>
        )}
        <Gallery images={filteredImages} isAstroImage={isAstroImage} />
      </section>
      <Footer />
    </section>
  );
}
