export function CloseButton({ setIsInfoPanelOpen }) {
  return (
    <button
      className={`relative grid h-5 w-5 place-items-center`}
      onClick={() => setIsInfoPanelOpen(false)}
      aria-label={"Close info panel"}
      title={"Close info panel"}
    >
      <span
        className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-almostBlack dark:bg-almostWhite`}
      ></span>
      <span
        className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-almostBlack dark:bg-almostWhite`}
      ></span>
    </button>
  );
}
