import React, { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex gap-2 text-white text-sm py-1 px-2 items-center"
    >
      {darkMode ? <FaRegMoon /> : <IoSunny />}
      {darkMode ? "" : ""}
    </button>
  );
};

export default ThemeToggle;
