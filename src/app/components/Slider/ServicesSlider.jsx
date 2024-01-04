// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

import {
  RxCrop,
  RxDesktop,
  // RxReader,
  RxRocket,
  // RxArrowTopRight,
  RxPencil2,
  RxArrowTop,
  RxArrowTopRight,
} from "react-icons/rx";

import { IoIosArrowRoundUp } from "react-icons/io";

// import { FreeMode, pagination } from "swiper";

export const servicesData = [
  {
    icon: <RxCrop />,
    title: "Graphic Design",
    description:
      "Desain visual menarik untuk merek Anda , Pembuatan logo dan identitas merek , Desain materi pemasaran dan promosi. ",
  },
  {
    icon: <RxPencil2 />,
    title: "Web Deployment",
    description:
      "Desain dan pengembangan situs web responsif , Pembuatan situs web yang sesuai dengan standar terkini , Optimalisasi kecepatan dan kinerja situs.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Optimasi mesin pencari untuk peringkat tinggi , Penelitian kata kunci dan pemetaan situs , Audit SEO dan strategi pemulihan.",
  },
  {
    icon: <RxDesktop />,
    title: "Microsof Office",
    description:
      "-Membuat Jasa Surat , Membuat Persentasi , Dan Membuat DataBase Di Excel",
  },
];

const ServicesSlider = () => {
  return (
    <div className="">
      <div className=" h-full flex flex-col">
        {servicesData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-2 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] mt-2"
            >
              <div className="">
                {/* Ico */}
                <div className="text-lg text-accent">{item.icon}</div>
                {/* Title & Desc */}
                <div className="">
                  <div className="">{item.title}</div>
                  <div className="">{item.description}</div>
                </div>
                <div>
                  <IoIosArrowRoundUp className="text-xl group-hover:rotate-180 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSlider;
