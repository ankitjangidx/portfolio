import file from "../assets/file.svg"
import setting from "../assets/setting.svg"
import github from "../assets/github.svg"
import profileicon from "../assets/profileicon.svg"
import code from "../assets/code.svg"
import email from "../assets/email.svg"

function Sidebarl() {
  return (
    <div>
      <div className="w-[48px] flex flex-col h-full justify-between py-4 border-r-[1px] border-[#191d20] bg-[#343746]">
        <div className="flex flex-col items-center gap-[15px]  cursor-pointer justify-center">
          <img src={file} alt="" />
          <img src={github} alt="" />
          <img src={code} alt="" />
          <img src={email} alt="" />
        </div>
        <div className="flex flex-col items-center cursor-pointer gap-[15px] justify-center">
          <img src={profileicon} alt="" />
          <img src={setting} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebarl