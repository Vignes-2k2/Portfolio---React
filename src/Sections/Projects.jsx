import SAWB from "../assets/WrapBlock.png"
import BPMS from "../assets/BrakePadMonitoringSystem.png"


const Projects = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center text-[#00f0ff]">
        <h3 className="text-center font-bold text-[60px] mb-[100px] text-white transition-all duration-500 ease-out hover:text-[#00f0ff] hover:scale-[1.07] hover:ml-[7px]" >Projects </h3>
        <div className="w-full h-full flex gap-10 justify-center">
            <div className=" rounded-xl flex flex-col px-6 py-5 justify-between transition-all ease-out duration-300 hover:scale-[1.07]">
                <span className="flex flex-col items-center">
                    <a href={SAWB} target="_blank">
                        <img src={SAWB} alt="" className="h-[300px] blur-sm" />
                    </a>
                    <div className="bg-slate-700 px-10 py-6 rounded-xl">
                        <p className="text-[30px] font-bold text-white">Semi Automatic Wrap Block</p>
                    <p className="w-[400px] flex items-center justify-center">It is an Inspection system to check the Quality of the Sliver.</p>
                    </div>
                    
                    </span>
                    
                

            </div>
            <div className=" flex flex-col px-6 py-5 justify-between items-center transition-all ease-out duration-300 hover:scale-[1.07]">
                <span className="">
                     <a href={BPMS} target="_blank">
                        <img src={BPMS} alt="" className="h-[300px] blur-sm" />
                    </a>
                    <div className="bg-slate-700 px-10 py-6 rounded-xl">
                       <p className="text-[30px] font-bold text-white">Brake Pad Monitoring System</p>
                        <p className="w-[400px] flex items-center justify-center">It is an system used to find the condition of the brake pad of an automobile.</p>  
                    </div>
                   </span>
                   
                

            </div>
           
        </div>
    </div>
  )
}

export default Projects