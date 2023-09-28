import { useState, useEffect } from "react"


const Format = () => {

    const [time, setTime] = useState(new Date())
    const formatTime = {
        hour: '2-digit',
        minute: '2-digit', 
        second: "2-digit", 
        hour12: false
    }
    const print = (f) => {
        console.log(f);
        }
        
    useEffect(()=>{
        const timing = setInterval(()=> {
            setTime(new Date())
        },1000)

        return () => clearInterval(timing)
        }
    ,[])
  return (
    <div className="flex w-full h-z justify-between items-center w-[50px] text-[50px] font-bold text-[#00f0ff]  ">
        <div className="time-container">
             <p>{time.getHours().toString().padStart(2, '0')}</p>
        </div>
        <p className="text-[50px] font-bold m-0 p-0">:</p>
        <div className="time-container">
            <p>{time.getMinutes().toString().padStart(2, '0')}</p>
        </div>
        {/* <p className="text-[10px] font-bold m-0 p-0">:</p>
        <div className="time-container">
            <p>{time.getSeconds().toString().padStart(2, '0')}</p>
        </div > */}
    </div>
  )
}

export default Format