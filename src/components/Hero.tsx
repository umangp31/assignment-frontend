import Ayesha from "../assets/Home/Ayesha.svg";
import Mirin from "../assets/Home/Marin.svg";
import MaskedReel from "../assets/Home/MaskedReel.svg";
import ArrowRight from "../assets/Home/arrowRight.svg";
import PauseBtn from "../assets/Home/PauseBtn.svg";
function Hero() {
  return (
    <>
      <h1 className="heading w-full pt-6 pb-3 px-6 lg:px-0 lg:pt-0 lg:pb-0 text-left font-[600] text-5xl lg:text-[104px] lg:leading-[112px] lg:tracking-[-0.01em] font-everett">
        <span>WE ARE A </span>
        <br />
        <div>
          GLOBAL
          <span className="text-[#EF001C]"> PRODUCTION</span>
          <br />
        </div>
        <span>AGENCY</span>
      </h1>
      <div className="flex flex-col px-6 lg:px-0 py-10 lg:py-0 w-fit lg:w-full md:flex-row items-start md:items-end justify-center lg:justify-between lg:gap-6">
        <div className="flex flex-col mt-0 w-80  lg:w-full gap-4 lg:gap-8 lg:mt-[80px] lg:max-w-[725px] get-service">
          <p className="get-service-title max-w-full pb-2 lg:pb-0 lg:max-w-none font-opensans font-semibold lg:text-[24px] lg:leading-[32px] lg:tracking-[-0.04em] text-left text-[#111010]">
            Designed with the specific needs of large B2B enterprises in mind,
            our platform offers a comprehensive solution to simplify.
          </p>
          <div className="flex flex-col lg:flex-row items-center h-fit lg:h-full gap-6">
            <div className="flex items-center gap-2 justify-center px-5 py-3 lg:px-[32px] lg:py-[20px] bg-[#EF001C] rounded-full lg:w-[376.31px] lg:h-[60px] get-service-video-btn">
              <button className="text-btn text-white font-['Open_Sans'] font-bold text-[16px] leading-[20px]">
                GET PROFESSIONAL VIDEO SERVICES
              </button>
              <img src={ArrowRight} alt="right arrow" />
            </div>

            <div className="flex items-center gap-2 space-x-2  ">
              <div className="flex -space-x-2 overflow-hidden py-4 lg:py-0">
                <img
                  className="z-10 inline-block w-12 h-12 rounded-full ring-2 ring-white"
                  src={Mirin}
                  alt="Marin"
                />
                <img
                  className="z-0 inline-block w-12 h-12 rounded-full ring-2 ring-white"
                  src={Ayesha}
                  alt="Ayesha"
                />
              </div>

              <div className="Services-names font-Everett text-[16px] tracking-tight">
                <h6 className="font-bold font-Everett text-sm text-[#111010]">Marin / Ayesha </h6>
                <p className="font-bold text-[#11101099] font-Everett text-sm ">Global Services</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative get-service-video py-4 lg:py-0 flex justify-center self-center lg:self-auto lg:justify-normal ">
          <img
            className="video-preview-background-img rounded-[10px]"
            src={MaskedReel}
            alt="videoPreview"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 px-4 py-2 w-[195.86px] h-[44.77px] bg-white bg-opacity-30 text-white cursor-pointer backdrop-blur-md">
            <img className="w-3 h-auto" src={PauseBtn} alt="previewArrow" />
            <p>Play Showreel</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default Hero;
