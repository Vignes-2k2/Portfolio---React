import Logo from "../assets/LogoVigneswara.png"
import Format from "./Clock"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full pl-[30px] pr-[20px] h-[70px] bg-black">
        <div>
           <img src={Logo} alt="Logo" className="h-[45px] header-left-animation" />
        </div>
        <div className="flex w-[150px] text-[#00f0ff] justify-between items-center pr-[30px]">
            {/* <p className="text-md header-right-animation cursor-pointer text-white font-semibold transition duration-200 ease-out hover:text-[#00f0ff] hover:ease-in hover:scale-[1.05] active:scale-[1]">HOME</p>
            <p className="text-md header-right-animation cursor-pointer text-white font-semibold transition duration-200 ease-out hover:text-[#00f0ff] hover:ease-in hover:scale-[1.05] active:scale-[1]">ABOUT</p>
            <p className="text-md header-right-animation cursor-pointer text-white font-semibold transition duration-200 ease-out hover:text-[#00f0ff] hover:ease-in hover:scale-[1.05] active:scale-[1]">PROJECTS</p> */}
            {/* <Format/> */}
        </div>
    </div>
    
  )
}

export default NavBar