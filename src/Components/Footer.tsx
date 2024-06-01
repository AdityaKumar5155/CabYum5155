
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex w-full h-800  items-center bg-gray-800">
      <div className="flex justify-center items-center w-1/3 h-80 px-6 border-t-2 border-gray-700">
        <div className="relative  w-1/3 ">
          <img src="cabyum.png" alt="" />
        </div>
        <div className="relative w-2/3 ">
          <div className="absolute inset-0  flex items-center justify-center text-orange-400 font-bold text-6xl" >
            CAB <span className="text-green-400">YUM</span> 
          </div>
        </div>
      </div>
      <div className="flex w-2/3 h-80 ">
      <div className="flex flex-col w-1/2 h-80 justify-center px-8 border-x-2 border-t-2  border-gray-700 text-white">
        <div className="text-2xl font-bold mb-4">
          IMPORTANT LINKS
        </div>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/FAQ">FAQ</Link>
          <Link to="/tnc">Terms & Conditions</Link>
          <Link to="/career">Work with Us</Link>
          <Link to="/cancelandrefund">Cancellation & Refund Policy</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
        </div>
        <div className="flex flex-col w-1/2 h-80 justify-center items-center px-8 border-t-2 border-gray-700 text-white">
          <div className="text-2xl font-bold mb-10">
            DOWNLOAD THE APP
          </div>
          <div className="">
            <img src="playstore.png" className="h-16 mb-10"/>
          </div>
          <div className="">
            <img src="appstore.png" className="h-16"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
