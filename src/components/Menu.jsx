import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/navbar/logo.png";
import schoolLogo from "../asset/navbar/school-logo.png";
import map from "../asset/navbar/map.svg"
import phone from "../asset/navbar/phone.svg";
import mail from '../asset/navbar/mail.svg'
import admission from "../asset/navbar/adminssion.png"

const Menu = () => {
  return (
    <>
      <div className="menuBar">
        <div className="navTop">
          <ul>
          <div className="image-div">
              <img src={map} alt="" />
              <li>Liluah, Howrah, West Bengal</li>
            </div>
            <div className="image-div">
              <img src={phone} alt="" />
              <li> +91 33 2655 4544 /4547</li>
            </div>
            <div className="image-div">
              <img src={mail} alt="" />
              <li>absceo@rediffmail.com</li>
            </div>
            
          </ul>
        </div>
        <div className="menuBtn">
          <button className="btn">Teacher Login</button>
          <button className="btn">Student Login</button>
        </div>
      </div>

      <div className="menuHero">
        <div>
          <img src={logo} alt="" />
          <img src={schoolLogo} alt="" />
        </div>
        <div className="heroRight">
            <div className="heroDetails">
                <div className="image-div-hero"><img src={admission} alt="" /></div>
                <div>
                    <div>ADMISSION</div>
                    <div>Session 2024 - 25</div>
                </div>
            </div>
            <div className="heroDetails">
                <div className="image-div-hero"><img src={admission} alt="" /></div>
                <div>
                    <div>NOTICE & CIRCULAR</div>
                    <div>Session 2023 - 24</div>
                </div>
            </div>
            <div className="heroDetails">
                <div className="image-div-hero"><img src={admission} alt="" /></div>
                <div>
                    <div>FEES PAYMENT</div>
                    <div>Session 2023 - 24</div>
                </div>
            </div>
            
        </div>
      </div>

      <div className="menu">
        <nav>
          <ul>
          <li>
              <NavLink to={"/"} className={"nav"}>
                Home
              </NavLink>
            </li>
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
