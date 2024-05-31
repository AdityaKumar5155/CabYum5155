import { FC } from "react"
import "../addons/fontAwesome.ts"
// import InfiniteScroll from "./InfiScroll.tsx"

interface IrestaurantsProps {
    city : string
}

const Restaurants : FC<IrestaurantsProps> = ({city}) => {
  return (
    <>
    <div className="flex justify-center w-full">
    <div className="min-w-920 lg:w-3/5 xs:w-full m-3">
    <div className="relative w-full">
      <div className="flex text-2xl font-bold mb-2 w-full">
       {`Restaurants with online food delivery in ${city}`}
        </div>
      </div>
      <div className="flex min-w-920 overflow-hidden py-2 flex-wrap">
      {/* <InfiniteScroll /> */}
      </div>
    </div>
    </div>
    </>
  )
}

export default Restaurants
