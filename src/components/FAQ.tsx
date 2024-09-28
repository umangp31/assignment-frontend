import { useState } from "react";
import ArrowDown from "../assets/ArrowDown.svg";

function FAQ() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const arr = [
    "How do I sign up?",
    "What information do I need to provide during the sign-up process?",
    "Is my information secure during the sign-up process?",
    "Who can apply?",
    "What are the terms and conditions for the collaboration?",
    "What is the minimum duration of the contract?",
  ];

  return (
    <div className="px-6 lg:px-0 overflow-x-hidden">
      <div className="lg:grid lg:grid-cols-[40%,60%] gap-2 lg:max-w-full mb-24">
        <h2 className="font-everett text-3xl lg:text-[52px] font-semibold leading-[54px] tracking-[-0.04em] text-left text-[#111010]">
          Frequently asked questions
        </h2>

        <div className="py-4 flex flex-col justify-evenly  self-center ">
          {arr.map((faq, index) => (
            <div key={index} className="py-4 border-b ">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-[18px] font-normal transition ease-in-out duration-300 leading-[18px] tracking-[-0.006em] text-left text-[#111010]">
                  {faq}
                </span>
                <span>
                  {activeFAQ === index ? "" : <img src={ArrowDown} alt="" />}
                </span>
              </button>

              {activeFAQ === index && (
                <p className="mt-2 text-gray-600 transition ease-in duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis nemo blanditiis consequuntur officia dicta aliquam
                  ex iure non praesentium minima!
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
