"use client";
import Circles from "../components/Utilities/Circles";
import Bulb from "../components/Utilities/Bulb";
import ServicesSlider from "../components/Slider/ServicesSlider";
const Work = () => {
  return (
    <div className="h-full max-w-screen bg-primary/30 overflow-y-auto py-36 flex items-center">
      <Circles />
      <div className="container mx-auto mt-[20px]">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 xl:mt-[140px] mt-[320px] mb-0">
            <h2 className="xl:text-4xl text-xl md:leading-[1.2] mb-2 -mt-4 font-italic xl:mt-8">
              My Services <span className="text-accent">Neons</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Business Transformation through Efficient and Effective MS Office
              Web Deployment
            </p>
          </div>
          {/* Slider */}
          <div className="w-full xl:max-w-[65%]">
            <ServicesSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
