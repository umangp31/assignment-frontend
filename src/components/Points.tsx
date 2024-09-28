import { useState } from "react";
import clapping from "../assets/Home/Clapping.svg";

function Points() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full pt-0 pb-0 px-6 lg:px-0 lg:pt-0 lg:pb-0 tracking-normal" >
      <h1 className=" w-full font-everett text-4xl lg:text-5xl leading-tight font-semibold  ">
        <span>Our expertise and passion</span>
        <br className="hidden lg:block" /> <span>breathe life into your narratives</span>
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8 md:grid-cols-[1fr_2fr] min-h-[400px] pt-12">
        <div className="flex accordian-img ">
          <img
            src={clapping}
            alt="People clapping"
            className="w-full h-full object-contain lg:rounded-lg lg:w-[484px] lg:h-[451px] "
          />
        </div>

        <div className="flex flex-col justify-start accordion-container lg:mt-9  ">
          <div className="flex flex-col justify-center ">
            <div className="space-y-2 text-gray-500 mt-8 lg:mt-0 ">
              {/* ACC-1 */}
              <div className="" >
                <div
                  className={`flex items-center justify-between border-t  ${
                    activeIndex !== 0 ? "py-6" : "pb-0"
                  } border-b cursor-pointer`}
                  onClick={() => toggleAccordion(0)}
                >
                  {activeIndex !== 0 && (
                    <span className="accordian-main-title font-everett  text-[24px] font-semibold tracking-[-0.04em] leading-[28px] text-left text-[#333333] opacity-50">
                      Innovative
                    </span>
                  )}
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    activeIndex === 0
                      ? "max-h-96 acccprdian-border-bottom px-0 py-[20px] border-b border-[#11101026]"
                      : "max-h-0"
                  }`}
                >
                  {activeIndex === 0 && (
                    <div className="py-2" >
                      <span className="block font-everett text-[20px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#ef001c] py-[5px] px-0 accordian-number">
                        01
                      </span>
                      <span className="accordian-title py-2 font-everett text-[32px] text-[#111010] text-left tracking-[-0.04em] leading-[36px] font-semibold ">
                        Innovative
                      </span>
                      <p className="accordian-info font-opensans max-w-[511px] text-[18px] py-2 font-normal leading-[26px] tracking-[-0.02em] text-left text-[#111010cc] ">
                        Creation, ensuring your messages resonate worldwide.
                        From concept to distribution, our platform serves as
                        your strategic partner.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* ACC-2 */}
              <div className="mt-0" style={{ marginTop: "0px" }}>
                <div
                  className={`flex items-center justify-between  ${
                    activeIndex !== 1 ? "py-6" : "pb-0"
                  } border-b cursor-pointer`}
                  onClick={() => toggleAccordion(1)}
                >
                  {activeIndex !== 1 && (
                    <span className=" accordian-main-title font-everett text-[24px] font-semibold tracking-[-0.04em] leading-[28px] text-left text-[#333333] opacity-50">
                      Reliable
                    </span>
                  )}
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    activeIndex === 1
                      ? "max-h-96 acccprdian-border-bottom px-0 pb-[20px] bgred border-b border-[#11101026]"
                      : "max-h-0 border-none "
                  }`}
                >
                  {activeIndex === 1 && (
                    <div className="mt-0 py-2">
                      <span className="block font-everett text-[20px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#ef001c] py-[5px] px-0 accordian-number">
                        02
                      </span>
                      <span className="accordian-title font-everett py-2 text-[32px] text-[#111010] text-left tracking-[-0.04em] leading-[36px] font-semibold ">
                        Reliable
                      </span>
                      <p className="accordian-info font-opensans max-w-[511px] py-2 text-[18px] font-normal leading-[26px] tracking-[-0.02em] text-left text-[#111010cc] ">
                        Creation, ensuring your messages resonate worldwide.
                        From concept to distribution, our platform serves as
                        your strategic partner.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* ACC-3 */}
              <div className="mt-0" style={{ marginTop: "0px" }}>
                <div
                  className={`flex items-center justify-between ${
                    activeIndex !== 2 ? "py-6" : "pb-0"
                  } border-b cursor-pointer`}
                  onClick={() => toggleAccordion(2)}
                >
                  {activeIndex !== 2 && (
                    <span className="accordian-main-title  font-everett text-[24px] font-semibold tracking-[-0.04em] leading-[28px] text-left text-[#333333] opacity-50">
                      Quality
                    </span>
                  )}
                </div>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    activeIndex === 2
                      ? "max-h-96 acccprdian-border-bottom px-0 py-[20px] border-b border-[#11101026]"
                      : "max-h-0 border-none "
                  }`}
                >
                  {activeIndex === 2 && (
                    <div className="mt-0 py-2">
                      <span className="block font-everett text-[20px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#ef001c] px-0 py-[5px] accordian-number">
                        03
                      </span>
                      <span className="accordian-title font-everett text-[32px] py-2 text-[#111010] text-left tracking-[-0.04em] leading-[36px] font-semibold ">
                        Quality
                      </span>
                      <p className="accordian-info font-opensans max-w-[511px] py-2 text-[18px] font-normal leading-[26px] tracking-[-0.02em] text-left text-[#111010cc] ">
                        Creation, ensuring your messages resonate worldwide.
                        From concept to distribution, our platform serves as
                        your strategic partner.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points;
