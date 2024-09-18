import { Container } from "@/components/Container";

const Career = () => {
  return (
    <Container className="relative bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-1 md:px-4 sm:px-8">
        <div className="pb-16 pt-10  flex flex-col gap-y-8">
          {/* TOP PART */}
          <div className="flex flex-col w-full">
            <h1 className="w-full text-[28px] md:text-[34px] font-bold leading-tight">
              Proven-track record of outstanding results. I have strong acumen
              in financial planning and analysis, business development, and
              sales channel optimization across international markets.
            </h1>
            {/* <div className="w-full  mt-8 md:mt-0">
              <p className="font-secondary mt-8 max-w-lg text-[15px] font-normal sm:text-[15px]">
                I have strong acumen in financial planning and analysis,
                business development, and sales channel optimization across
                international markets.
              </p>
            </div> */}
          </div>

          {/* BOTTOM PART */}
          <div className="mt-12 w-full">
            <div className="space-y-12">
              <div>
                <h2 className="font-bold text-[18px]">Career Path</h2>
              </div>
              {/* TABLE */}
              <div>
                <table className="mt-6 w-full text-left">
                  <colgroup>
                    <col className="w-[100%]" />
                  </colgroup>
                  <thead className="">
                    {/* <tr>
                  <th scope="col">Positions</th>
                </tr> */}
                  </thead>
                  <tbody>
                    {/* <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-10">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Strategy | Business Growth | Finance
                    </div>
                  </th>
                </tr> */}
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4 text-gray-600">
                        <div className="flex flex-col">
                          <span className="text-xl">
                            IVECO Group - Turin, Italy
                          </span>
                          <span className="mb-3 font-normal">
                            2022 - Present
                          </span>{" "}
                          <span className="font-bold">
                            Corporate FP&A Senior Manager
                          </span>{" "}
                          <p className="">
                            Provided financial support to executive management
                            and the Board, delivering key analyses, reporting,
                            and forecasts for corporate functions and business
                            units. Led corporate consolidation and budgeting
                            processes, implemented critical BI dashboards for
                            enhanced financial visibility, and drove initiatives
                            to streamline financial processes and improve
                            business agility.
                          </p>
                        </div>
                      </td>
                      <td className="px-0 py-4"></td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4 text-gray-600">
                        <div className="flex flex-col">
                          <span className="text-xl">
                            CNH Industrial SpA - Turin, Italy
                          </span>
                          <span className="mb-3 font-normal">2021 - 2022</span>{" "}
                          <span className="font-bold">
                            Global Strategy, PMO Spin-off Global
                          </span>{" "}
                          <p className="">
                            Supported the Chief Separation Officer in the
                            spin-off of CNH Industrial&apos;s On-Highway
                            business, focusing on optimizing cost structures and
                            aligning investment priorities for CNH Industrial
                            and Iveco Group. Conducted market intelligence, M&A
                            assessments, and executed strategic transactions,
                            including divestitures and joint ventures, to drive
                            growth in commercial vehicles, special vehicles, and
                            powertrain sectors.
                          </p>
                        </div>
                      </td>
                      <td className="px-0 py-4"></td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4 text-gray-600">
                        <div className="flex flex-col">
                          <span className="text-xl">
                            CNH Industrial SpA IVECO Brand, Turin (IT), Lyon
                            (FR)
                          </span>
                          <span className="mb-3 font-normal">2019 - 2021</span>{" "}
                          <span className="font-bold">
                            Global Bus Business & Network Development Director
                          </span>{" "}
                          <p className="">
                            Directed project teams to optimize resource
                            management and distribution models, strengthening
                            the network chain for timely project delivery.
                            Managed global bus business operations, including
                            network development, product innovation, and talent
                            recruitment to drive growth and market share. Led
                            dealer and sales teams, fostering a customer-centric
                            approach and ensuring business success through
                            strategic consultation and team development.
                          </p>
                        </div>
                      </td>
                      <td className="px-0 py-4"></td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4 text-gray-600">
                        <div className="flex flex-col">
                          <span className="text-xl">
                            CNH Industrial SpA - IVECO Poland, Warsaw
                          </span>
                          <span className="mb-3 font-normal">2012 - 2019</span>{" "}
                          <span className="font-bold">
                            Business Network Development Director, Poland &
                            Ukraine
                          </span>{" "}
                          <p className="">
                            Gained a competitive edge by analyzing market trends
                            and competitors, while ensuring adherence to BER
                            guidelines and IVECO&apos;s principles. Led the
                            transformation of the distribution network,
                            surpassing sales expectations, and successfully
                            acquired 12 new partners in Poland and Ukraine.
                            Developed a high-performing workforce by recruiting
                            top talent and executing motivational programs
                            within the dealer network.
                          </p>
                        </div>
                      </td>
                      <td className="px-0 py-4"></td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4 text-gray-600">
                        <div className="flex flex-col">
                          <span className="text-xl">
                            CNH Industrial SpA - IVECO Poland, Warsaw
                          </span>
                          <span className="mb-3 font-normal">2008 - 2012</span>{" "}
                          <span className="font-bold">
                            Treasury & Credit Control Manager, Head of
                            Commercial Lending
                          </span>{" "}
                          <p className="">
                            Achieved financial objectives by managing cash flow,
                            forecasting, credit operations, and debt recovery.
                            Successfully navigated the 2008-2009 financial
                            crisis by renegotiating loans, restructuring assets,
                            and collaborating with banks and legal offices.
                            Implemented dealer stock financing through the
                            &apos;Floor Plan&apos; with CNH Capital, enhancing
                            operations, and overseeing retail financing and
                            sales initiatives.
                          </p>
                        </div>
                      </td>
                      <td className="px-0 py-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Career;
