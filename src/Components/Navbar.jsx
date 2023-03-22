// import logo from "../assets/vscode_icon"
import logo from "../assets/vscode_icon.svg"

function Navbar() {
    return (
      <div className="w-full text-white flex justify-between border-b-2 items-center bg-[#011627]">
        <img src={logo} className="w-[15px] mx-1" alt="" />
            <div className=" ">Ankit Jangid-portfolio</div>
            <div>temp</div>
      </div>
    );
}

export default Navbar