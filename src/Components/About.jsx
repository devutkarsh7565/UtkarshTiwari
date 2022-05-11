import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="mt-20 mx-auto">
        <p className="text-2xl text-black dark:text-white md:text-4xl font-bold text-center">
          Hey 👋
        </p>
        <p className="text-base text-black dark:text-white md:text-xl text-center text-gray-600 leading-relaxed mt-8">
          A paragraph is a series of related sentences developing a central
          idea, called the topic. Try to think about paragraphs in terms of
          thematic unity: a paragraph is a sentence
        </p>
      </div>
      <ScrollIntoView selector="#footer">
        <div className="p-40">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 mt-5" />
        </div>
      </ScrollIntoView>
      <div id="footer"></div>
    </>
  );
};

export default About;
