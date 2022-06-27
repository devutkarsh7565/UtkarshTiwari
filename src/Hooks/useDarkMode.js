import { useState } from "react";
export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const switchTheme = () => {
    if (isDarkMode) {
      const root = document.documentElement;
      root.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };
  return { isDarkMode, switchTheme };
};

// export default function useDarkMode() {
//   const [theme, setTheme] = useState("light");
//   const colorTheme = theme === "dark" ? "light" : "dark";
//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove(colorTheme);
//     root.classList.add(theme);
//   }, [theme, colorTheme]);
//   return [colorTheme, setTheme];
// }
