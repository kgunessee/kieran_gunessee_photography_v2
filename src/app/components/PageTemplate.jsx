"use client";

//Hooks and Plugins
import { useState } from "react";
//Components
import Gallery from "@/app/components/Gallery";
import { Footer } from "@/app/components/Footer";
import { FilterTagButton } from "@/app/components/FilterTagButton";
import { HorizontalRule } from "@/app/components/HorizontalRule";
import {
  ClearSearchIcon,
  FilterIcon,
  TooltipIcon,
} from "@/app/components/Logos_Icons";

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
  focalLength,
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
            // Return images that contain any filter words in the selectedFilters state array
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
          className={`mb-2 mt-4 text-2xl text-blueBlack lg:text-3xl xl:text-3xl dark:text-almostWhite`}
        >
          {pageTitle}
        </h2>
        <p
          className={`mb-4 font-light text-almostBlack lg:text-xl dark:text-almostWhite`}
        >
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
                <ClearSearchIcon />
              </button>
              <button
                aria-label={"Show image filtering options"}
                title={"Show image filtering options"}
                onClick={handleShowFilterMenu}
                className={`relative flex items-center justify-center bg-black/10 px-2 hover:bg-black/15 active:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/10`}
              >
                <FilterIcon />
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
                <div
                  className="group md:relative"
                  onClick={handleTooltipToggle}
                >
                  <TooltipIcon />
                  <div
                    className={`pointer-events-none absolute left-0 top-10 z-[50] mt-1 w-auto border-[1px] border-white/40 bg-black px-2 py-1 text-almostWhite opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:-right-40 md:-top-1 md:left-4 md:w-[500px] ${
                      isTooltipVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className={`text-wrap`}>
                      <strong> Match All Filters (AND): </strong>Only display
                      images that contain every selected attribute, e.g. taken
                      in <strong>2025</strong>{" "}
                      <span className={`underline`}>AND</span> in the{" "}
                      <strong>UK</strong>
                      <br />
                      <br />
                      <strong> Match Any Filter (OR): </strong>Displays all
                      images that contains a selected attribute, e.g. show{" "}
                      <span className={`underline`}>ALL </span>
                      images taken in the <strong>2025</strong> and show all
                      images taken in the <strong>UK</strong>.
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
                  {focalLength && (
                    <div>
                      <h4 className="text-almostDark mb-2 font-semibold dark:text-almostWhite">
                        Focal Length
                      </h4>
                      <FilterTagButton
                        filterCategory={focalLength}
                        handleFilterClick={handleFilterClick}
                        selectedFilters={selectedFilters}
                      />
                    </div>
                  )}
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
