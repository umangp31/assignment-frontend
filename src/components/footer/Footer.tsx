import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footerContainer bg-white text-black h-full ">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-5 h-4/5">
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl">COMPANY</h2>
            <li>
              <NavLink to={"/about"}>Who Are We</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl">RESOURCES</h2>
            <li>
              <NavLink to={"/about"}>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl">WORK</h2>
            <li>
              <NavLink to={"/about"}>Video</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Shoot</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Post</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl">SERVICES</h2>
            <li>
              <NavLink to={"/about"}>Video</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Shoot</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Post</NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="footLink list-none">
            <h2 className="font-bold lg:text-2xl">CONTACT</h2>
            <li>
              <NavLink to={"/about"}>Talk to us</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Collab</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between h-1/4 border-t-[2px] items-center">
        <h2>Copyright © 2023 Red Bangle</h2>
        <div className="flex flex-col">
          <ul className="flex justify-evenly gap-10" >
            <li>
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
