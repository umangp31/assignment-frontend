function Stats() {
  return (
    <>
      <div className="stats-section ">
        <div className="flex items-center gap-3 mb-[30px]">
          <div className="global-hr w-[54px] border-[1px] border-[#ef001c]"></div>
          <h3 className="global-title font-everett text-[20px] font-semibold leading-[27.24px] tracking-wider text-left text-[#ef001c]">
            WE ARE GLOBAL
          </h3>
        </div>

        <div className="flex justify-between pr-28 gap-4 text-start md:grid-cols-4">
          <div className="">
            <h4 className="stats-count  font-everett text-[86px] font-semibold leading-[88px] tracking-[-0.03em] text-left">
              60<span className="plus text-[#ef001c]">+</span>
            </h4>
            <p className="title max-w-[200px] font-everett text-[24px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#111010]">
              brands partnered with
            </p>
          </div>
          <div className="hidden md:block self-center h-10 border-l border-gray-300"></div>
          <div className="" >
            <h4 className="stats-count font-everett text-[86px] font-semibold leading-[88px] tracking-[-0.03em] text-left">
              3K<span className="plus text-[#ef001c]">+</span>
            </h4>
            <p className="title max-w-[200px] font-everett text-[24px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#111010]">
              brand content assets created
            </p>
          </div>
          <div className="hidden md:block h-10 self-center border-l border-gray-300"></div>
          <div>
            <h4 className="stats-count font-everett text-[86px] font-semibold leading-[88px] tracking-[-0.03em] text-left">
              1K<span className="plus text-[#ef001c]">+</span>
            </h4>
            <p className="title max-w-[200px] font-everett text-[24px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#111010]">
              global partners and collaborators
            </p>
          </div>
          <div className="hidden md:block h-10 self-center border-l border-gray-300"></div>
          <div>
            <h4 className="stats-count font-everett text-[86px] font-semibold leading-[88px] tracking-[-0.03em] text-left">
              100<span className="plus text-[#ef001c]">+</span>
            </h4>
            <p className="title max-w-[200px] font-everett text-[24px] font-semibold leading-[28px] tracking-[-0.04em] text-left text-[#111010]">
              cities worldwide
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
