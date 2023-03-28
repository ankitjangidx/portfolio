import React from "react";
import react_icon from "../assets/react_icon.svg"
import html_icon from "../assets/html_icon.svg"
import css_icon from "../assets/css_icon.svg"
import json_icon from "../assets/json_icon.svg"
import { Link } from "react-router-dom";
// import toggler from "../assets/toggle.svg"

function Sidebarr() {
  return (
    <div className="w-[200px] h-full text-white border-r-[1px] border-[#191d20] bg-[#21222c]">
      <div>
        <p className="py-2 px-3 text-base font-light tracking-widest">
          EXPLORER
        </p>
        <div className="flex items-center px-1">
          {/* <img src={toggler} alt="html_icon" className=" w-5" /> */}
          <p>PORTFOLIO</p>
        </div>
      </div>
      <div className=" text-sm">
        <Link to="/">
          <div className="flex items-center px-4 py-1">
            <img src={react_icon} alt="html_icon" className=" w-5" />
            <p className="pl-1">home.jsx</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="flex items-center px-4 py-1">
            <img src={html_icon} alt="html_icon" className=" w-5" />
            <p className="pl-1">About.html</p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="flex items-center px-4 py-1">
            <img src={css_icon} alt="html_icon" className=" w-5" />
            <p className="pl-1">Contact.css</p>
          </div>
        </Link>
        <Link to="/project">
          <div className="flex items-center px-4 py-1">
            <img src={json_icon} alt="html_icon" className=" w-5" />
            <p className="pl-1">project.json</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebarr;
