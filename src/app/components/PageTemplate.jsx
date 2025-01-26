"use client";

//Hooks and Plugins
import { useState } from "react";
//Components
import Gallery from "@/app/components/Gallery";
import { Footer } from "@/app/components/Footer";
import { FilterTagButton } from "@/app/components/FilterTagButton";
import { HorizontalRule } from "@/app/components/HorizontalRule";

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
  imageDate,
}) {
  const [searchText, setSearchText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [filterLogic, setFilterLogic] = useState(true);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleTooltipToggle = () => {
    setIsTooltipVisible(true);
    // Auto-hide tooltip after 3 seconds on mobile
    setTimeout(() => {
      setIsTooltipVisible(false);
    }, 3000);
  };

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  // Toggle filter button on click - update setSelectedFilters state with keywords to filter images with.
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
          image.keywords.includes(searchTerm) ||
          image.captureDetails.imageDate.includes(searchTerm)
        : image.title.toLowerCase().includes(searchTerm) ||
          image.location.toLowerCase().includes(searchTerm) ||
          image.imageDate.includes(searchTerm) ||
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
          className={`mb-2 mt-4 text-2xl font-semibold text-blueBlack lg:text-3xl xl:text-3xl dark:text-almostWhite`}
        >
          {pageTitle}
        </h2>
        <p className={`mb-4 text-almostBlack lg:text-xl dark:text-almostWhite`}>
          {pageText}
        </p>
        <HorizontalRule />

        {/*isLocationCategory checks if the page/category is for a location (Iceland, Dartmoor etc.), or a specific category (woodland, water etc.). If true, hide the search bar*/}
        {!isLocationCategory && (
          <div className={`relative flex flex-col gap-2`}>
            <div className={`flex`}>
              <input
                aria-label={"Search bar to filter images"}
                placeholder={`${
                  isAstroImage
                    ? "Search by name or catalogue ID"
                    : "Search by name, location or date"
                }`}
                className={`h-12 w-full bg-black/10 px-2 xl:text-xl dark:bg-white/10 dark:text-almostWhite`}
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
                  className={`clear-search-icon opacity-70`}
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
                className={`relative flex items-center justify-center bg-black/10 px-2 hover:bg-black/15 active:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/10`}
              >
                <svg
                  className={`filter-icon`}
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
                  } absolute right-[7%] top-[7%] h-2 w-2 bg-sky-400`}
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
                <button
                  aria-label={"Match all filters button"}
                  onClick={() => handleFilterLogic(true)}
                  className={`px-2 py-1 text-sm transition-colors ${
                    filterLogic
                      ? "bg-sky-700 text-white dark:text-almostWhite"
                      : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                  }`}
                >
                  Match All Filters
                </button>
                <button
                  aria-label={"Match any filters button"}
                  onClick={() => handleFilterLogic(false)}
                  className={`px-2 py-1 text-sm transition-colors ${
                    !filterLogic
                      ? "bg-sky-700 text-white dark:text-almostWhite"
                      : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
                  }`}
                >
                  Match Any Filter
                </button>
                <div className="group relative" onClick={handleTooltipToggle}>
                  <svg
                    className="help-icon -ml-2 hover:cursor-pointer hover:opacity-80"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#e8eaed"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93zm0-320z"></path>
                  </svg>
                  <div
                    className={`max-w-[70vw]c pointer-events-none absolute -left-52 top-full z-20 mt-1 w-max border-[1px] border-white/40 bg-black px-2 py-1 text-almostWhite opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:-right-40 ${
                      isTooltipVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className={`text-wrap`}>
                      <strong> Match All Filters: </strong>Show images that
                      match ALL selected filter tags.
                      <br />
                      <br />
                      <strong> Match Any Filter: </strong>Show all images that
                      have ANY selected filter tag.
                    </p>
                  </div>
                </div>
              </div>
              <HorizontalRule marginBottom={"mb-2"} />
              {/*-------------------------------------------------------------------------- ASTRO FILTERS --------------------------------------------------------------------------*/}
              {/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              {isAstroImage && (
                <fieldset className={`flex flex-wrap gap-6 pb-2 sm:gap-10`}>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Object Type
                    </h4>
                    <FilterTagButton
                      filterCategory={astroObjectType}
                      handleFilterClick={handleFilterClick}
                      selectedFilters={selectedFilters}
                    />
                  </div>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Colour Palette
                    </h4>
                    <FilterTagButton
                      filterCategory={astroPalette}
                      handleFilterClick={handleFilterClick}
                      selectedFilters={selectedFilters}
                    />
                  </div>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Camera Type{" "}
                    </h4>
                    <FilterTagButton
                      filterCategory={astroCameraType}
                      handleFilterClick={handleFilterClick}
                      selectedFilters={selectedFilters}
                    />
                  </div>

                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Focal Length
                    </h4>
                    <FilterTagButton
                      filterCategory={astroFocalLength}
                      handleFilterClick={handleFilterClick}
                      selectedFilters={selectedFilters}
                    />
                  </div>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Date
                    </h4>
                    <FilterTagButton
                      filterCategory={imageDate}
                      handleFilterClick={handleFilterClick}
                      selectedFilters={selectedFilters}
                    />
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
                    <FilterTagButton
                      filterCategory={nonAstroKeywords}
                      handleFilterClick={handleFilterClick}
                      selectedFilters={selectedFilters}
                    />
                  </div>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Location
                    </h4>
                    <FilterTagButton
                      filterCategory={locations}
                      handleFilterClick={handleFilterClick}
                      selectedFilters={selectedFilters}
                    />
                  </div>
                  <div>
                    <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                      Date
                    </h4>
                    <FilterTagButton
                      filterCategory={imageDate}
                      handleFilterClick={handleFilterClick}
                      selectedFilters={selectedFilters}
                    />
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
