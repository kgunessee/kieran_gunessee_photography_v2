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
        className={`h-[95%] w-[95%] overflow-y-auto rounded-xl bg-almostWhite p-4 text-almostBlack lg:h-3/4 lg:w-3/4 dark:bg-almostBlack dark:text-almostWhite`}
      >
        <div className={`flex justify-between`}>
          <h2>{imageInfo.title}</h2>
          <CloseButton setIsInfoPanelOpen={setIsInfoPanelOpen} />
        </div>
        {isAstroImage && (
          <div className={``}>
            <h4>{imageInfo.catalogue}</h4>
            <h3>Image Details</h3>
            <ul className={`list-inside list-disc`}>
              <li>
                Sub Exposure Time: {imageInfo.captureDetails.exposureTime}
              </li>
              <li>
                Total Integration Time: {imageInfo.captureDetails.integration}
              </li>
            </ul>
            <h3>Equipment</h3>
            <ul className={`list-inside list-disc`}>
              <li>Scope: {imageInfo.captureDetails.scope}</li>
              <li>Mount: {imageInfo.captureDetails.mount}</li>
              <li>Camera: {imageInfo.captureDetails.camera}</li>
              <li>Filters: {imageInfo.captureDetails.filters}</li>
              <li>Image Capture: {imageInfo.captureDetails.imagingCapture}</li>
              <li>Guidescope: {imageInfo.captureDetails.guidescope}</li>
              <li>Guide Camera: {imageInfo.captureDetails.guideCamera}</li>
              <li>Software: {imageInfo.captureDetails.software}</li>
            </ul>
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
        <div className={`text-almostBlack dark:text-almostWhite`}>
          {imageInfo.description}
        </div>
      </motion.div>
    </motion.div>
  );
}
