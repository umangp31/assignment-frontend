import Ayesha from "../assets/Home/Ayesha.svg";
import Mirin from "../assets/Home/Marin.svg";
import MaskedReel from "../assets/Home/MaskedReel.svg";
import ArrowRight from "../assets/Home/arrowRight.svg";
import PauseBtn from "../assets/Home/PauseBtn.svg";
function Hero() {
  return (
    <>
      <h1 className="heading text-[104px] font-semibold leading-[112px]">
        <span>WE ARE A </span>
        <div>
          GLOBAL
          <span className="text-[#EF001C] "> PRODUCTION</span>
        </div>
        <span>AGENCY</span>
      </h1>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-8 get-service">
          <p className="get-service-title">
            Designed with the specific needs of large B2B enterprises in mind,
            our platform offers a comprehensive solution to simplify.
          </p>
          <div className="flex items-center gap-6 ">
            <div className="flex items-center justify-center gap-2 rounded-full get-service-video-btn">
              <button className="text-btn">
                GET PROFESSIONAL VIDEO SERVICES
              </button>
              <img src={ArrowRight} alt="right arrow" />
            </div>

            <div className="flex items-center gap-2 space-x-2">
              <div className="flex -space-x-2 overflow-hidden">
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

              <div className="Services-names">
                <h6>Marin / Ayesha </h6>
                <p>Global Services</p>
              </div>
            </div>
          </div>
        </div>
        <div className="get-service-video">
          <img
            className="video-preview-background-img"
            src={MaskedReel}
            alt="videoPreview"
          />
          <div className="flex items-center justify-center gap-1 rounded-full play-video-btn">
            <img src={PauseBtn} alt="previewArrow" />
            <p>Play Showreel</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
