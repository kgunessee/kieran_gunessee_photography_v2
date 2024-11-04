export function DropDownButton({
  title,
  onClickFunction = null,
  openCloseState = null,
  padding = "py-2 pl-4 pr-2",
}) {
  return (
    <button
      onClick={onClickFunction}
      className={`flex cursor-pointer items-center border-[1px] border-white/40 ${padding} text-almostWhite transition-colors hover:bg-white/10 active:bg-white/0`}
    >
      {title}
      <span
        className={`transition-transform ${
          openCloseState ? "rotate-0" : "-rotate-90"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#e8eaed"
          viewBox="0 -960 960 960"
        >
          <path d="M480-344L240-584l56-56 184 184 184-184 56 56-240 240z"></path>
        </svg>
      </span>
    </button>
  );
}
