import HeroCarousel from "@/components/HeroCarousel";
import NavBar from "@/components/NavBar";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import { RiArrowLeftSLine,RiArrowRightSLine } from "react-icons/ri";
import ServiceCarousel from "@/components/ServiceCarousel";
import ProjectCarousel from "@/components/ProjectCarousel";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionDivision from "@/components/ui/SectionDivision";
import NewsCarousel from "@/components/NewsCarousel";
import Footer from "@/components/Footer";


const Home = () => {

  const projectTitle = ["Kerala", "Tamil Nadu", "Pondicherry"]

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
              fill
              className="absolute top-0 left-0 object-cover"
            />
          </div>

          <div className="absolute top-0 right-0 w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] lg:w-[270px] lg:h-[270px]">
            <Image
              src={"/assets/icons/pattern.svg"}
              alt=" pattern "
              fill
              className="absolute top-0 left-0 scale-x-[-1] object-cover"
            />
          </div>
        </section>
      </main>

      {/* Why us section */}

      <main className="p-6 py-10 flex justify-center items-center">
        <section className="flex flex-col items-center justify-center gap-7 lg:max-w-[1400px]">
          <div className="flex flex-col justify-start items-start gap-3">
            <Title>why BLM</Title>
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

      {/* Chairman Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-7 w-full lg:max-w-[1400px]">
          <div className="sm:w-[50%] md:w-[50%]">
            <Title>Chairman Says</Title>
            <p className="font-poppins text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px]">
              It is my great pleasure to extend heartfelt greetings to one and
              all. I want to take this opportunity to thank all members, leaders
              and staff for contributing wholeheartedly to the progress of our
              Society. I would also like to thank our valued members for their
              continuous patronage. Our modest beginning in 2006 with our
              resilience and ability to embrace change with an open mind has
              enabled us to stay true to our mission of delivering the best
              services and products. We believe the success and growth of our
              Society can be attributed to the consistency of our standards and
              policies with the kind cooperation of our members.
              <span className="hidden sm:inline-block">
                Over the years, our commitment to professional ethics and
                quality has evolved into corporate standards and practices that
                we use as our benchmark for excellence. Our approach in
                providing the highest level of quality in all of our endeavors
                has delivered returns at every step of the development. We are
                proud of ourselves for being a trustworthy household name in
                South India
              </span>
            </p>
          </div>
          <div className=" relative w-full h-[200px] sm:w-[50%] md:w-[40%] sm:h-[500px]">
            <Image
              src={"/assets/images/chairman-img.png"}
              alt="chairman"
              fill
              className="w-full object-cover sm:object-top"
              style={{
                objectPosition: "50% 16%",
              }}
            />
          </div>
        </section>
      </main>

      {/* Chairman Section end */}

      <SectionDivision />

      {/* Service Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start sm:items-center justify-center gap-7 w-full lg:max-w-[1290px]">
          <div className="flex items-center justify-between">
            <div>
              <Title>Our Services</Title>
              <p className="font-poppins text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px] sm:w-[95%] lg:w[70%]">
                BLM Housing Cooperative Society is committed to providing
                quality housing services to our members. We strive to exceed our
                members&apos; expectations and provide an enjoyable and safe
                living experience
              </p>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>
          <ServiceCarousel />
        </section>
      </main>

      {/* Service Section end*/}

      <SectionDivision />

      {/* Our Projects Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <Title>Our Projects</Title>
          <div className="flex w-full justify-between">
            <div className="flex gap-6">
              <button className="text-[14px] sm:text-[20px] lg:text-[22px] font-poppins text-black border-b-[1px] border-accent_color">
                Kerala
              </button>
              <button className="text-[14px] sm:text-[20px] lg:text-[22px] font-poppins text-para_color">
                Tamil Nadu
              </button>
              <button className="text-[14px] sm:text-[20px] lg:text-[22px] font-poppins text-para_color">
                Pondicherry
              </button>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>
          <ProjectCarousel />
        </section>
      </main>

      {/* Projects Section end */}

      <SectionDivision />

      {/* Loan Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <div className="w-full flex flex-col gap-3">
            <div className="flex sm:flex-row flex-col gap-3 justify-start items-start">
              <div className="sm:w-[50%]">
                <Title>Property Loans</Title>
                <p className="text-[12px] sm:text-[14px] lg:text-[18px] font-poppins mt-3">
                  Now you can meet your property needs with BLM&apos;s property
                  loan. With our property loan, you may finally buy the property
                  of your dreams. Property loan is a mortgage loan provided by
                  BLM that offers a loan amount to buy a property. We offer
                  property loan to all of our members who meet the necessary
                  requirements in order to purchase the property of their
                  choice. So what are you waiting for? Become a BLM member and
                  fulfil your dream of buying a property.
                </p>
              </div>
              <div className="relative w-full h-[200px] sm:w-[50%] sm:h-[320px]">
                <Image
                  src="/assets/images/loan-img.jpeg"
                  alt=" pattern "
                  fill
                  className="object-cover w-full object-center"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <Link
                href={"/"}
                className="lg:text-[20px] flex items-center justify-center gap-2 text-accent_color font-poppins"
              >
                See more <BsArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Loan Section end */}

      <SectionDivision />

      {/* Testimonial Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <div className="flex items-center justify-between sm:w-full">
            <div>
              <Title>What They Say</Title>
              <p className="font-poppins text-start text-[12px] text-para_color sm:text-[14px] lg:text-[18px] sm:w-[95%] lg:w[70%]">
                Hear the powerful voices and personal stories that highlight the
                impact of the BLM movement.
              </p>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>
          <TestimonialCarousel />
        </section>
      </main>

      {/* Testimonial Section End*/}

      <SectionDivision />

      {/* News Section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <Title>News</Title>
          <div className="flex w-full justify-between">
            <div className="flex gap-6">
              <button className="text-[14px] sm:text-[20px] lg:text-[22px] font-poppins text-black border-b-[1px] border-accent_color">
                News & Events
              </button>
              <button className="text-[14px] sm:text-[20px] lg:text-[22px] font-poppins text-para_color">
                Awards & Rewards
              </button>
            </div>
            <div className="hidden sm:flex gap-3">
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-prev-button"
              >
                <RiArrowLeftSLine color="#CA943A" size={30} />
              </Button>
              <Button
                border="1px solid #CA943A"
                paddingX="10px"
                paddingY="10px"
                borderRadius="50px"
                className="custom-next-button"
              >
                <RiArrowRightSLine color="#CA943A" size={30} />
              </Button>
            </div>
          </div>

          <NewsCarousel />
        </section>
      </main>

      {/* News Section End*/}

      <SectionDivision />

      {/* Videos section */}

      <main className="w-full flex items-center justify-center p-6 py-10">
        <section className="flex flex-col items-start justify-center gap-7 w-full lg:max-w-[1290px]">
          <div>
            <Title>Videos</Title>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <div className="relative w-full h-[236px] sm:h-[372px] lg:h-[600px]">
              <Image
                src={"/assets/images/videos-img-1.png"}
                alt="video 1"
                fill
                className="object-cover w-full object-center"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-3">
              <div className="relative w-full h-[62px] sm:h-[140px] lg:h-[224px]">
                <Image
                  src={"/assets/images/videos-img-2.png"}
                  alt="video 1"
                  fill
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="relative w-full h-[62px] sm:h-[140px] lg:h-[224px]">
                <Image
                  src={"/assets/images/videos-img-3.png"}
                  alt="video 1"
                  fill
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="relative w-full h-[62px] sm:h-[140px] lg:h-[224px]">
                <Image
                  src={"/assets/images/videos-img-4.png"}
                  alt="video 1"
                  fill
                  className="object-cover w-full object-center"
                />
              </div>
              <div className="relative w-full h-[62px] sm:h-[140px] lg:h-[224px]">
                <Image
                  src={"/assets/images/videos-img-5.png"}
                  alt="video 1"
                  fill
                  className="object-cover w-full object-center"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start sm:justify-center w-full">
            <Button
              border="1px solid #D7D7D7"
              bgColor="#F7F7F7"
              textColor="#CA943A"
              paddingX="20px"
              paddingY="12px"
              className="flex items-center justify-center gap-2"
            >
              See more <BsArrowRight />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer Section */}

      
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
