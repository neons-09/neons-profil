import Link from "next/link";
import Sosials from "./Sosials";

const Header = () => {
  return (
    <header className="absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px] h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-8">
          <Link href="/" className="text-3xl font-bold ">
            Neons<span className="text-accent">Portofolio</span>
          </Link>
          <Sosials />
        </div>
      </div>
    </header>
  );
};

export default Header;
