import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/navbar/logo.png"
import schoolLogo from "../asset/navbar/school-logo.png"
// import phone from "../asset/navbar/phone-solid.svg"

const Menu = () => {
  return (
    <>
      <div className="menuBar">
        <div className="navTop">
            
          <ul >
            <li >Liluah, Howrah, West Bengal</li>
            <li>+91 33 2655 4544 /4547</li>
            <li>absceo@rediffmail.com</li>
          </ul>
          
        </div>
        <div className="menuBtn">
            <button className="btn">Teacher Login</button>
            <button className="btn">Student Login</button>
        </div>
      </div>

      <div>
        <div>
            <img src={logo} alt="" />
            <img src={schoolLogo} alt="" />
        </div>
        <div></div>
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <NavLink to={"/About"} className={"nav"}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to={"/OutTeam"} className={"nav"}>
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Scholastic"} className={"nav"}>
                Scholastic
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Infrastructure"} className={"nav"}>
                Infrastructure
              </NavLink>
            </li>
            <li>
              <NavLink to={"/CoScholastic"} className={"nav"}>
                Co-Scholastic
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Media"} className={"nav"}>
                Media
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Careers"} className={"nav"}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to={"/ContactUs"} className={"nav"}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Menu;
