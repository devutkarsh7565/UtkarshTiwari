import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="py-3 border-t-3/2">
        <h1 className="text-center text-3xl sm:text-4xl my-5 text-blue-600">
          CONNECT WITH ME
        </h1>
        <div className="flex justify-center mt-4">
          <a
            className="m-1 p-1 text-xl  sm:m-2 sm:p-2 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
            href="https://github.com/devutkarsh7565"
          >
            <FaGithub />
            <span class="sr-only">Github</span>
          </a>
          <a
            className="m-1 p-1 text-xl sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            href="https://www.linkedin.com/in/utkarsh-tiwari-190301203/"
          >
            <FaLinkedinIn />
            <span class="sr-only">Github</span>
          </a>
          <a
            className="m-1 p-1 text-xl sm:m-2 sm:p-2 text-pink-500 hover:bg-pink-500 rounded-full hover:text-white transition-colors duration-300"
            href="https://www.instagram.com/utkarsh3911/"
          >
            <FaInstagram />
            <span class="sr-only">Github</span>
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-black dark:text-blue-100 mb-4">
            Made with <span className="mr-2">💙</span> by{" "}
            <a
              className="text-blue-500"
              href="https://www.instagram.com/utkarsh3911/"
            >
              Utkarsh Tiwari
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
