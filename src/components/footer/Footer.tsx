import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footerContainer px-[45px] pt-[64px] pb-[24px] w-screen h-[366px] bg-white text-black my-0 mx-auto max-w-[1440px] ">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 h-4/5">
        <div className="">
          <ul className="footLink flex flex-col list-none">
            <h2 className="font-bold lg:text-2xl font-everett pb-[12px]">COMPANY</h2>
            <li>
              <NavLink to={"/about"}>Who Are We</NavLink>
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
      <div className="flex justify-between h-1/4 border-t-[2px] items-center">
        <h2>Copyright © 2023 Red Bangle</h2>
        <div className="flex flex-col">
          <ul className="flex justify-evenly gap-10" >
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
