import Typewriter from 'typewriter-effect';
import ProfilePic from "../assets/Vigneswara-to-use.png"
import VignesResume from "../assets/VigneswaraG.pdf"

import whatsapp from "../assets/Icons/logo-whatsapp.svg"
import instagram from "../assets/Icons/logo-instagram.svg"
import linkedin from "../assets/Icons/logo-linkedin.svg"
import github from "../assets/Icons/logo-github.svg"
import gmail from "../assets/Icons/logo-gmail.svg"

const Home = () => {
  return (
    <div className="flex w-full h-[90vh] transition ease-in-out bg-black font-semibold font-style"> 
        <div className='text-white w-[50%] flex flex-col justify-center items-start pl-[80px]'> {/* Left Section */}
        <p className='text-[60px] home-slider-1'>Hey,</p>
        <div className='flex gap-5 text-[#00f0ff] text-[90px] home-slider-2'> {/* TypeWriter effect */}
            <p className='text-white'>I'm</p>
            <Typewriter
                options = {{
                    loop:true
                }}
                onInit={(typewriter) => {
                typewriter
                .typeString("Vigneswara")
                .pauseFor(1500)
                .deleteAll()
                .typeString("a  Student")
                .pauseFor(1000)
                .deleteAll()
                .typeString("a Designer")
                .pauseFor(1000)
                .start();
                }}
            />
        </div>
            <a href={VignesResume} target='_blank' className='home-button-animation'>
                <button type='download' className='text-md px-[25px] py-[8px] bg-[#00f0ff] text-black font-bold rounded-[4px] mt-[30px]'>Look CV</button>
            </a>
            <div className='flex gap-[3px]'>
                <a href="https://instagram.com/___vigneswara_gopalsamy_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><img src={instagram} alt="" className='h-[35px] mt-[25px] p-[3px] rounded-full hover:scale-[1.1] home-social-animation'/></a>
                <a href="https://api.whatsapp.com/send?phone=9786521314" target="_blank"><img src={whatsapp} alt="" className='h-[35px] mt-[25px] p-[3px] rounded-full hover:scale-[1.1] home-social-animation'/></a>
                <a href="https://github.com/Vignes-2k2" target="_blank"><img src={github} alt="" className='h-[35px] mt-[25px] p-[3px] rounded-full hover:scale-[1.1] home-social-animation'/></a>
                <a href="https://www.linkedin.com/in/vigneswara-g-89860921a" target="_blank"><img src={linkedin} alt="" className='h-[35px] mt-[25px] p-[3px] rounded-full hover:scale-[1.1] home-social-animation'/></a>
                <a href="mailto:vigneswara.workplaces@gmail.com" target="_blank"><img src={gmail} alt="" className='h-[35px] mt-[25px] p-[3px] rounded-full hover:scale-[1.1] home-social-animation'/></a>
            </div>
        </div>
        <div className='w-[50%] flex justify-center items-center pb-[50px]'> {/* Right Section */}
            <a href={VignesResume} target='_blank'>
                <img src={ProfilePic} alt="Profile" className='h-[500px] ease-out hover:transition hover:ease-out hover:duration-300 drop-shadow-[2px_-20px_200px_rgba(0,240,255,0.7)] rounded-b-[10px] home-animation-img'/>
            </a>
        </div>

    </div>
  )
}

export default Home