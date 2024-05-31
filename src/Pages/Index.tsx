import Header from "../Components/Header"
import Popular from "../Components/Popular"
import Restaurants from "../Components/Restaurants"
import Welcome from "../Components/Welcome"
import Woym from "../Components/Woym"


const Index = () => {
  return (
    <>
        <Header />
        <Welcome />
        <Woym />
        <Popular city="Patna" />
        <Restaurants city="Patna" />

    </>
  )
}

export default Index
