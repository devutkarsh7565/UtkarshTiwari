import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
import app from "../img/app.png";
import projectMini from "../img/projectMini.png";
const Project = () => {
  return (
    <>
      {" "}
      <div
        id="project"
        className="min-h-screen min-w-screen flex justify-center"
      >
        <div className="w-screen">
          <div className=" flex flex-col justify-start items-center mt-4 ">
            {" "}
            <h1 className="text-6xl font-poppins my-20 pt-5  text-[#5924ed] dark:text-blue-400">
              Project
            </h1>
            <div className="flex flex-wrap justify-center items-center max-w-screen  ">
              <div className="relative md:mr-10 mr-4 xl:w-[612px] xl:h-[380px] lg:w-[580px] lg:h-[350px] sm:w-[450px] sm:h-[340px] w-[320px] h-[260px]">
                <img
                  className="w-full border-2 border-[#5924ed] rounded-xl drop-shadow-xl"
                  src={app}
                  alt="app"
                />
                <div className="w-[200px] sm:h-[380px] h-[320px] absolute top-8 right-[-30px]">
                  <img
                    className="h-full border-2 border-[#5924ed] rounded-xl drop-shadow-xl"
                    src={projectMini}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start md:w-[450px] lg:w-[460px] xl:w-[480px] 2xl:w-[520px] sm:w-[380px] sm:mt-0 mt-12  ml-4 md:ml-8">
                <h1 className="text-xl text-[#5924ed] leading-3">REACT APP</h1>
                <h2 className="text-3xl leading-1 mt-4 dark:text-slate-100">
                  Moviehut
                </h2>
                <p className="mt-5 text-md dark:text-slate-300 tracking-wide">
                  A place help you to search and save your Favourite Movies
                </p>
                <div className="flex justify-start">
                  <button className="px-4 py-3 mt-6 font-poppins rounded-3xl bg-[#5924ed] text-white w-40 text-xl font-medium leading-3 hover:text-[#5924ed] hover:bg-white hover:border-2 hover:border-[#5934ed] duration-500 mr-4">
                    <a
                      href="https://moviehut-gamma.vercel.app/"
                      target="_blank"
                    >
                      Website
                    </a>
                  </button>
                  <button className="px-4 py-3 mt-6 font-poppins rounded-3xl bg-[#5924ed] text-white w-40 text-xl font-medium leading-3 hover:text-[#5924ed] hover:bg-white hover:border-2 hover:border-[#5934ed] duration-500">
                    <a
                      href=" https://github.com/devutkarsh7565/MovieHut"
                      target="_blank"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <ScrollIntoView selector="#skills">
              <div className="py-6 mt-24 ">
                <FaChevronDown className="animate-bounce mx-auto text-3xl dark:text-blue-500 text-[#5924ed] mt-10" />
              </div>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
