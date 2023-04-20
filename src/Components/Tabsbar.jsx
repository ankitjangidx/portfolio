import react_icon from "../assets/react_icon.svg";
import html_icon from "../assets/html_icon.svg";
import css_icon from "../assets/css_icon.svg";
import json_icon from "../assets/json_icon.svg";
import { Link } from "react-router-dom";
function Tabsbar() {
  return (
    <div className="bg-[#191a21] h- text-sm overflow-x-auto overflow-y-hidden">
      <div className=" cursor-pointer  text-white flex">
        <Link to="/">
          <div className="flex items-center border :bg-blue-600 border-solid border-[#191a21] border-1 bg-[#282a36] px-5 py-2">
            <img src={react_icon} alt="html_icon" className=" w-5" />
            <p className="pl-1">home.jsx</p>
          </div>
        </Link>
        <Link to="/about">
          <div className="flex items-center border :bg-blue-600 border-solid border-[#191a21] border-1 bg-[#282a36] px-5 py-2">
            <img src={html_icon} alt="html_icon" className=" w-5" />
            <p className="pl-1">About.html</p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="flex items-center border border-solid border-[#191a21] border-1 bg-[#282a36] px-5 py-2">
            <img src={css_icon} alt="html_icon" className=" w-5" />
            <p className="pl-1">Contact.css</p>
          </div>
        </Link>
        <Link to="/project">
          <div className="flex items-center border border-solid border-[#191a21] border-1 bg-[#282a36] px-5 py-2">
            <img src={json_icon} alt="html_icon" className=" w-5" />
            <p className="pl-1">project.json</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tabsbar;
