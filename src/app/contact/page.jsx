import { BsArrowRight } from "react-icons/bs";
import Bulb from "../components/Utilities/Bulb";

const page = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <Bulb />
        {/* text from */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-8">
            Let's <span className="text-accent">Connect.</span>
          </h2>
          <from className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="text" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea placeholder="Message" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[170px] group-hover:opacity-0 duration-500 transition-all">
                Let's Talk
              </span>
              <BsArrowRight className="-translate-y-[120px] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default page;
