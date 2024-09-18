import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Container className="relative bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-1 md:px-4 sm:px-8">
        <div className="pb-16 pt-10 sm:pb-24 sm:pt-20 md:pb-48 md:pt-32 flex flex-col md:flex-row items-center md:items-start justify-between gap-y-12">
          {/* LEFT PART */}
          <div className="flex flex-col gap-y-8 md:max-w-[50%]">
            <h1 className="text-center md:text-left text-[28px] md:text-[34px] font-bold leading-tight">
              Helping automotive industry leaders generate revenue
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 items-center">
              <Image
                src="/iveco.png"
                width={80}
                height={80}
                alt="Iveco"
                className="object-contain w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
              />
              <Image
                src="/cnh.png"
                width={80}
                height={80}
                alt="CNH"
                className="object-contain w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
              />
              <Image
                src="/MB.png"
                width={80}
                height={80}
                alt="Mercedes-Benz"
                className="object-contain w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
              />
            </div>
          </div>

          {/* RIGHT PART */}
          <div className="md:max-w-[50%] text-center md:text-left">
            <h1 className="tracking-wide font-bold text-[18px]">ABOUT ME</h1>
            <p className="font-secondary mt-8 text-[15px]">
              With extensive experience in the automotive industry, I
              effectively apply strategic planning, financial expertise, and
              leadership capabilities to drive success in the commercial truck
              rental sector. My strengths in identifying growth opportunities,
              optimizing operations, and cultivating a high-performance culture
              make me an ideal candidate for the role of General Manager.
            </p>
            <p className="font-secondary mt-8 text-[15px]">
              My proven ability to optimize operations, foster growth, and
              deliver measurable results ensures consistent business performance
              and market competitiveness.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
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
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
