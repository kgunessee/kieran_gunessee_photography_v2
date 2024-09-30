//Components
import { CloseButton } from "@/app/components/CloseButton";

export function ImageInfoPanel({
  imageInfo,
  setIsInfoPanelOpen,
  isAstroImage,
}) {
  const closeModal = () => setIsInfoPanelOpen(false);

  return (
    <div
      onClick={closeModal}
      className={`absolute left-0 top-0 z-[9999] h-full w-full bg-black/80`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded bg-almostWhite p-4 dark:bg-blueBlack`}
      >
        <div className={`flex justify-between`}>
          <h3>Image Details</h3>
          <CloseButton />
        </div>
        {isAstroImage && (
          <div>
            <ul>
              <li>ASTRO IMAGE!</li>
            </ul>
            <h3>Equipment</h3>
            <ul></ul>
          </div>
        )}
        {!isAstroImage && (
          <div>
            <ul>
              <li>NORMAL IMAGE!</li>
            </ul>
            <h3>Equipment</h3>
            <ul></ul>
          </div>
        )}
        <p className={`text-almostBlack dark:text-almostWhite`}>
          {imageInfo.description}
        </p>
      </div>
    </div>
  );
}
