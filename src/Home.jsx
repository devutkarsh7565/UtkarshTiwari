import Card from "./Components/Card";
import About from "./Components/About";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  return (
    <>
      {" "}
      <div
        id="home"
        className="min-h-screen flex flex-col justify-start items-center"
      >
        <div data-aos="fade-down" data-aos-duration="800">
          <Card />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;
