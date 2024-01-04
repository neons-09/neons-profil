import Circles from "../components/Utilities/Circles";
import Bulb from "../components/Utilities/Bulb";
import WorkSlider from "../components/Slider/WorkSlider";

const Work = () => {
  return (
    <div className="bg-primary/30 py-8 sm:py-16 md:py-20 lg:py-24 xl:py-36 flex items-center mt-top">
      <Circles />
      <div className="container-fluid mx-auto mt-[20px]">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 xl:mt-[80px] mt-[80px]">
            <h2 className="xl:text-4xl text-xl md:leading-[1.2] mb-2 -mt-4 font-italic xl:mt-8">
              My Work <span className="text-accent">Neons</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Optimal Web Performance with MS Office Support for Better Data
              Management
            </p>
          </div>
          {/* Slider */}
          <div className="w-full xl:max-w-[65%] -ml-[40px] -mt-[63px]">
            <WorkSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
