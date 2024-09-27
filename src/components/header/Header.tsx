import CompanyLogo from "../../assets/Navbar/companyLogo.svg";
import TopRightArrow from "../../assets/Navbar/topRightArrow.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="headerContainer ">
      <div className="flex justify-between items-center navbar">
        <Link to={'/'} className="flex items-center">
          <img className="companyLogo" src={CompanyLogo} />
        </Link>
        <nav className="space-x-8 text-sm nav-links flex">
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              `${isActive ? " " : ""} flex items-center justify-center `
            }
          >
            <span>SERVICES</span>
            <span>
              <img src={TopRightArrow} alt="TopRightArrow" />
            </span>
          </NavLink>
          <NavLink
            to={"/work"}
            className={({ isActive }) =>
              `${isActive ? " " : ""} flex items-center justify-center`
            }
          >
            <span>WORK</span>
            <span>
              <img src={TopRightArrow} alt="TopRightArrow" />
            </span>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `${isActive ? " " : ""} flex items-center justify-center`
            }
          >
            <span>ABOUT</span>
            <span>
              <img src={TopRightArrow} alt="TopRightArrow" />
            </span>
          </NavLink>
          <Link to={"/"}>
            <button className="rounded-full getBtn">GET STARTED</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
