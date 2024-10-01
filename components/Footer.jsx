import Image from "next/image";
import FancyButton from "./ui/FancyButton";
import Title from "./ui/Title";

const Footer = () => {
  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center py-4 bg-[#fefefe] pt-[70px] pb-[80px] mt-10">

        <div className="absolute top-0 right-0 w-[100px] h-[100px]">
          <Image
            src={"/assets/icons/pattern-footer.svg"}
            alt="footer pattern"
            fill
            className="object-contain w-full object-center"
          />
        </div>

        <div className="absolute top-0 left-0 w-[100px] h-[100px]">
          <Image
            src={"/assets/icons/pattern-footer.svg"}
            alt="footer pattern"
            fill
            className="object-contain w-full object-center scale-x-[-1]"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-10 z-10">
          <div className="w-[280px]">
            <Title className={"text-center"}>
              We are available in multiple states
            </Title>
          </div>
          <div className="flex gap-3">
            <FancyButton name={"KERALA"} />
            <FancyButton name={"TAMIL NADU"} />
            <FancyButton name={"PONDICHERRY"} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-7 mt-10 font-poppins px-8">
          <div>
            <h1 className="text-[10px] sm:text-[12px] text-black opacity-50 mb-2">
              HOUSING PROJECT
            </h1>
            <ul className="text-[12px] sm:text-[14px] flex flex-col gap-2">
              <li>On Going</li>
              <li>Completed</li>
              <li>Up Coming</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[10px] sm:text-[12px] text-black opacity-50 mb-2">
              SERVICES
            </h1>
            <ul className="text-[12px] sm:text-[14px] flex flex-col gap-2">
              <li>Land Development</li>
              <li>Housing Development</li>
              <li>BLM Transport</li>
              <li>Civil Supplies</li>
              <li>BLM Jewellery</li>
            </ul>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <h1 className="text-[10px] sm:text-[12px] text-black opacity-50 mb-2">
                CONTACT US
              </h1>
              <ul className="text-[12px] sm:text-[14px] flex flex-col gap-2">
                <li className="flex">
                  Phone :{" "}
                  <p className="flex flex-col">
                    <span>+44- 2479 2445</span>
                    <span>+44- 2479 2445</span>{" "}
                  </p>
                </li>
                <li>Mobile : 9597 775 333</li>
                <li>email : info@blmshcs.net</li>
                <li className="flex flex-col"><span className="text-accent_color">Toll Free Number</span><span>18003095005</span></li>
              </ul>
            </div>
            <div>
              <div className="relative w-[120px] h-[120px]">
                <Image
                  src={"/assets/images/footer-logo.png"}
                  alt="footer logo"
                  fill
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <span className="absolute bottom-5 left-5 font-poppins text-black opacity-40 text-[12px]">© 2023 — Copyright</span>
      </div>
    </>
  );
};

export default Footer;
