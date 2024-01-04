import Avatar from "./components/Utilities/Avatar";
// import ParticlesContainer from "./components/Utilities/ParticlesContainer";
import ProjectBtn from "./components/Utilities/ProjectBtn";

const page = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Text */}
      <div className="w-full h-full bg-gradient-to-r from-primary via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Title */}
          <h3 className="font-italic mt-2">Hai Every One!, I'm </h3>
          <h4 className="xl:text-4xl text-3xl md:leading-[0.7] mb-2 font-semibold">
            <span className="text-accent">
              Muhammad Dava / <span className="text-white">Neons</span>
            </span>
          </h4>
          {/* Subtitle */}
          <p className="p max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-6">
            Embarking on a digital journey, my portfolio showcases a symphony of
            web development expertise.each project is a testament to my
            commitment to crafting seamless online experiences. Dive into a
            world where code breathes life into creativity.
          </p>
          {/* button */}
          <div className="flex flex-col justify-center relative">
            <ProjectBtn />
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* Bg-img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover-right xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* Partikel */}
        {/* <ParticlesContainer /> */}
        {/* <div>Particles</div> */}
        {/* Avatarimg */}
        <div className="w-full h-full max-w-[637px] max-h-[578px] absolute -bottom-32 lg:bottom-0 lg:right-[0%]">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default page;
