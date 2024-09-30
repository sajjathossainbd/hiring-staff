import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

function DarkLightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="swap swap-rotate  flex items-center">
      <input
        type="checkbox"
        onChange={handleDarkModeToggle}
        checked={isDarkMode}
        className="hidden"
      />
      {isDarkMode ? (
        <IoSunnyOutline className="size-9 text-white" />
      ) : (
        <FaRegMoon className="text-white size-7" />
      )}
    </label>
  );
}

export default DarkLightMode;
