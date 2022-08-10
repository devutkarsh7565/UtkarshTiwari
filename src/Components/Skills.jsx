import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
const Skills = () => {
  return (
    <>
      <div id="skills" className="max-w-4xl mb-12 mx-auto text-center ">
        <p className="text-2xl text-[#5924ed] font-poppins dark:text-blue-400 pt-6 sm:text-6xl ">
          Tech Stacks/Skills
        </p>
        <div className="flex flex-wrap justify-center items-start mt-6 pt-4">
          <div className="flex flex-col w-48 p-10 m-6 bg-slate-100 font-poppins shadow-2xl sm:w-56 rounded-xl dark:bg-[#DFF6FF] ">
            <FaHtml5 className="mx-auto text-4xl text-red-500" />
            <p className="mt-6 text-xl sm:text-2xl font-poppins text-center ">
              HTML
            </p>
          </div>
          <div className="flex flex-col w-48 p-10 m-6 bg-slate-100 font-poppins shadow-2xl sm:w-56 rounded-xl dark:bg-[#DFF6FF]">
            <FaCss3Alt className="mx-auto text-4xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-poppins text-center ">
              CSS
            </p>
          </div>
          <div className="flex flex-col w-48 p-10 m-6 bg-slate-100 font-poppins shadow-2xl sm:w-56 rounded-xl dark:bg-[#DFF6FF]">
            <SiJavascript className="mx-auto text-4xl text-yellow-500" />
            <p className="mt-6 text-xl sm:text-2xl font-poppins text-center ">
              JavaScript
            </p>
          </div>
          <div className="flex flex-col w-48 p-10 m-6 bg-slate-100 font-poppins shadow-2xl sm:w-56 rounded-xl dark:bg-[#DFF6FF]">
            <FaReact className="mx-auto text-4xl text-[#064663]" />
            <p className="mt-6 text-xl sm:text-2xl font-poppins text-center ">
              React Js
            </p>
          </div>
          <div className="flex flex-col w-48 px-10 py-6 m-6 bg-slate-100 font-poppins shadow-2xl sm:w-56 rounded-xl dark:bg-[#DFF6FF]">
            <SiTailwindcss className="mx-auto text-4xl text-cyan-400" />
            <p className="mt-6 text-xl sm:text-2xl font-poppins text-center ">
              Tailwind Css
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
