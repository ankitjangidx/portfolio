import react_icon from "../assets/react_icon.svg";
import html_icon from "../assets/html_icon.svg";
import css_icon from "../assets/css_icon.svg";
import json_icon from "../assets/json_icon.svg";
import { Link, useLocation } from "react-router-dom";

function Tabsbar() {
  let {pathname} = useLocation();
  return (
    <div className="flex items-center w-full bg-[#191a21] text-sm overflow-y-hidden overflow-x-auto ">
      <div className="  text-[#ececec] gap-0.5 flex">
        <Link
          className={`px-5  ${
            pathname === "/"
              ? "border-t-4 border-[#bd93f9] bg-[#282a36]"
              : "bg-[#21222c]"
          }`}
          to="/"
        >
          <div className="flex px-1 py-3 cursor-pointer gap-1 items-center  justify-center">
            <img src={react_icon} alt="react_icon" className=" w-5" />
            <p className="ml-1">home.jsx</p>
          </div>
        </Link>
        <Link
          className={`px-5  ${
            pathname === "/about"
              ? "border-t-4 border-[#bd93f9] bg-[#282a36]"
              : "bg-[#21222c]"
          }`}
          to="/about"
        >
          <div className="flex px-1 py-3 cursor-pointer gap-1 items-center justify-center">
            <img src={html_icon} alt="html_icon" className=" w-5" />
            <p className="ml-1">About.html</p>
          </div>
        </Link>
        <Link
          className={`px-5  ${
            pathname === "/contact"
              ? "border-t-4 border-[#bd93f9] bg-[#282a36]"
              : "bg-[#21222c]"
          }`}
          to="/contact"
        >
          <div className="flex px-1 py-3 cursor-pointer gap-1 items-center justify-center">
            <img src={css_icon} alt="html_icon" className=" w-5" />
            <p className="ml-1">Contact.css</p>
          </div>
        </Link>
        <Link
          className={`px-5  ${
            pathname === "/project"
              ? "border-t-4 border-[#bd93f9] bg-[#282a36]"
              : "bg-[#21222c]"
          }`}
          to="/project"
        >
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
