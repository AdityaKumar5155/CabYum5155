import LeftServiceCard from "../Components/LeftServiceCard"
import RightServiceCard from "../Components/RightServiceCard"
import Welcome from "../Components/Welcome"


const Service = () => {
  return (
    <>
        {/* <Header /> */}
        <div className="">
        <Welcome />
        <RightServiceCard />
        <LeftServiceCard />
        <RightServiceCard />
        <LeftServiceCard />
       
        </div>
    </>
  )
}

export default Service
