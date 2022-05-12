import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
import Wave from "../img/wave.gif";
const About = () => {
  return (
    <>
      <div className="mt-20 mx-auto">
        <div className="text-black dark:text-white text-2xl flex w-full justify-center items-center">
          <img className="w-8" src={Wave} alt="👋" />
          <span className="text-gray-600 dark:text-blue-400">Hey</span>
        </div>
        <p className="text-base text-black dark:text-white md:text-xl text-center text-gray-600 leading-relaxed mt-8">
          I'm a Front-end Web Developer and I am a 2nd Year bTech Computer
          Science Student from Mahatma Jyotiba phule Rohilkhand
          University,Bareilly. Apart from coding ,some other activities that I
          love to do - Playing Games and Travelling
        </p>
      </div>
      <ScrollIntoView selector="#footer">
        <div className="py-20 sm:py-40">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 mt-5" />
        </div>
      </ScrollIntoView>
      <div id="footer"></div>
    </>
  );
};

export default About;
