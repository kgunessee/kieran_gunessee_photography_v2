//Hooks & Plugins
import Link from "next/link";
import { motion } from "framer-motion";

//Components
import { NavbarItems } from "@/app/components/NavbarItems";

// Define animation variants
const navVariants = {
  hidden: {
    opacity: 1,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.3,
      // staggerChildren: 0.05, // Stagger each li by 0.2 seconds
    },
  },
};

const liVariants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export function MobileMenu() {
  return (
    <>
      <motion.div
        initial={{ x: "5%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "5%", opacity: 0 }}
        transition={{ type: "tween", duration: 0.2 }}
        className={`absolute left-0 top-0 z-10 h-screen w-screen overflow-x-hidden bg-blueBlack pt-[65px]`} // Added pt-[65px] to push content below the bar
      >
        <motion.nav
          initial="hidden"
          animate="show"
          variants={navVariants}
          className={`flex flex-col gap-4 py-6 pr-5 text-right text-2xl text-almostWhite`}
        >
          <ul className={`flex flex-col items-end`}>
            {NavbarItems.slice(0, 4).map((item) => {
              return (
                <motion.li
                  key={item.name}
                  variants={liVariants}
                  className={`mb-3 list-none px-2 py-1 transition-colors hover:bg-white/10`}
                >
                  <Link href={item.url}>{item.name}</Link>
                </motion.li>
              );
            })}
            <motion.li
              className={`my-2 h-[1px] w-1/2 border-none bg-white/40 sm:w-1/4`}
              variants={liVariants}
            ></motion.li>

            {NavbarItems.slice(4).map((item) => {
              return (
                <motion.li
                  key={item.name}
                  variants={liVariants}
                  className={`mb-3 list-none px-2 py-1 transition-colors hover:bg-white/10`}
                >
                  <Link href={item.url}>{item.name}</Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>
      </motion.div>
    </>
  );
}
