//Hooks & Plugins
import Link from "next/link";
import { motion } from "framer-motion";

//Components
import { NavbarItems } from "@/app/components/NavbarItems";
import { DropDownButton } from "@/app/components/DropDownButton";

// Define animation variants
const navVariants = {
  hidden: {
    opacity: 1,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1, // Stagger each li by 0.2 seconds
    },
  },
};

const liVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export function MobileMenu() {
  return (
    <motion.div
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "20%", opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className={`absolute left-0 top-0 z-10 h-screen w-screen overflow-x-hidden bg-blueBlack`}
    >
      <motion.nav
        initial="hidden"
        animate="show"
        variants={navVariants}
        className={`absolute bottom-40 right-0 flex flex-col gap-4 py-6 pr-5 text-right text-2xl text-almostWhite`}
      >
        <ul className={`flex flex-col items-end`}>
          <motion.li
            variants={liVariants}
            className={`mb-2 list-none rounded px-2 py-1 transition-colors hover:bg-white/10`}
          >
            <Link href={"/gallery-menu"}>Gallery</Link>
          </motion.li>
          <motion.li
            variants={liVariants}
            className={`mb-2 list-none rounded px-2 py-1 transition-colors hover:bg-white/10`}
          >
            <Link href={"/equipment"}>Equipment</Link>
          </motion.li>
          <motion.li
            variants={liVariants}
            className={`mb-2 list-none rounded px-2 py-1 transition-colors hover:bg-white/10`}
          >
            <Link href={"/equipment"}>Locations</Link>
          </motion.li>

          <div className={`my-2 h-[1px] w-full bg-white/40`}></div>
          {NavbarItems.slice(1).map((item) => {
            return (
              <motion.li
                key={item.name}
                variants={liVariants}
                className={`mb-3 list-none rounded px-2 py-1 transition-colors hover:bg-white/10`}
              >
                <Link href={item.url}>{item.name}</Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </motion.div>
  );
}
