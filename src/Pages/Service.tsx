import Footer from "../Components/Footer"
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
        <Footer />
        </div>
    </>
  )
}

export default Service
