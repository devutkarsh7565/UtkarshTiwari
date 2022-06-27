import { useDarkMode } from "../Hooks/useDarkMode";
import { FaRegLightbulb } from "react-icons/fa";

// import { useEffect } from "react";

const Nav = (props) => {
  const darkMode = useDarkMode();
  const handleChange = () => {
    darkMode.switchTheme();
  };
  // useEffect(() => {
  //   darkMode.isDarkMode = false;
  // }, []);
  return (
    <>
      <div className="fixed top-0 py-5 w-full flex justify-between ">
        <span onClick={handleChange} className="flex justify-start">
          {darkMode.isDarkMode === true ? (
            <FaRegLightbulb className="bg-white rounded-full shadow-lg cursor-pointer text-indigo-500 flex justify-center items-center p-2 w-10 h-10" />
          ) : (
            <FaRegLightbulb className="bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex justify-center items-center p-2 w-10 h-10" />
          )}
        </span>
        <span className="mr-14 mt-2 text-xl font-light">
          <a
            href="#"
            className="px-4 py-3 rounded-xl bg-blue-600 text-white dark:bg-white dark:text-blue-600 border-3 dark:border-gray-200 "
          >
            Resume
          </a>
        </span>
      </div>
    </>
  );
};

export default Nav;

// import useDarkMode from "../Hooks/useDarkMode";
// import { FaRegLightbulb } from "react-icons/fa";

// const Nav = () => {
//   const [colorTheme, setTheme] = useDarkMode();
//   return (
//     <>
//       <div className="fixed top-0 py-5 w-full">
//         <span
//           onClick={() => setTheme(colorTheme)}
//           className="flex justify-start"
//         >
//           {colorTheme === "light" ? (
//             <FaRegLightbulb className="bg-white rounded-full shadow-lg cursor-pointer text-indigo-500 flex justify-center items-center p-2 w-10 h-10" />
//           ) : (
//             <FaRegLightbulb className="bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex justify-center items-center p-2 w-10 h-10" />
//           )}
//         </span>
//       </div>
//     </>
//   );
// };

// export default Nav;
