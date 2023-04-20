import React from "react";
import Navbar from "./Navbar";
import Sidebarl from "./Sidebarl";
import Sidebarr from "./Sidebarr";

function Sidebar() {
  return (
    <div className="flex h-full">
      <Sidebarl />
      <div className="hidden md:inline-block">
        <Sidebarr />
      </div>
    </div>
  );
}

export default Sidebar;
