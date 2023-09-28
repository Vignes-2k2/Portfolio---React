import { useState, useEffect } from "react"

import LandingHome from "./Sections/LandingHome"
import Landing from "./Components/Landing"

function App() {
  const [state, setState] = useState(true)


  useEffect(()=>{
    const timing = setTimeout(() => { 
      setState(false)
     }, 4500)

     return () => {
      clearTimeout(timing)
     }
  },[])
  return (
    <div className="font-[]">
    {
      state ? <LandingHome/> : <Landing/>
    }
    
    </div>
  )
}

export default App
