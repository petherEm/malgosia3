import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <Container className="relative bg-[#EFEBE7]">
        <Navbar
          banner={
            <div className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-0.5 text-sm/6 font-medium data-[hover]:bg-gray-100">
              Open for work
            </div>
          }
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-1 md:px-4 sm:px-8 pb-16 pt-10 sm:pb-24 sm:pt-20 md:pb-48 md:pt-32 gap-y-12 md:gap-y-0">
          {/* Text on the left for desktop, image on top for mobile */}
          <div className="order-2 md:order-1 text-center md:text-left flex flex-col justify-center">
            <h1 className="max-w-lg mx-auto md:mx-0 text-balance text-[28px] font-bold sm:text-[24px] md:text-[34px]">
              Automotive industry executive with 20+ years of proven success in
              growing international markets
            </h1>
            <p className="font-secondary mt-8 max-w-lg mx-auto md:mx-0 text-[15px] font-normal sm:text-[15px]">
              Automotive Industry Leader with 20+ Years of Proven Success in
              International Markets. Results-oriented professional with an
              extensive track record of driving business growth, cultivating
              strategic partnerships, and increasing revenue through effective
              business development and sales channel optimization.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row justify-center md:justify-start">
              <Button
                variant="secondary"
                className="bg-[#D3C7BD] text-[11px] uppercase font-secondary tracking-extra-wide"
                href="/cv/my_cv.pdf"
                download="CV_Malgorzata_Szynkarczuk.pdf"
                target="_blank"
              >
                Download Resume
              </Button>
              <Button
                variant="secondary"
                href="#about"
                className="border-[#D3C7BD] bg-transparent uppercase text-[11px] text-primary font-secondary tracking-extra-wide"
              >
                Read more
              </Button>
            </div>
          </div>

          {/* Image on the right for desktop, on top for mobile */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <Image
              src="/profile.png"
              width={300}
              height={300}
              alt="Profile"
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
