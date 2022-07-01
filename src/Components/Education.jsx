import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
const Education = () => {
  return (
    <div
      id="education"
      className="min-h-screen min-w-screen mx-auto text-center my-20 flex justify-center items-center"
    >
      <div>
        <div className="flex flex-col justify-between w-screen  py-0 md:py-12 mt-10">
          <p className="text-3xl text-[#5924ed] pt-4 pb-6 sm:text-6xl font-poppins dark:text-blue-400">
            Education
          </p>
          <div className="flex flex-wrap justify-center pt-10 ">
            <div className="flex flex-col w-56  p-10 m-6 bg-slate-200/50 shadow-2xl sm:w-96 sm:h-[370px]  rounded-xl lg:mr-20 dark:bg-[#DFF6FF]">
              <p className="mt-6 text-2xl sm:text-3xl font-poppins dark:text-blue-600 text-[#5924ed] text-center ">
                2020-PRESENT
              </p>
              <p className="mt-4 text-xl font-medium ">
                Bachelor of Technology in Computer Science and Information
                Technology
              </p>
              <p className="mt-3 font-normal text-gray-600 ">
                Mahatma Jyotiba Phule Rohilkhand University
              </p>
            </div>
            <div className="flex flex-col w-56  p-10 m-6 bg-slate-200/50 shadow-2xl sm:w-96 rounded-xl dark:bg-[#DFF6FF]">
              <p className="mt-6 text-2xl sm:text-3xl font-poppins dark:text-blue-600 text-[#5924ed]  ">
                2018-2020
              </p>
              <p className="mt-4 text-xl font-medium ">
                Percentage: 82.5 / 100
              </p>
              <p className="mt-3 font-normal text-gray-600 ">
                N.E Railway Senior Secondary School, Gorakhpur (CBSE)-12th
              </p>
            </div>
          </div>
        </div>

        <ScrollIntoView selector="#project">
          <div className="py-6 sm:py-28 mt-4 lg-mt-20">
            <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 mt-5" />
          </div>
        </ScrollIntoView>
      </div>
    </div>
  );
};

export default Education;
