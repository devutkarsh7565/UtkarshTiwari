import Image from "../img/utkarsh2.jpg";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
const Abouts = () => {
  return (
    <>
      <div id="down" className="min-h-scren min-w-screen flex justify-center">
        <div className="w-screen">
          <div className=" flex flex-col justify-start items-center mt-10">
            {" "}
            <h1 className="text-6xl font-poppins my-10 pt-5 text-[#5924ed] dark:text-blue-400">
              About Me
            </h1>
            <div className="flex flex-wrap justify-center items-center max-w-6xl ">
              <div className="md:mr-10 mr-4 max-w-xs">
                <img
                  className="xl:w-[300px] xl:h-[610px] lg:w-[250px] lg:h-[500px] md:w-[230px] md:h-[460px] sm:w-[220px] sm:h-[440px] w-[160px] h-[320px]  object-cover rounded-2xl border-2 border-[#5924ed] shadow-[#5f5f5f] shadow-md"
                  src={Image}
                  alt="img"
                />
              </div>
              <div className="flex flex-col justify-start md:w-[450px] lg:w-[560px] xl:w-[640px] 2xl:w-[700px] sm:w-[380px] sm:mt-0 mt-12  ml-4 md:ml-8">
                <h1 className="text-xl text-[#5924ed] leading-3">
                  Hi ! I am Utkarsh
                </h1>
                <h2 className="text-3xl leading-1 mt-4 dark:text-slate-100">
                  Web Developer & Competative Programmer
                </h2>
                <p className="mt-5 text-md dark:text-slate-300 tracking-wide">
                  I grew up in Gorakhpur.I have done my high school and inter
                  from N E Railway Senior Secondary
                  school,Gorakhpur.presently,I'm pursuing B.Tech computer
                  science from rohilkhand university,Bareilly.Presently,i am in
                  second year.I made this website for you, dear reader. I invite
                  you to see my personal Portfolio.
                </p>
                <button className="px-4 py-3 mt-6 font-poppins rounded-3xl bg-[#5924ed] text-white w-40 text-xl font-medium leading-3 hover:text-[#5924ed] hover:bg-white hover:border-2 hover:border-[#5934ed] duration-500">
                  <a
                    href="https://drive.google.com/file/d/11IJtJOAZbT8OzAo1MK4YnIwX7r0QnK_m/view"
                    target="_blank"
                  >
                    RESUME
                  </a>
                </button>
              </div>
            </div>
            <ScrollIntoView selector="#education">
              <div className="py-6 sm:pt-6 lg:mt-0">
                <FaChevronDown className="animate-bounce mx-auto text-3xl dark:text-blue-500 text-[#5924ed] mt-5" />
              </div>
            </ScrollIntoView>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouts;
