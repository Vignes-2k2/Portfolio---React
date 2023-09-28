import Profile from "../assets/Profile.png"


const paragraph = [
    {
        title: "About",
        content: "Final Year Student with knowledge in both Software and Hardware Technologies."
    },
    {
        title: "Career Objective",
        content: "To secure a responsible career where I can leverage my technical skills, education, and passion for technology for the success of the company."
    }
]

const marks =[
    {
        year: "SSLC",
        percent: 84.8
    },
    {
        year: "HSC",
        percent: 69.5
    },
    {
        year: "BE Mechatronics Engineering",
        percent: 84
    }
]


const About = () => {
  return (
    <div className="w-full h-[100vh] flex">
        <div className="sticky w-[50%] bg-black flex justify-center items-center"> {/* About left Section Image */}
            <img src={Profile} alt=""  className="h-[450px] about-animation"/>
        </div>

        <div className="w-[50%] h-[100vh] pt-[50px] text-white overflow-y-scroll"> {/* About Right Section */}
            {
                paragraph.map((c)=> {
                    return(
                        <>
                            <div className="mb-[30px]">
                                <span className="text-[40px] font-bold text-[#00f0ff] flex gap-2 items-end cursor-pointer title-Name">|<h3 className="font-bold text-[30px] text-white transition-all duration-500 ease-out hover:text-[#00f0ff] hover:scale-[1.07] hover:ml-[7px]" >{c.title}</h3></span>
                                <p className="indent-8 mt-4 text-lg w-[700px]">{c.content}</p>
                            </div>
                        </>
                    )
                })
            }
            <div className="mb-[30px]">
                <span className="mb-4 text-[40px] font-bold text-[#00f0ff] flex gap-2 items-end cursor-pointer title-Name">|<h3 className="font-bold text-[30px] text-white transition-all duration-500 ease-out hover:text-[#00f0ff] hover:scale-[1.07] hover:ml-[7px]" >Educational Qualifaction</h3></span>
                {
                    marks.map((e)=> {
                        return (
                            <>
                            <div className="px-[20px] mb-[20px]">
                                <p className="text-white text-[18px] font-bold mb-2">{e.year}</p>
                                <div className="w-[400px] h-[30px] bg-gray-500 rounded-sm">
                                     <div className="h-full bg-[#00f0ff] rounded-md px-4 flex items-center justify-end" style={{ width: `${e.percent}% ` }}>
                                         <p className="text-black font-semibold">{e.percent+"%"}</p>
                                     </div>
                                 </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="mb-[30px]">
                <span className="text-[40px] font-bold text-[#00f0ff] flex gap-2 items-end cursor-pointer title-Name mb-5">|<h3 className="font-bold text-[30px] text-white transition-all duration-500 ease-out hover:text-[#00f0ff] hover:scale-[1.07] hover:ml-[7px]" >Achievements</h3></span>
                <div className="flex gap-5 ml-8">
                    <div className="w-[200px] h-[300px] rounded-lg bg-slate-700 px-5 py-4">
                        <span className="flex text-[40px] font-bold text-[#00f0ff] mb-[20px]">1<p className="flex text-white text-xl">st</p></span>
                         <p className="text-sm text-[#00f0ff]">Ideathon Conducted by MCEA</p>
                         <p className="text-2xl font-semibold">An Assistive wheel chair for Muscular Dystrophy</p>
                    </div>
                    <div className="w-[200px] h-[300px] rounded-lg bg-slate-700 px-5 py-4">
                        <span className="flex text-[40px] font-bold text-[#00f0ff] mb-[20px]">3<p className="flex text-white text-xl">rd</p></span>
                         <p className="text-sm text-[#00f0ff]">HENOSIS'22</p>
                         <p className="text-2xl font-semibold">Automatic wall climbing robot</p>
                    </div>
                    
                </div>
            </div> 
            <div className="mb-[30px]">
                <span className="text-[40px] font-bold text-[#00f0ff] flex gap-2 items-end cursor-pointer mb-8 title-Name">|<h3 className="font-bold text-[30px] text-white transition-all duration-500 ease-out hover:text-[#00f0ff] hover:scale-[1.07] hover:ml-[7px]" >Presented</h3></span>
                <div className="flex flex-row ml-8 gap-y-5">
                    <div className="flex justify-between p-4 items-center w-[500px] h-[80px] rounded-lg bg-slate-700 mb-[14px]">
                        <p className="text-xl text-white font-semibold">No of Papers:</p>
                        <p className="px-5 py-3 bg-slate-900 font-bold text-xl rounded-md text-[#00f0ff]">5</p>
                    </div>
                </div>
                <div className="flex flex-row ml-8">
                    <div className="flex justify-between p-4 items-center w-[500px] h-[80px] rounded-lg bg-slate-700 mb-[14px]">
                        <p className="text-xl text-white font-semibold">No of Projects:</p>
                        <p className="px-5 py-3 bg-slate-900 font-bold text-xl rounded-md text-[#00f0ff]">4</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About