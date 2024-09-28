import Marquee from "react-fast-marquee";

function TagLine() {
    const tags = [
        {tag:"UNLEASH"},
        {tag:"VISUAL"},
        {tag:"IMPACT"},
      ];
      return (
        <div className="flex moving-logos py-4 bg-black font-everett lg:h-[166px] ">
          <Marquee direction="right" speed={150} gradient={false} pauseOnHover={true}>
            {tags.map((item) => (
              <h1 className="lg:text-[68px] text-white px-2 font-medium" >{item.tag}</h1>
            ))}
                        <div className=" w-2 h-[70px] bg-white mx-10"></div>
            {tags.map((item) => (
              <h1 className="lg:text-[68px] text-white px-2 font-medium" >{item.tag}</h1>
            ))}
            <div className=" w-2 h-[70px] bg-white mx-10"></div>
          </Marquee>
        </div>
      );
}

export default TagLine