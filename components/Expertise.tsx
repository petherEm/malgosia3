import { Container } from "@/components/Container";

const Expertise = () => {
  return (
    <Container className="relative bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-1 md:px-4 sm:px-8">
        <div className="pb-16 pt-10 sm:pb-24 sm:pt-20 md:pb-48 md:pt-32 flex flex-col gap-y-8">
          {/* TOP PART */}
          <div className="flex flex-col md:flex-row gap-x-8 items-center md:items-start text-center md:text-left w-full">
            <h1 className="w-full md:w-1/2 text-[28px] md:text-[34px] font-bold leading-tight">
              Driving growth and operational excellence through strategic
              leadership
            </h1>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <h1 className="tracking-wide font-bold text-[20px]">EXPERTISE</h1>
              <p className="font-secondary mt-8 max-w-lg text-[15px] font-normal sm:text-[15px]">
                With over 20 years of experience in the automotive industry, I
                have honed a diverse skill set that spans financial management,
                strategic planning, and operational leadership. Below are key
                areas of expertise that have consistently contributed to my
                professional achievements.
              </p>
              <p className="font-secondary mt-8 max-w-lg text-[15px] font-normal sm:text-[15px]">
                My proven ability to optimize operations, foster growth, and
                deliver measurable results ensures consistent business
                performance and market competitiveness.
              </p>
            </div>
          </div>

          {/* BOTTOM PART */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full">
            <div className="space-y-12">
              <div>
                <h2 className="font-bold text-[18px]">
                  Business Operations & Financial Management
                </h2>
                <p className="font-secondary mt-4 text-[15px] font-normal sm:text-[15px]">
                  With extensive experience in the automotive industry, I
                  effectively apply strategic planning, financial expertise, and
                  leadership capabilities to drive success in the commercial
                  truck rental sector. My strengths in identifying growth
                  opportunities, optimizing operations, and cultivating a
                  high-performance culture make me an ideal candidate for the
                  role of General Manager.
                </p>
              </div>
              <div>
                <h2 className="font-bold text-[18px]">
                  Strategic Planning & Project Management
                </h2>
                <p className="font-secondary mt-4 text-[15px] font-normal sm:text-[15px]">
                  Demonstrated success in strategic sales planning, brand
                  positioning, and alliance-building to secure multimillion-euro
                  contracts and partnerships.
                </p>
              </div>
              <div>
                <h2 className="font-bold text-[18px]">
                  Risk Analysis & Mitigation
                </h2>
                <p className="font-secondary mt-4 text-[15px] font-normal sm:text-[15px]">
                  Proven expertise in identifying, assessing, and mitigating
                  financial and operational risks, with a focus on expenditure
                  control and sustainability.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="font-bold text-[18px]">
                  Leadership & Team Building
                </h2>
                <p className="font-secondary mt-4 text-[15px] font-normal sm:text-[15px]">
                  Effective and motivational leader with a collaborative
                  approach, consistently driving teams to surpass performance
                  goals.
                </p>
              </div>
              <div>
                <h2 className="font-bold text-[18px]">
                  Automotive Distribution & Sales Channels
                </h2>
                <p className="font-secondary mt-4 text-[15px] font-normal sm:text-[15px]">
                  Skilled in managing end-to-end automotive distribution models,
                  including sales network development, customer financing, and
                  channel optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Expertise;
