//Hooks & Plugins
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

export function ThemeButton({ handleIsDarkModeToggle, isDarkMode }) {
  return (
    <button
      title={"Toggle theme"}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      onClick={handleIsDarkModeToggle}
      className={`relative grid h-7 w-8 place-items-center gap-2 overflow-hidden text-white md:mx-2`}
    >
      <AnimatePresence mode="wait">
        {!isDarkMode ? (
          <motion.div
            key="lightMode"
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: cubicBezier(0.68, -0.6, 0.32, 1.2),
              },
            }}
            exit={{
              y: 10,
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: cubicBezier(0.68, -0.6, 0.32, 1.2),
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#e3d58a"
              viewBox="0 -960 960 960"
            >
              <path d="M480-28L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280zm0 140l100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100z"></path>
            </svg>
          </motion.div>
        ) : (
          <motion.div
            className={``}
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.15,
                ease: cubicBezier(0.68, -0.6, 0.32, 1.2),
                // delay: 0.2, // Delay for the second animation
              },
            }}
            exit={{
              y: 10,
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: cubicBezier(0.68, -0.6, 0.32, 1.2),
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#e8eaed"
              viewBox="0 -960 960 960"
            >
              <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80z"></path>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
