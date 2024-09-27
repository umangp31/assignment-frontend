import Marquee from "react-fast-marquee";
import Swiggy from "../assets/companyLogo/Swiggy_logo.svg"
import Indeed from "../assets/companyLogo/Indeed.svg"
import SequoiaCapital from "../assets/companyLogo/Sequoia_Capital_logo.png"
import DarwinBox from "../assets/companyLogo/darwinBox.svg"
import HealthifyMe from "../assets/companyLogo/healthifyMe.svg"
import Ikea from "../assets/companyLogo/ikea.svg"
import IndiaGold from "../assets/companyLogo/indiaGold.svg"
import My11Circle from "../assets/companyLogo/my11Circle.svg"
import Wipro from "../assets/companyLogo/wipro.svg"
function Marque() {
    const logos = [
        { src: DarwinBox, alt: "Darwinbox" },
        { src: Wipro, alt: "Wipro" },
        { src: SequoiaCapital, alt: "SequoiaCapital" },
        { src: Indeed, alt: "Indeed" },
        { src: My11Circle, alt: "My11Circle" },
        { src: Ikea, alt: "IKEA" },
        { src: IndiaGold, alt: "Indiagold" },
        { src: HealthifyMe, alt: "HealthifyMe" },
        { src: Swiggy, alt: "Swiggy" },
      ];
    
      return (
        <div className="moving-logos">
          <Marquee direction="right" speed={100} gradient={false} pauseOnHover={true}>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-8 mx-8"
              />
            ))}
          </Marquee>
        </div>
      );
}

export default Marque