import Footer from "../Components/Footer"

import Popular from "../Components/Popular"
import Restaurants from "../Components/Restaurants"
import Welcome from "../Components/Welcome"
import Woym from "../Components/Woym"


const Index = () => {
  return (
    <>
        {/* <Header /> */}
        <div className=" bg-no-repeat bg-cover">
        <Welcome />
        <Woym />
        <Popular city="Patna" />
        <Restaurants city="Patna" />
        <Footer />
        </div>
    </>
  )
}

export default Index
