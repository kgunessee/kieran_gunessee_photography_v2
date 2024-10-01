//Hooks & PLugins
import Link from "next/link";

//Components
import { NavbarItems } from "@/app/components/NavbarItems";

export function DesktopNav() {
  return (
    <>
      <nav className={`flex gap-4 text-almostBlack dark:text-almostWhite`}>
        <Link href={"/gallery-menu"}>Gallery</Link>
        <Link href={"/equipment"}>Equipment</Link>
      </nav>
    </>
  );
}
