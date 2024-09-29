export function ThemeButton({ handleIsDarkModeToggle, isDarkMode }) {
  return (
    <button
      onClick={handleIsDarkModeToggle}
      className={`relative grid h-7 w-8 place-items-center overflow-hidden text-white`}
    >
      <svg
        className={`absolute top-0 h-6 w-6 ${
          isDarkMode ? "animate-themeButtonSet" : "animate-themeButtonRise"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="rgb(253, 224, 71"
        viewBox="0 -960 960 960"
      >
        <path d="M480-28L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280zm0 140l100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100z"></path>
      </svg>
      <svg
        className={`absolute top-0 h-5 w-5 ${
          isDarkMode ? "animate-themeButtonRise" : "animate-themeButtonSet"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#e8eaed"
        viewBox="0 -960 960 960"
      >
        <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80z"></path>
      </svg>

      <div
        className={`absolute bottom-0 h-[2px] w-full rounded-full bg-white/50`}
      ></div>
    </button>
  );
}
