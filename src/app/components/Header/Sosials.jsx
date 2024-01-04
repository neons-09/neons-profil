import {
  RiInstagramLine,
  RiGithubLine,
  RiFacebookBoxLine,
} from "react-icons/ri";

import Link from "next/link";

const Sosials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.instagram.com/ne0ns7?igsh=cms2dzQ2a3N6dDVi"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://github.com/neons-09"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>
    </div>
  );
};

export default Sosials;
