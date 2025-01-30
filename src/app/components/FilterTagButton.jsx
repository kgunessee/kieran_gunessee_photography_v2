export function FilterTagButton({
  filterCategory,
  handleFilterClick,
  selectedFilters,
}) {
  return (
    <div className={`flex flex-wrap gap-2`}>
      {filterCategory.map((item) => (
        <button
          key={item}
          onClick={() => handleFilterClick(item)}
          className={`px-2 py-1 text-sm transition-colors ${
            selectedFilters.includes(item)
              ? "bg-sky-700 text-white active:bg-sky-800 dark:text-almostWhite"
              : "bg-almostBlack/10 hover:bg-almostBlack/5 active:bg-almostBlack/10 dark:bg-white/10 dark:text-almostWhite dark:hover:bg-white/15 dark:active:bg-white/10"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
