"use client";

//Hooks and Plugins
import { useEffect, useState } from "react";
//Components
import Gallery from "@/app/components/Gallery";
import { Footer } from "@/app/components/Footer";

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
}) {
  const [searchText, setSearchText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  // Toggle filter button on click - update setSelectedFilters state
  const handleFilterClick = (filter) => {
    setSelectedFilters(
      (
        prevFilters, // Grab the value already stored in the useState Array
      ) =>
        prevFilters.includes(filter) // Does the useState Array contain the value of the button just clicked
          ? prevFilters.filter((item) => item !== filter) // Yes, remove the item by creating a new array via .filter and excluding the clicked item
          : [...prevFilters, filter], // No, add the button value to the array
    );
  };

  // Filtering logic
  const filteredImages = images.filter((image) => {
    const searchTerm = searchText.toLowerCase();
    const hasSelectedFilters =
      selectedFilters.length === 0 ||
      selectedFilters.every(
        (filter) =>
          image.keyWords.includes(filter.toLowerCase()) ||
          image.location.includes(filter.toLowerCase()),
      );

    return (
      (isAstroImage
        ? image.title.toLowerCase().includes(searchTerm) ||
          image.catalogue.toLowerCase().includes(searchTerm)
        : image.title.toLowerCase().includes(searchTerm) ||
          image.location.toLowerCase().includes(searchTerm) ||
          image.keyWords.includes(searchTerm)) && hasSelectedFilters
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

        {!isLocationCategory && (
          <div className={`relative mb-4 flex flex-col gap-2`}>
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
              className={`flex h-8 w-8 items-center justify-center rounded xl:h-10 xl:w-10 dark:bg-white/10 dark:hover:bg-white/15 dark:active:bg-white/10`}
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
              className={`${
                showFilterMenu
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-1 opacity-0"
              } absolute right-0 top-10 z-20 flex flex-col gap-2 rounded border-[1px] border-white/40 bg-almostWhite p-2 shadow-md transition-all dark:bg-almostBlack`}
            >
              <h4 className="text-almostDark font-semibold dark:text-almostWhite">
                Filter by location
              </h4>
              {locations.map((item) => (
                <button
                  key={item}
                  onClick={() => handleFilterClick(item)}
                  className={`rounded px-2 py-1 ${
                    selectedFilters.includes(item)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-white/10 dark:text-almostWhite"
                  }`}
                >
                  {item}
                </button>
              ))}

              <hr
                className={`h-[1px] border-none bg-almostBlack/40 dark:bg-almostWhite/40`}
              />

              <h4 className="text-almostDark font-semibold dark:text-almostWhite">
                Filter by type
              </h4>
              {nonAstroKeywords.map((item) => (
                <button
                  key={item}
                  onClick={() => handleFilterClick(item)}
                  className={`rounded px-2 py-1 ${
                    selectedFilters.includes(item)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-white/10 dark:text-almostWhite"
                  }`}
                >
                  {item}
                </button>
              ))}
            </fieldset>
          </div>
        )}
        <Gallery images={filteredImages} isAstroImage={isAstroImage} />
      </section>
      <Footer />
    </section>
  );
}
