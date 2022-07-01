import Nav from "./Components/Nav";
import Abouts from "./Components/Abouts";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import Project from "./Components/Project";
import { Route, Routes } from "react-router-dom";
const App = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  return (
    <>
      <div
        className="px-0
     min-h-screen  bg-[#efebfa] dark:bg-[#041C32]"
      >
        <Nav />

        <Home />
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
          {" "}
          <Abouts />
        </div>

        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
          <Education />
        </div>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
          <Project />
        </div>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
          <Skills />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default App;
