import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="py-3 border-t-3/2">
        <div className="flex justify-center mt-4">
          <Link
            className="m-1 p-1 text-xl  sm:m-2 sm:p-2 hover:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black rounded-full hover:text-white transition-colors duration-300"
            to="/https://github.com/devutkarsh7565"
          >
            <FaGithub />
            <span class="sr-only">Github</span>
          </Link>
          <Link
            className="m-1 p-1 text-xl sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            to="/"
          >
            <FaLinkedinIn />
            <span class="sr-only">Github</span>
          </Link>
          <Link
            className="m-1 p-1 text-xl sm:m-2 sm:p-2 text-pink-500 hover:bg-pink-500 rounded-full hover:text-white transition-colors duration-300"
            to="/"
          >
            <FaInstagram />
            <span class="sr-only">Github</span>
          </Link>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-black dark:text-blue-100 mb-4">
            Made with <span className="mr-2">💙</span> by{" "}
            <Link
              className="text-blue-500"
              to="https://github.com/devutkarsh7565"
            >
              Utkarsh Tiwari
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
