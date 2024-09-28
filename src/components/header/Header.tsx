// Header.tsx
import { Link, NavLink } from "react-router-dom";
import CompanyLogo from "../../assets/Navbar/companyLogo.svg";
import TopRightArrow from "../../assets/Navbar/topRightArrow.svg";
import { useState } from "react";
import hamburger from '../../assets/hamburger.svg';
import cross from '../../assets/cross.svg'
function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-black/10 lg:bg-transparent px-0">
      <div className="flex justify-between items-center h-16 px-8  lg:h-[86px] lg:px-[90px] w-screen max-w-full mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-[150px] h-[28px] md:w-[209px] md:h-[38px]" src={CompanyLogo} alt="Company Logo" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden lg:hidden block h-8 w-8">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <img src={cross} className=" h-8 w-8" /> : <img src={hamburger} className=" h-8 w-8" />}
          </button>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-8 text-sm items-center  ">
          <NavLink to="/services" className="flex items-center justify-center">
            <span>SERVICES</span>
            <img src={TopRightArrow} alt="Arrow" />
          </NavLink>
          <NavLink to="/work" className="flex items-center justify-center">
            <span>WORK</span>
            <img src={TopRightArrow} alt="Arrow" />
          </NavLink>
          <NavLink to="/about" className="flex items-center justify-center">
            <span>ABOUT</span>
            <img src={TopRightArrow} alt="Arrow" />
          </NavLink>
          <Link to="/">
            <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full">
              GET STARTED
            </button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[56px] left-0 w-screen bg-white shadow-md transition ease-out duration-300 md:hidden z-10 ">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <NavLink to="/services" className="flex items-center justify-center">
                <span>SERVICES</span>
                <img src={TopRightArrow} alt="Arrow" />
              </NavLink>
              <NavLink to="/work" className="flex items-center justify-center">
                <span>WORK</span>
                <img src={TopRightArrow} alt="Arrow" />
              </NavLink>
              <NavLink to="/about" className="flex items-center justify-center">
                <span>ABOUT</span>
                <img src={TopRightArrow} alt="Arrow" />
              </NavLink>
              <Link to="/">
                <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full">
                  GET STARTED
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;