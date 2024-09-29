import HeroCarousel from "@/components/HeroCarousel";
import NavBar from "@/components/NavBar";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
import Title from "@/components/ui/Title";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroCarousel />

      {/* achievements section */}

      <section className="flex items-center justify-center w-full py-8 sm:py-24">
        <div className="flex flex-col items-center justify-center px-7 py-1 lg:px-32">
          <h1 className="text-[16px] text-center font-allenoire text-[#07A750] sm:text-[30px] lg:text-[55px]">
            <AnimatedCounter endValue={10} duration={1000} /> lack+
          </h1>
          <p className="text-[12px] text-center font-poppins font-[400] text-[#747474] sm:text-[18px] lg:text-[24px]">
            Members
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border-l-[1px] border-r-[1px] border-[#747474] px-7 py-1 lg:px-32">
          <h1 className="text-[16px] text-center font-allenoire text-[#07A750] sm:text-[30px] lg:text-[55px]">
            <AnimatedCounter endValue={3} duration={1000} />+
          </h1>
          <p className="text-[12px] text-center font-poppins font-[400] text-[#747474] sm:text-[18px] lg:text-[24px]">
            Stores
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-7 py-1 lg:px-32">
          <h1 className="text-[16px] text-center font-allenoire text-[#07A750] sm:text-[30px] lg:text-[55px]">
            <AnimatedCounter endValue={104} duration={1000} />+
          </h1>
          <p className="text-[12px] text-center font-poppins font-[400] text-[#747474] sm:text-[18px] lg:text-[24px]">
            Branches
          </p>
        </div>
      </section>

      {/* Welcome section */}

      <main className="bg-primary_color text-white w-full">
        <section className="relative w-full flex flex-col items-center justify-center p-7 py-32 sm:px-14 lg:py-52">
          <h1 className="font-allenoire text-[22px] sm:text-[38px] lg:text-[58px]">
            welcome to BLM
          </h1>
          <div>
            <Image
              src={"/assets/icons/underline-pattern.svg"}
              alt="text underline"
              width={100}
              height={100}
              className="mix-blend-soft-light"
            />
          </div>
          <p className="font-poppins text-center mt-[14px] text-[12px] font-[300] w-[320px] leading-5 sm:text-[19px] sm:leading-8 sm:w-[auto] lg:text-[22px] lg:leading-10 lg:max-w-[1100px]">
            We are a self-governing group of individuals who work together as
            members of a jointly owned business in South India to achieve our
            common social and cultural needs and objectives. Our primary goal is
            to raise the members of our BLM family by offering services, jobs,
            and other opportunities.
          </p>

          <div className="absolute top-0 left-0 w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] lg:w-[270px] lg:h-[270px]">
            <Image
              src={"/assets/icons/pattern.svg"}
              alt=" pattern "
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0"
            />
          </div>

          <div className="absolute top-0 right-0 w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] lg:w-[270px] lg:h-[270px]">
            <Image
              src={"/assets/icons/pattern.svg"}
              alt=" pattern "
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 scale-x-[-1]"
            />
          </div>
        </section>
      </main>

      {/* Why us section */}

      <main className="p-6 py-10 flex justify-center items-center">
        <section className="flex flex-col items-center justify-center gap-7 lg:max-w-[1400px]">
          <div className="flex flex-col justify-start items-start gap-3">
            <Title>
              why BLM
            </Title>
            <p className="font-poppins text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px]">
              We are a self-governing group of individuals who work together as
              members of a jointly owned business in South India to achieve our
              common social and cultural needs and objectives. Our primary goal
              is to raise the members of our BLM family by offering services,
              jobs, and other opportunities.
            </p>
          </div>
          <div className="flex gap-1 items-center justify-center w-full h-[140px] sm:h-[320px] lg:h-[520px]">
            <div className="w-[50%] h-full bg-[url('/assets/images/why-img-1.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="w-[30%] h-full bg-[url('/assets/images/why-img-2.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="w-[20%] h-full bg-[url('/assets/images/why-img-3.png')] bg-no-repeat bg-cover bg-center"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
