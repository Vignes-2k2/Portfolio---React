import LoadingGIF from "../assets/Vigneswara.gif"

const LandingHome = () => {
  return (
    <div className="flex bg-black w-full h-[100vh] justify-center items-center Loading-animation">
        {
            <img src={LoadingGIF} alt="Loading" className="h-[200px]"/>
        }
    </div>
  )
}


export default LandingHome