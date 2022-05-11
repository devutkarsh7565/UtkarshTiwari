import useDarkMode from "../Hooks/useDarkMode";
import { FaRegLightbulb } from "react-icons/fa";

const Nav = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
      <div className="fixed top-0 py-5 w-full">
        <span
          onClick={() => setTheme(colorTheme)}
          className="flex justify-start"
        >
          {colorTheme === "light" ? (
            <FaRegLightbulb className="bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex justify-center items-center p-2 w-10 h-10" />
          ) : (
            <FaRegLightbulb className="bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex justify-center items-center p-2 w-10 h-10" />
          )}
        </span>
      </div>
    </>
  );
};

export default Nav;
