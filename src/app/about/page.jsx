"use client";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiMicrosoftpowerpoint,
  SiMicrosoftexcel,
  SiMicrosoftword,
} from "react-icons/si";

import { useState } from "react";
import Circles from "../components/Utilities/Circles";
import Avatar from "../components/Utilities/Avatar";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          // <FaReact />,
          <SiNextdotjs />,
          <FaBootstrap />,
          <SiTailwindcss />,
        ],
      },
      {
        title: "Microsof Office",
        icons: [
          <SiMicrosoftpowerpoint />,
          <SiMicrosoftexcel />,
          <SiMicrosoftword />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Microsof Office - Smk Tritech Medan",
        stage: "2022 - 2023",
      },
      {
        title: "Web Developer - Otodidak",
        stage: "2021 - 2023",
      },
      // {
      //   title: "Front-End - Otodidak",
      //   stage: "2021 - 2023",
      // },
      {
        title: "Teknik Jaringan Komputer - Smk Tritech Medan",
        stage: "2021 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - OTodidak",
        stage: "2022",
      },
      {
        title: "Teknik Komputer Jaring - Smk Informaatika Medan",
        stage: "2021",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 overflow-y-auto py-32 text-center xl:text-left z-50 xl:ms-14">
      <Circles />
      {/* Avatar */}
      <div className="hidden xl:flex absolute -bottom-[180px] -left-[350px]">
        <Avatar />
      </div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6  mix-blend-color-dodge xl:mt-16 mb-2">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center -mb-2">
          <h2 className="xl:text-4xl text-xl md:leading-[1.2] mb-2 -mt-4 font-italic">
            <span className="text-accent">Neons</span> Profile as a <br />
            Front-End and Microsof Office Specialist
          </h2>
          <p className="max-w-[450px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0">
            Hello,my name is Muhammad Dava,my nickname is Neons.I am a
            vocational student at Medan Tritech Vocational School.I am majoring
            in TKJ (Computer Network Engineering).But I am interested in the
            world of programming/coding,I am learning coding autodidactically. I
            want to turn ideas into development Web.
          </p>
          {/* Countup */}
          <div className="hidden md:flex md:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1] leading-[1.2] mb-4 text-accent max-w-[100px]">
                  Years Of Experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={3} />+
                </div>
                <div className="text-xs uppercase tracking-[1] leading-[1.2] mb-4 text-accent max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={16} duration={4} />+
                </div>
                <div className="text-xs uppercase tracking-[1] leading-[1.2] mb-4 text-accent max-w-[100px]">
                  Age
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] xl:[200px] h-[400px]">
          <div className="flex gap-x-2 xl:gap-x-6 mx-auto xl:mx-0 mb-3">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* Title */}
                  <div className="font-light xl:mb-0">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* Icon */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white inline-block m-2 transition-transform transform hover:scale-110 hover:text-accent z-50">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
