import Header from "../Components/Header"
import Index from "../Pages/Index"
import {Routes, Route} from 'react-router-dom'
import Service from "../Pages/Service"
import RLOverlay from "../Components/RLOverlay"
import { useState } from "react"
import Career from "../Pages/Career"

const Laptop = () => {
  const [loggedIn, _] = useState<Boolean>(false)
  const [toggleOverlay, setOverlay] = useState<Boolean>(false)
  return (
    <>
        <Header setOverlay={setOverlay} />
        {!loggedIn && toggleOverlay? <RLOverlay setOverlay={setOverlay} /> : 0}
        <Routes>
          <Route index element={<Index />} />
          <Route path="/service" element={<Service />} />
          <Route path="/career" element={<Career />} />
        </Routes>
    </>
  )
}

export default Laptop
