//Hooks & Plugins
import Link from "next/link";
import { motion, stagger } from "framer-motion";

//Components
import { NavbarItems } from "@/app/components/NavbarItems";

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

export function MobileMenu({ isMobileMenuOpen }) {
  return (
    <motion.div
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "20%", opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      className={`absolute left-0 top-0 z-10 h-screen w-screen bg-blueBlack`}
    >
      <motion.nav
        initial="hidden"
        animate="show"
        variants={navVariants}
        className={`absolute bottom-10 right-0 flex flex-col gap-4 p-6 text-right text-2xl text-almostWhite`}
      >
        <ul>
          <motion.li
            variants={liVariants}
            className={`mb-2 mt-4 list-none text-3xl font-semibold`}
          >
            <Link href={"/gallery"}>Gallery</Link>
          </motion.li>
          {NavbarItems.map((item) => {
            return (
              <motion.li
                key={item.name}
                variants={liVariants}
                className={`list-none`}
              >
                <Link href={item.url}>{item.name}</Link>
              </motion.li>
            );
          })}
          <motion.li
            variants={liVariants}
            className={`mb-2 mt-4 list-none text-3xl font-semibold`}
          >
            <Link href={"/equipment"}>Equipment</Link>
          </motion.li>
        </ul>
      </motion.nav>
    </motion.div>
  );
}
