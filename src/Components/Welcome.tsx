

const Welcome = () => {
  return (
    <div className="w-full flex justify-center mt-16 pt-8">
        <div className="relative sm:w-4/5 w-full h-96 bg-green-300 overflow-hidden">
            <img src="welcome.jpg" alt="" />
            <div className="absolute flex flex-col justify-center items-center  z-20  bottom-0 from-black bg-gradient-to-t h-48 w-full text-white text-3xl font-bold ">
                EXPERIENCE YOUR FOOD WITH <div className="text-green-400">CABYUM DELIVERY</div>
            </div>
        </div>
    </div>
  )
}

export default Welcome
