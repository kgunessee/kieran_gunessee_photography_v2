export function ThemeButton({ handleIsDarkModeToggle, isDarkMode }) {
  return (
    <button
      title={"Toggle theme"}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      onClick={handleIsDarkModeToggle}
      className={`relative grid h-[26px] w-[55px] place-items-center gap-2 rounded-full bg-gray-200 text-white shadow-[inset_1px_1px_5px_rgba(0,0,0,0.2)]`}
    >
      <div className={`flex h-full w-full items-center justify-between px-0.5`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#5A5A5ACC"
          viewBox="0 -960 760 960"
        >
          <path d="M482.31-160q-133.34 0-226.67-93.33-93.33-93.34-93.33-226.67 0-121.54 79.23-210.77t196.15-105.38q3.23 0 6.35.23 3.11.23 6.11.69-20.23 28.23-32.03 62.81-11.81 34.57-11.81 72.42 0 106.67 74.66 181.33Q555.64-404 662.31-404q38.07 0 72.54-11.81 34.46-11.81 61.92-32.04.46 3 .69 6.12.23 3.11.23 6.35-15.38 116.92-104.61 196.15T482.31-160m0-40q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T366.31-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82m-10-270"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#5A5A5ACC"
          viewBox="0 -960 960 960"
        >
          <path d="M480-360q50 0 85-35t35-85-35-85-85-35-85 35-35 85 35 85 85 35m0 40q-66.85 0-113.42-46.58Q320-413.15 320-480t46.58-113.42Q413.15-640 480-640t113.42 46.58Q640-546.85 640-480t-46.58 113.42Q546.85-320 480-320M200-460H60v-40h140zm700 0H760v-40h140zM460-760v-140h40v140zm0 700v-140h40v140zM269.85-663.85l-86.39-83.92 27.77-29.77 84.46 85.39zm478.92 481.39-84.69-85.62 26.07-28.07 86.39 83.92zm-84.92-507.69 83.92-86.39 29.77 27.77-85.39 84.46zM182.46-211.23l85.62-84.69 26.54 26.07-83.16 87.16zM480-480"></path>
        </svg>
      </div>

      <div
        className={`absolute left-0 grid place-items-center transition ${isDarkMode ? "translate-x-0" : "translate-x-full"} h-[28px] w-[28px] rounded-full bg-almostWhite drop-shadow-[1px_1px_3px_rgba(0,0,0,0.4)]`}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#101010CC"
            viewBox="0 -960 960 960"
          >
            <path d="M482.31-160q-133.34 0-226.67-93.33-93.33-93.34-93.33-226.67 0-121.54 79.23-210.77t196.15-105.38q3.23 0 6.35.23 3.11.23 6.11.69-20.23 28.23-32.03 62.81-11.81 34.57-11.81 72.42 0 106.67 74.66 181.33Q555.64-404 662.31-404q38.07 0 72.54-11.81 34.46-11.81 61.92-32.04.46 3 .69 6.12.23 3.11.23 6.35-15.38 116.92-104.61 196.15T482.31-160"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#101010CC"
            viewBox="0 -960 960 960"
          >
            <path d="M480-320q-66.85 0-113.42-46.58Q320-413.15 320-480t46.58-113.42Q413.15-640 480-640t113.42 46.58Q640-546.85 640-480t-46.58 113.42Q546.85-320 480-320M200-460H60v-40h140zm700 0H760v-40h140zM460-760v-140h40v140zm0 700v-140h40v140zM269.85-663.85l-86.39-83.92 27.77-29.77 84.46 85.39zm478.92 481.39-84.69-85.62 26.07-28.07 86.39 83.92zm-84.92-507.69 83.92-86.39 29.77 27.77-85.39 84.46zM182.46-211.23l85.62-84.69 26.54 26.07-83.16 87.16z"></path>
          </svg>
        )}
      </div>
    </button>
  );
}
