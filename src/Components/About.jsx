import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import Wave from "../img/wave.gif";
const About = () => {
  return (
    <>
      <div className="mt-20 mx-auto">
        <div className="text-black dark:text-white text-2xl flex w-full justify-center items-center">
          <img className="w-8" src={Wave} alt="👋" />
          <span className="text-gray-600 dark:text-gray-100">Hey</span>
        </div>
        <p className="text-sm sm:text-base dark:text-white md:text-xl text-center text-gray-600 leading-relaxed mt-4 sm:mt-8">
          {"👨‍💻 "}I'm a Front-end Web Developer.
        </p>
        <p className="text-sm sm:text-base dark:text-white md:text-xl text-center text-gray-600 leading-relaxed flex items-center">
          <span className="text-blue-500 text-3xl">
            <BiCodeAlt />
          </span>{" "}
          I'm also a competitive programmer
        </p>
        <p className="text-sm sm:text-base dark:text-white md:text-xl text-center text-gray-600 leading-relaxed">
          {"🚀 "}I also love to travel.
        </p>
      </div>
      <ScrollIntoView selector="#education">
        <div className="py-20 sm:py-40">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 mt-5" />
        </div>
      </ScrollIntoView>
    </>
  );
};

export default About;
