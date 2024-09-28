import { useState } from "react";
import Testimony1 from "../assets/Testimony1.svg";
import Ayesha from "../assets/Home/Ayesha.svg";
import Marin from "../assets/Home/Marin.svg";
import ArrowRignt from "../assets/Home/arrowRight.svg";
import ArrowLeft from "../assets/ArrowLeft.svg";
function Testimony() {
  const [index, setIndex] = useState(0);

  const frames = [
    {
      title: "LISSA SMITH",
      role: "DIRECTOR OF MARKETING AND COMMUNICATIONS",
      company: "VYMO",
      image: Testimony1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled",
    },
    {
      title: "JOHN DOE",
      role: "CEO",
      company: "Tech Corp",
      image: Marin,
      description:
        "Typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled Lorem Ipsum is simply dummy text of the printing",
    },
    {
      title: "LISSA SMITH",
      role: "DIRECTOR OF MARKETING AND COMMUNICATIONS",
      company: "VYMO",
      image: Ayesha,
      description:
        "Typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled Lorem Ipsum is simply dummy text of the printing",
    },
  ];

  const next = () => {
    setIndex((index + 1) % frames.length);
  };

  const prev = () => {
    setIndex(!index ? frames.length - 1 : index - 1);
  };

  return (
    <div className="my-4 lg:my-20 px-6 lg:px-0">
      {/* Testimony Heading */}
      <div className="flex items-center  mb-8 py-8">
        <div className="relative flex lg:items-center gap-1 lg:gap-3">
          <div className="w-4 lg:w-[3.5rem] mt-[14px] lg:mt-0 h-[1px] border bg-[#ef001c] border-[#ef001c]"></div>
          <div className="text-[#db2f2c] text-[20px] font-opensans font-semibold tracking-wider leading-[27.24px]">
            TESTIMONY FROM OUR PARTNERS
          </div>
        </div>
      </div>

      {/* Gallery Container */}
      <div className="flex flex-col lg:grid lg:grid-cols-[40%_60%] items-center mb-24 lg:max-w-full lg:gap-8">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-normal items-center w-full h-full lg:w-[484px] lg:h-[517px] pb-6 lg:pb-0 ">
          <img
            src={frames[index].image}
            alt={frames[index].title}
            className=" w-52 h-52 lg:w-full lg:h-full object-contain rounded-none"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col w-fit h-fit justify-between lg:h-full lg:w-fit ">
          <div className=" w-fit h-fit max-h-44 min-h-44 lg:max-h-none lg:w-[634px] lg:h-[205px] lg:text-[24px] font-semibold lg:leading-[41px] tracking-tight text-black">
            {frames[index].description}
          </div>

          <div className="flex h-16 lg:h-full justify-between items-end mt-4">
            {/* Role Information */}
            <div className="mb-2">
              <div className="text-xl lg:text-[28px] font-bold leading-[32px] text-black">
                {frames[index].title},{" "}
                <span className="text-lg lg:text-[18px] font-bold leading-[26px]">
                  {frames[index].company}
                </span>
              </div>
              <div className="text-lg lg:text-[18px] font-semibold leading-[26px] text-gray-700">
                {frames[index].role}
              </div>
            </div>

            {/* Button Controls */}
            <div className="hidden lg:flex gap-2 mt-4">
              <button
                className="rounded-full flex items-center justify-center px-4 py-6 w-16 h-10 border border-black bg-white text-black"
                onClick={prev}
              >
                <img src={ArrowLeft} alt="" />
              </button>
              <button
                className="rounded-full flex items-center justify-center px-4 py-6 w-16 h-10 bg-red-600 text-white"
                onClick={next}
              >
                <img src={ArrowRignt} alt="" />
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:hidden gap-2 mt-4">
            <button
              className="rounded-full flex items-center justify-center px-4 py-6 w-16 h-10 border border-black bg-white text-black"
              onClick={prev}
            >
              <img src={ArrowLeft} alt="" />
            </button>
            <button
              className="rounded-full flex items-center justify-center px-4 py-6 w-16 h-10 bg-red-600 text-white"
              onClick={next}
            >
              <img src={ArrowRignt} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
