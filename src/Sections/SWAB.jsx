import SwabImage from "../Components/SwabImage"
import SwabLoading from "../Components/SwabLoading"

const SWAB = () => {
    const [state, setState] = useState(true)


    useEffect(()=>{
      const timing = setTimeout(() => { 
        setState(false)
       }, 3000)
  
       return () => {
        clearTimeout(timing)
       }
    },[])
    return (
      <div className="font-[]">
        {
            state ? <SwabLoading> : <SwabImage/>
        }
      </div>
    )
}

export default SWAB