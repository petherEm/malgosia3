import { Container } from "@/components/Container";
import Image from "next/image";

// Helper function to render picture items
function Picture({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: string;
}) {
  return (
    <li className="flex items-center gap-4">
      <Image
        alt=""
        src={img}
        className="size-12 rounded-full"
        width={50}
        height={50}
      />
      <div className="text-[14px]">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  );
}

const Education = () => {
  return (
    <Container className="relative bg-white">
      <div className="max-w-6xl mx-auto px-1 md:px-4 sm:px-8">
        <div className="pb-16 pt-10  flex flex-col gap-y-8">
          {/* TOP PART */}
          <div className="flex flex-col md:flex-row gap-x-8 items-center md:items-start text-center md:text-left w-full">
            <h1 className="w-full md:w-1/2 text-[28px] md:text-[34px] font-bold leading-tight">
              Comprehensive Academic Foundation in Business Administration and
              International Finance.
            </h1>

            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <h1 className="tracking-wide font-bold text-[20px]">EDUCATION</h1>
              <p className="font-secondary mt-8 max-w-lg text-[15px] font-normal">
                Master of Business Administration from University of Denver and
                Warsaw University of Management & Law, complemented by a MSc in
                Business Administration and MSc in International Finance from
                Warsaw School of Economics (SGH).
              </p>
              <p className="font-secondary mt-8 max-w-lg text-[15px] font-normal">
                My proven ability to optimize operations, foster growth, and
                deliver measurable results ensures consistent business
                performance and market competitiveness.
              </p>
            </div>
          </div>

          {/* BOTTOM PART */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full">
            {/* ACADEMIA SECTION */}
            <div className="space-y-12">
              <div>
                <h2 className="font-bold text-[18px]">ACADEMIA</h2>
                <div>
                  <ul
                    role="list"
                    className="mx-auto mt-8 grid grid-cols-1 gap-8"
                  >
                    <Picture
                      name="Master of Business Administration"
                      description="University of Denver & University of Management and Law in Warsaw"
                      img="/UOD.jpeg"
                    />
                    <Picture
                      name="Master Degree in Business Management"
                      description="University of Denver & University of Management and Law in Warsaw"
                      img="/UOD.jpeg"
                    />
                    <Picture
                      name="Master Degree in International Finance"
                      description="Warsaw School of Economics"
                      img="/SGH.png"
                    />
                  </ul>
                </div>
              </div>
            </div>

            {/* LANGUAGES SECTION */}
            <div className="space-y-12">
              <div>
                <h2 className="font-bold text-[18px]">LANGUAGES</h2>
                <div>
                  <ul
                    role="list"
                    className="mx-auto mt-8 grid grid-cols-2 gap-8"
                  >
                    <Picture
                      name="English"
                      description="C2/Proficient"
                      img="/UK.png"
                    />
                    <Picture
                      name="Italian"
                      description="B2/Upper Intermediate"
                      img="/IT.png"
                    />
                    <Picture
                      name="Russian"
                      description="B1/Intermediate"
                      img="/RU.png"
                    />
                    <Picture name="Polish" description="Native" img="/PL.png" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Education;
