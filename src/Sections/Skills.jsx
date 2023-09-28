import C from "../assets/Skills/c-.png"
import Python from "../assets/Skills/python.png"
import HTML from "../assets/Skills/html.png"
import CSS from "../assets/Skills/css-3.png"
import JS from "../assets/Skills/js.png"
import SQL from "../assets/Skills/logo-mysql-26353.png"
import CAD from "../assets/Skills/AutoCAD.jpg"
import SW from "../assets/Skills/SolidWorks-Logo.png"
import TW from "../assets/Skills/TinkerCAD.png"
import tailwind from "../assets/Skills/tailwind-css-2.svg"
import Figma from "../assets/Skills/figma.png"
import Canva from "../assets/Skills/Canva.png"




const Skills = () => {
  return (
    <div className="flex w-full h-[100vh] flex-col items-center mt-20 gap-4">
        <h3 className="mt-10 font-bold text-[60px] text-white transition-all duration-500 ease-out hover:text-[#00f0ff] hover:scale-[1.07]          ">Technologics</h3>
        <div className="w-[55%] h-[350px] grid grid-cols-4 gap-4 mt-10">
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={C} alt="" className="w-[70px] h-[70px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={Python} alt="" className="w-[70px] h-[70px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={HTML} alt="" className="w-[60px] h-[60px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={CSS} alt="" className="w-[60px] h-[60px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={JS} alt="" className="w-[60px] h-[60px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={SQL} alt="" className="w-[70px] h-[70px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={CAD} alt="" className="w-[70px] h-[70px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={SW} alt="" className="w-[70px] h-[70px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={TW} alt="" className="w-[75px] h-[75px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={tailwind} alt="" className="w-[65px] h-[65px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={Figma} alt="" className="w-[65px] h-[65px] bg-white" /></div>
            <div className="flex w-[120px] h-[120px] items-center justify-center bg-white rounded-full mt-[20px] hover:scale-[1.05]"><img src={Canva} alt="" className="w-[65px] h-[65px] bg-white" /></div>
        </div>
        
    </div>
  )
}

export default Skills