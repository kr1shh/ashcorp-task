'use client';

const HeroCarousel = () => {
  return (
    <>
      <main className="relative w-full flex flex-col items-center justify-center h-screen">
        <div className="text-white z-10 w-full flex flex-col items-center justify-center">
          <p className="flex items-center justify-center gap-3 text-center font-poppins font-[500] lg:text-[16px]">
            <span className="inline-block w-[25px] h-[3.5px] bg-white rounded-full lg:h-[2px]"></span>
            WELCOME TO
            <span className="inline-block w-[25px] h-[3.5px] bg-white rounded-full lg:h-[2px]"></span>
          </p>
          <h1 className="text-center font-allenoire text-[20px] w-[90%] sm:text-[30px] sm:px-14 lg:text-[58px] lg:max-w-[1100px]">
            Bharath Lajhna Multistate Housing Co-operative Society Ltd
          </h1>
        </div>

        <div className="absolute w-full h-full bg-[url('/assets/images/hero-bg.jpeg')] bg-no-repeat bg-cover bg-center">
          <div className="w-full h-full bg-black opacity-[.15]"></div>
        </div>
      </main>
    </>
  );
};

export default HeroCarousel;
