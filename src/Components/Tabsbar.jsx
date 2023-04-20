import react_icon from "../assets/react_icon.svg";
import html_icon from "../assets/html_icon.svg";
import css_icon from "../assets/css_icon.svg";
import json_icon from "../assets/json_icon.svg";
import { Link } from "react-router-dom";
function Tabsbar() {
  return (
    <div className="flex items-center w-full bg-[#21222c] text-sm overflow-y-hidden overflow-x-auto ">
      <div className="  text-[#ececec]  flex">
        <Link to="/">
          <div className="flex px-1 py-3 cursor-pointer gap-1 items-center  justify-center ">
            <img src={react_icon} alt="react_icon" className=" w-5" />
            <p className="ml-1">home.jsx</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="flex px-1 py-3 cursor-pointer gap-1 items-center justify-center">
            <img src={html_icon} alt="html_icon" className=" w-5" />
            <p className="ml-1">About.html</p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="flex px-1 py-3 cursor-pointer gap-1 items-center justify-center">
            <img src={css_icon} alt="html_icon" className=" w-5" />
            <p className="ml-1">Contact.css</p>
          </div>
        </Link>
        <Link to="/project">
          <div className="flex px-1 py-3 cursor-pointer gap-1 items-center justify-center">
            <img src={json_icon} alt="html_icon" className=" w-5" />
            <p className="ml-1">project.json</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabsbar;
