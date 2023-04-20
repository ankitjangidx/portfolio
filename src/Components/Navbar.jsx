import logo from "../assets/vscode_icon.svg";

function Navbar() {
  return (
    <div className=" flex text-sm justify-center items-center h-full text-white px-2 border-b-[1px] border-[#191d20]  bg-[#1e1f29]  ">
      <img src={logo} className="w-[15px]" alt="vscode icon" />
      <div className="hidden flex-1 md:flex cursor-pointer mr-auto ml-2  gap-4 ">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>

      <div className="grow-[4] shrink-[1] text-center md:flex-1 ">
        Ankit Jangid-portfolio
      </div>
      <div className="ml-auto flex items-center  md:flex-1">
        <span className="w-3 h-3 ml-auto rounded-full bg-[#f1fa8c]"></span>
        <span className="w-3 h-3 ml-2 rounded-full bg-[#50fa7b]"></span>
        <span className="w-3 h-3 ml-2  rounded-full bg-[#f55]"></span>
      </div>
    </div>
  );
}

export default Navbar;
