import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

function DarkLightMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get the initial value from localStorage, or default to false
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode === "true"; // Convert string to boolean
  });

  useEffect(() => {
    // Update the class on the document based on the isDarkMode state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the current mode to localStorage whenever it changes
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="swap swap-rotate flex items-center">
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
