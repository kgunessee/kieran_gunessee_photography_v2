export function HamburgerMenu({ isMobileMenuOpen, handleMobileMenuToggle }) {
  return (
    <button
      title={"Open menu"}
      aria-label={"Open menu"}
      onClick={handleMobileMenuToggle}
      className={`relative z-20`}
    >
      <span
        className={`mb-1 block h-0.5 w-8 bg-almostWhite transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
        }`}
      ></span>
      {/*<span*/}
      {/*  className={`my-0.5 block h-0.5 w-6 bg-almostWhite transition-all duration-300 ease-in-out ${*/}
      {/*    isMobileMenuOpen ? "opacity-0" : "opacity-100"*/}
      {/*  }`}*/}
      {/*></span>*/}
      <span
        className={`mt-1 block h-0.5 w-8 bg-almostWhite transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "-translate-y-[0.1rem] -rotate-45"
            : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
}
