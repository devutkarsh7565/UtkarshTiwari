import { useDarkMode } from "../Hooks/useDarkMode";
import { FaRegLightbulb } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useState } from "react";

// import { useEffect } from "react";

const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const darkMode = useDarkMode();
  const handleChange = () => {
    darkMode.switchTheme();
  };
  // useEffect(() => {
  //   darkMode.isDarkMode = false;
  // }, []);
  return (
    <>
      <nav className="sticky top-0 z-10 bg-[#efebfa] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 dark:bg-[#041C32] dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span onClick={handleChange} className="flex justify-start">
                {darkMode.isDarkMode === true ? (
                  <FaRegLightbulb className="bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex justify-center items-center p-2 w-10 h-10" />
                ) : (
                  <FaRegLightbulb className="bg-white rounded-full shadow-lg cursor-pointer text-indigo-500 flex justify-center items-center p-2 w-10 h-10" />
                )}
              </span>

              <div className="hidden md:block">
                <div className="ml-20 flex items-baseline space-x-4 ">
                  <ScrollIntoView selector="#home">
                    <div className="md:ml-10 text-xl text-[#5924ed] font-medium hover:px-3 hover:py-2 hover:bg-[#5924ed] hover:text-white  rounded-2xl duration-500 ">
                      <h1>Home</h1>
                    </div>
                  </ScrollIntoView>
                  <ScrollIntoView selector="#down">
                    <div className="md:ml-10 text-xl text-[#5924ed] font-medium hover:px-3 hover:py-2 hover:bg-[#5924ed] hover:text-white rounded-2xl duration-500 ">
                      <h1>About</h1>
                    </div>
                  </ScrollIntoView>
                  <ScrollIntoView selector="#education">
                    <div className="md:ml-10 text-xl text-[#5924ed] font-medium hover:px-3 hover:py-2 hover:bg-[#5924ed] hover:text-white   rounded-2xl duration-500 ">
                      <h1>Education</h1>
                    </div>
                  </ScrollIntoView>
                  <ScrollIntoView selector="#project">
                    <div className="md:ml-10 text-xl text-[#5924ed] font-medium hover:px-3 hover:py-2 hover:bg-[#5924ed] hover:text-white   rounded-2xl duration-500 ">
                      <h1>Project</h1>
                    </div>
                  </ScrollIntoView>
                  <ScrollIntoView selector="#skills">
                    <div className="md:ml-10 text-xl text-[#5924ed] font-medium hover:px-3 hover:py-2 hover:bg-[#5924ed] hover:text-white   rounded-2xl duration-500 ">
                      <h1>Skill</h1>
                    </div>
                  </ScrollIntoView>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <ScrollIntoView selector="#home">
                  <div className="dark:text-[#5924ed] hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium">
                    <h1>Home</h1>
                  </div>
                </ScrollIntoView>

                <ScrollIntoView selector="#down">
                  <div className="dark:text-[#5924ed] hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium">
                    <h1>About</h1>
                  </div>
                </ScrollIntoView>

                <ScrollIntoView selector="#education">
                  <div className="dark:text-[#5924ed] hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium ">
                    <h1>Education</h1>
                  </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#project">
                  <div className="dark:text-[#5924ed] hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium ">
                    <h1>Project</h1>
                  </div>
                </ScrollIntoView>
                <ScrollIntoView selector="#skills">
                  <div className="dark:text-[#5924ed] hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium ">
                    <h1>Skill</h1>
                  </div>
                </ScrollIntoView>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Nav;

// export default Nav;

// import { Link } from "react-router-dom";
// import { Transition } from "@headlessui/react";
// import { useState } from "react";

// const Nav = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <Link className="text-4xl mr-1 pt-2" to="/">
//                   <span className="text-[#FFA500]">Movie</span>hut
//                 </Link>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-20 flex items-baseline space-x-4 ">
//                   <Link
//                     className="md:ml-10 text-xl font-medium hover:px-3 hover:py-2 hover:bg-slate-300  rounded-2xl duration-500 "
//                     to="/"
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     className="md:ml-10 text-xl font-medium hover:px-3 hover:py-2 hover:bg-slate-300  rounded-2xl duration-500 "
//                     to="/popularMovies"
//                   >
//                     PopularMovies
//                   </Link>
//                   <Link
//                     className="md:ml-10 text-xl font-medium hover:px-3 hover:py-2 hover:bg-slate-300  rounded-2xl duration-500 "
//                     to="/Favourite"
//                   >
//                     Favourites
//                   </Link>
//                   <Link
//                     className="md:ml-10 text-xl font-medium hover:px-3 hover:py-2 hover:bg-slate-300  rounded-2xl duration-500 "
//                     to="/signup"
//                   >
//                     Signup
//                   </Link>
//                   <Link
//                     className="md:ml-10 text-xl font-medium hover:px-3 hover:py-2 hover:bg-slate-300  rounded-2xl duration-500 "
//                     to="/signup"
//                   >
//                     Logout
//                   </Link>
//                 </div>
//               </div>
//             </div>
// <div className="-mr-2 flex md:hidden">
//   <button
//     onClick={() => setIsOpen(!isOpen)}
//     type="button"
//     className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//     aria-controls="mobile-menu"
//     aria-expanded="false"
//   >
//     <span className="sr-only">Open main menu</span>
//     {!isOpen ? (
//       <svg
//         className="block h-6 w-6"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         aria-hidden="true"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M4 6h16M4 12h16M4 18h16"
//         />
//       </svg>
//     ) : (
//       <svg
//         className="block h-6 w-6"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         aria-hidden="true"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     )}
//   </button>
// </div>
//           </div>
//         </div>

// <Transition
//   show={isOpen}
//   enter="transition ease-out duration-100 transform"
//   enterFrom="opacity-0 scale-95"
//   enterTo="opacity-100 scale-100"
//   leave="transition ease-in duration-75 transform"
//   leaveFrom="opacity-100 scale-100"
//   leaveTo="opacity-0 scale-95"
// >
//   {(ref) => (
//     <div className="md:hidden" id="mobile-menu">
//       <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//         <Link
//           to="/"
//           className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium"
//         >
//           Home
//         </Link>

//         <Link
//           to="/popularMovies"
//           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//         >
//           Movies
//         </Link>

//         <Link
//           to="/favourite"
//           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//         >
//           Favourite
//         </Link>
//         <Link
//           to="/signup"
//           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//         >
//           Signup
//         </Link>
//         <Link
//           to="/signup"
//           onClick={props.logOut}
//           className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//         >
//           Logout
//         </Link>
//       </div>
//     </div>
//   )}
// </Transition>
//       </nav>

{
  /* <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 h-20 w-screen  flex justify-between  text-black  items-center  font-semibold  py-4 md:px-10 px-7 shadow-xl">
        <div className="font-bold text-2xl cursor-pointer flex  md:items-center ">
          <Link className="text-4xl mr-1 pt-2" to="/">
            <span className="text-[#FFA500]">Movie</span>hut
          </Link>
        </div>
        <div className="flex items-center ">
          <Link
            className="md:ml-8 text-xl font-medium hover:px-3 hover:py-2 hover:bg-slate-300  rounded-2xl duration-500"
            to="/"
          >
            Home
          </Link>
          <Link
            className="md:ml-8 text-xl font-medium hover:px-3 hover:py-2 hover:bg-slate-300  rounded-2xl duration-500"
            to="/popularMovies"
          >
            PopularMovies
          </Link>
          <Link
            className="md:ml-8 text-xl font-medium hover:px-3 hover:py-2 hover:bg-slate-300  rounded-2xl duration-500"
            to="/Favourite"
          >
            Favourites
          </Link>
        </div>
      </div> */
}

{
  /* <div className="flex  ">
        <div className="bg-[#1363DF] h-20 w-screen text-white flex justify-between font-semibold fixed z-50">
          <div className="flex  ml-10 pt-6">
            <Link className="text-4xl" to="/">
              <span className="text-[#ffcc00]">Movie</span>hut
            </Link>
          </div>
          <div className="flex justify-center text-2xl mt-6 mr-6">
            <Link className="md:mx-8 hover:text-[#ffcc00]" to="/home">
              Home
            </Link>
            <Link className="md:mx-8 hover:text-[#ffcc00]" to="/popularMovies">
              PopularMovies
            </Link>
            <Link className="md:mx-8 hover:text-[#ffcc00]" to="/Favourites">
              Favourites
            </Link>
            <Link classname=" md:mx-8 hover:text-[#ffcc00] " to="/signup">
              button
            </Link>
            <SearchBox
              className=""
              searchValue={props.searchValue}
              setSearchValue={props.setSearchValue}
            />
          </div>
        </div>
      </div> */
}
