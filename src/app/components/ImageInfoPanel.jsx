//Hooks & Plugins
import { motion } from "framer-motion";

//Components
import { CloseButton } from "@/app/components/CloseButton";

export function ImageInfoPanel({
  imageInfo,
  setIsInfoPanelOpen,
  isAstroImage,
}) {
  const handleCloseModal = () => setIsInfoPanelOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      onClick={handleCloseModal}
      className={`absolute left-0 top-0 z-[9999] grid h-full w-full place-items-center bg-black/70 backdrop-blur`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.3, bounce: 0.125 }}
        onClick={(e) => e.stopPropagation()}
        className={`h-[95%] w-[95%] overflow-y-auto rounded-xl bg-almostWhite p-4 text-almostBlack lg:h-3/4 lg:w-3/4 dark:bg-blueBlack dark:text-almostWhite`}
      >
        <div className={`flex items-start justify-between`}>
          <h2 className={`mr-4 text-2xl font-semibold`}>{imageInfo.title}</h2>
          <CloseButton setIsInfoPanelOpen={setIsInfoPanelOpen} />
        </div>
        <div className={`relative flex flex-col`}>
          {isAstroImage && (
            <div className={`lg:w-full`}>
              <h4 className={`text-blueBlack dark:text-greyBlue`}>
                {`${imageInfo.catalogue} // ${imageInfo.captureDetails.imageDate}`}
              </h4>
              <h3 className={`my-4 text-xl font-semibold`}>Image Details</h3>
              <ul className={`flex list-inside list-disc flex-col gap-1`}>
                <li>
                  <strong>Sub Exposure Time:</strong>{" "}
                  {imageInfo.captureDetails.exposureTime}
                </li>
                <li>
                  <strong>Total Integration Time:</strong>{" "}
                  {imageInfo.captureDetails.integration}
                </li>
              </ul>
              <h3 className={`my-4 text-xl font-semibold`}>Equipment</h3>
              <ul className={`flex list-inside list-disc flex-col gap-1`}>
                <li>
                  <strong>Scope: </strong>
                  {imageInfo.captureDetails.scope}
                </li>
                <li>
                  <strong>Mount: </strong>
                  {imageInfo.captureDetails.mount}
                </li>
                <li>
                  <strong>Camera:</strong> {imageInfo.captureDetails.camera}
                </li>
                <li>
                  <strong>Filters: </strong>
                  {imageInfo.captureDetails.filters}
                </li>
                <li>
                  <strong>Image Capture:</strong>{" "}
                  {imageInfo.captureDetails.imagingCapture}
                </li>
                <li>
                  <strong>Guidescope: </strong>
                  {imageInfo.captureDetails.guidescope}
                </li>
                <li>
                  <strong>Guide Camera:</strong>{" "}
                  {imageInfo.captureDetails.guideCamera}
                </li>
                <li>
                  <strong>Software:</strong> {imageInfo.captureDetails.software}
                </li>
              </ul>
            </div>
          )}
          {!isAstroImage && (
            <div className={`lg:w-full`}>
              <h4 className={`text-blueBlack dark:text-greyBlue`}>
                {`${imageInfo.imageDate} // ${imageInfo.location}`}
              </h4>
              <h3 className={`my-4 text-xl font-semibold`}>Image Details</h3>
              <ul className={`flex list-inside list-disc flex-col gap-1`}>
                <li>
                  <strong>Shutter Speed:</strong>{" "}
                </li>
                <li>
                  <strong>Aperture:</strong>{" "}
                </li>
              </ul>
              <h3 className={`my-4 text-xl font-semibold`}>Equipment</h3>
              <ul className={`flex list-inside list-disc flex-col gap-1`}>
                <li>
                  <strong>Camera: </strong>
                  {imageInfo.camera}
                </li>
                <li>
                  <strong>Lens: </strong>
                  {imageInfo.lens}
                </li>
              </ul>
            </div>
          )}
          <hr
            className={`my-8 h-[1px] border-none bg-greyBlue dark:bg-white/30`}
          />
          <div className={`text-almostBlack dark:text-almostWhite`}>
            {imageInfo.description}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
