import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footerContainer   px-6 lg:px-[45px] lg:pt-[64px] pb-[24px] h-full w-screen lg:h-[366px] bg-white text-black my-0 mx-auto max-w-full ">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 h-4/5 py-12 lg:py-0 ">
        <div className="">
        <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl font-everett pb-[12px]">COMPANY</h2>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/about"}>Who Are WE</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl font-everett pb-[12px]">RESOURCES</h2>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/about"}>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl font-everett pb-[12px]">WORK</h2>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/work"}>Video</NavLink>
            </li>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/services"}>Shoot</NavLink>
            </li>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/about"}>Post</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl font-everett pb-[12px]">SERVICES</h2>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/about"}>Video</NavLink>
            </li>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/about"}>Shoot</NavLink>
            </li>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/about"}>Post</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl font-everett pb-[12px]">CONTACT</h2>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/about"}>Talk to us</NavLink>
            </li>
            <li className="font-opensans font-medium text-left w-fit text-[#707070] py-[10px] px-0" >
              <NavLink to={"/about"}>Collab</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:flex justify-between lg:h-1/4 border-t-[2px] items-center">
        <h2 className="py-2 lg:py-0 " >Copyright © 2023 Red Bangle</h2>
        <div className="flex flex-col">
          <ul className="flex justify-between lg:justify-evenly py-2 lg:py-0 gap-4 lg:gap-10" >
            <li >
              Privacy Policy
            </li>
            <li>
              Legal
            </li>
            <li>
              Terms and Conditions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
