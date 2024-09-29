import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./ui/Button";

const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 z-[100] flex items-center justify-between w-full px-3 py-4">
        <div className="w-14">
          <Image
            src={"/assets/images/nav-logo.png"}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center text-white gap-3 font-poppins font-light">
            <li>
              <Link href={"/home"}> Home </Link>
            </li>
            <li>
              <Link href={"/home"}> About </Link>
            </li>
            <li>
              <Link href={"/home"} className="flex justify-center items-center">
                {" "}
                Our Branches <FaChevronDown />
              </Link>
            </li>
            <li>
              <Link href={"/home"}> Service </Link>
            </li>
            <li>
              <Link href={"/home"}> Our Projects </Link>
            </li>
            <li>
              <Link href={"/home"} className="flex justify-center items-center">
                {" "}
                Gallery <FaChevronDown />{" "}
              </Link>
            </li>
            <li>
              <Link href={"/home"}> Loans </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <div className="hidden sm:block">
            <Button
              fontFamily="poppins"
              textColor="black"
              bgColor="white"
              borderRadius="50px"
              width="auto"
              height="auto"
              paddingX="25px"
              paddingY="10px"
            >
              Membership
            </Button>
          </div>
          <div className="block md:hidden">
            <Button
              flexDirection="column"
              gap="10"
              bgColor="white"
              width="40px"
              height="40px"
              borderRadius="50px"
            >
              <div className="w-[25px] h-[3px] bg-black rounded-full"></div>
              <div className="w-[25px] h-[3px] bg-black rounded-full mt-1"></div>
              <div className="w-[25px] h-[3px] bg-black rounded-full mt-1"></div>
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
