function Stats() {
  return (
    <>
      <div className="px-6 pt-16 pb-0 lg:px-0 lg:pt-0">
        <div className="flex items-center gap-1 lg:gap-3 lg:mb-[30px]">
          <div className=" w-4 lg:w-[54px] border-[1px] border-[#ef001c]"></div>
          <h3 className="global-title font-everett text-[20px] font-semibold lg:leading-[27.24px] tracking-wider text-left text-[#ef001c]">
            WE ARE GLOBAL
          </h3>
        </div>

        <div className="font-everett pt-4 lg:pt-0 flex flex-col items-center lg:flex lg:flex-row lg:justify-between lg:pr-28 lg:gap-4 text-start lg:md:grid-cols-4">
          <div className="py-4 lg:py-0">
            <h4 className="stats-count py-2 font-everett text-[86px] font-semibold leading-[88px] tracking-[-0.03em] text-left">
              60<span className="plus text-[#ef001c]">+</span>
            </h4>
            <p className="title max-w-[200px] py-2 font-everett text-[24px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#111010]">
              brands <br /> partnered with
            </p>
          </div>
          <div className="hidden md:block lg:block self-center h-10 border-l border-gray-300"></div>
          <div className="py-4 lg:py-0" >
            <h4 className="stats-count py-2 font-everett text-[86px] font-semibold leading-[88px] tracking-[-0.03em] text-left">
              3K<span className="plus text-[#ef001c]">+</span>
            </h4>
            <p className="title max-w-[200px] py-2 font-everett text-[24px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#111010]">
              brand content <br /> assets created
            </p>
          </div>
          <div className="hidden md:block h-10 self-center border-l border-gray-300"></div>
          <div className="py-4 lg:py-0" >
            <h4 className="stats-count py-2 font-everett text-[86px] font-semibold leading-[88px] tracking-[-0.03em] text-left">
              1K<span className="plus text-[#ef001c]">+</span>
            </h4>
            <p className="title max-w-[200px] py-2 font-everett text-[24px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#111010]">
              global partners <br className="lg:hidden" /> and <br className=" lg:block" /> collaborators
            </p>
          </div>
          <div className="hidden md:block h-10 self-center border-l border-gray-300"></div>
          <div className="py-4 lg:py-0  " >
            <h4 className="stats-count lg:py-2 font-opensans text-[86px] font-semibold leading-[88px] tracking-[-0.03em] text-left">
               100<span className="plus text-[#ef001c]">+</span>
            </h4>
            <p className="title max-w-[200px] lg:py-2 pl-4 lg:pl-0 font-everett text-[24px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#111010]">
            <br className="lg:hidden" /> cities <br className="" /> worldwide
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
