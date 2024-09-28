import { useState } from "react";
import Testimony1 from '../assets/Testimony1.svg'
import Ayesha from "../assets/Home/Ayesha.svg"
import Marin from "../assets/Home/Marin.svg"
import ArrowRignt from "../assets/ArrowRight.png"
import ArrowLeft from "../assets/ArrowLeft.svg"
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
          "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled",
      },
    ];

    const next = () => {
        setIndex((index+1)% frames.length);
    };

    const prev = () => {
        setIndex(!index?frames.length-1:index-1);
    };

    return (
      <div className="my-20" >
        {/* Testimony Heading */}
        <div className="flex items-center gap-3 mb-8 py-8 ">
          <div className="w-[3.5rem] h-[1px] border bg-[#ef001c] border-[#ef001c]"></div>
          <div className="text-[#db2f2c] text-[20px] font-semibold tracking-wider leading-[27.24px]">
            TESTIMONY FROM OUR PARTNERS
          </div>
        </div>

        {/* Gallery Container */}
        <div className="grid grid-cols-[40%_60%] items-center mb-24 max-w-full">
          {/* Image Section */}
          <div className="w-[484px] h-[517px]">
            <img
              src={frames[index].image}
              alt={frames[index].title}
              className="w-full h-full object-cover bg-blue-500 rounded-none"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between h-full">
            <div className="w-[634px] h-[205px] text-[24px] font-semibold leading-[41px] tracking-tight text-black">
              {frames[index].description}
            </div>

            <div className="flex justify-between items-end mt-4">
              {/* Role Information */}
              <div className="mb-2">
                <div className="text-[28px] font-bold leading-[32px] text-black">
                  {frames[index].title},{" "}
                  <span className="text-[18px] font-bold leading-[26px]">
                    {frames[index].company}
                  </span>
                </div>
                <div className="text-[18px] font-semibold leading-[26px] text-gray-700">
                  {frames[index].role}
                </div>
              </div>

              {/* Button Controls */}
              <div className="flex gap-2 mt-4">
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
      </div>
    );
}

export default Testimony;
