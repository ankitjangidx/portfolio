import React from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";


function Body() {
    return (
      <div className="flex ">
        <Sidebar />
     <Content />
      </div>
    );
}

export default Body;
