import Image from "next/image";
import { GiMagnifyingGlass } from "react-icons/gi";

export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Web Portofolio",
          path: "/project.1.png",
        },
        {
          title: "API Anime",
          path: "/project.2.png",
        },
        {
          title: "Web Store",
          path: "/project.3.png",
        },
        {
          title: "Excel",
          path: "/project5.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div>
      {workSlides.slides.map((slide, index) => {
        return (
          <div key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* Image */}
                      <Image src={image.path} width={400} height={400} alt="" />
                      {/* Overflow */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#001B79] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* Title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-4 group-hover:xl:-translate-y-[34px] transition-all duration-300">
                        <div className="text-[13px] tracking-[0.2em]">
                          {/* Title Project */}
                          <div className="delay-100">Project</div>
                          {/* Title Project */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 text-accent text-semibold">
                            Me
                          </div>
                          {/* Icon */}
                          <div className="text-2xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <GiMagnifyingGlass />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default WorkSlider;
