import logo from "../assets/vscode_icon.svg";

function Navbar() {
  return (
    <div className="text-white flex px-4 justify-center border-b-[1px] border-[#191d20] h-8 items-center bg-[#1e1f29]  ">
      <div className="flex  mr-auto gap-4 justify-center items-center md:">
        <img src={logo} className="w-[15px]" alt="vscode icon" />
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>

      <div className="flex-grow flex-shrink text-center">
        Ankit Jangid-portfolio
      </div>
      <div className="ml-auto flex justify-end flex-grow flex-shrink">
        <p className="">temp</p>
      </div>
    </div>
  );
}

export default Navbar;
