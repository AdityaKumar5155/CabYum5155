import { useState, useEffect, FC } from "react"
import { woym } from "../Constants"
import "../addons/fontAwesome.ts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Restaurant from "./Restaurant.tsx"

interface IPopularProps {
    city : string
}


const Popular : FC<IPopularProps>= ({city}) => {
  const [start, setStart] = useState<Boolean>(true)
  const [end, setEnd] = useState<Boolean>(false)
  const [button, setButton] = useState<Boolean>(true)
  const scrollableDiv = document.getElementById('popular');
    const scrollRight = () => {
        let scrollDiv = document.getElementById("popular");
        scrollDiv?.scrollBy({left:400, behavior:"smooth"});
        if (button)
          setButton(false)
        else
          setButton(true)
        
    }
    const scrollLeft = () => {
      let scrollDiv = document.getElementById("popular");
      scrollDiv?.scrollBy({left:-400, behavior:"smooth"});
      if (button)
        setButton(false)
      else
        setButton(true)
  }
  useEffect(() => {
    if (scrollableDiv){
      const scrollLeft = scrollableDiv.scrollLeft;
      const scrollWidth = scrollableDiv.scrollWidth;
      const clientWidth = scrollableDiv.clientWidth;

      if (scrollLeft === 0) {
          setStart(true);
          setEnd(false);
      } else if (scrollLeft + clientWidth >= scrollWidth-1) {
          setStart(false);
          setEnd(true)
      } else {
          setStart(false);
          setEnd(false);
      }
      console.log(start, end)
    }
  },[button]);
  return (
    <>
    <div className="flex justify-center w-full ">
    <div className="min-w-920 lg:w-3/5 xs:w-full m-3">
    <div className="relative w-full">
      <div className="flex text-2xl font-bold mb-2 w-full text-orange-600">
      {`Top restaurant chains in ${city}`}
        <div className="absolute right-0 text-white">
        <div className="flex w-[70px] justify-between text-sm">
        <button disabled={!!start} className="rounded-full bg-orange-600 w-8 h-8 flex items-center justify-center" > <FontAwesomeIcon  onClick={()=>{scrollLeft()}} icon="arrow-left"/> </button>
        <button disabled={!!end} className="rounded-full bg-orange-600 w-8 h-8 flex items-center justify-center"> <FontAwesomeIcon onClick={()=>{scrollRight()}} icon="arrow-right"/> </button>
        </div>
        </div>
        </div>
      </div>
      <div id="popular" className="flex min-w-920 overflow-hidden py-2 ">
      {woym.map((_) => (
        <div>
        <Restaurant name="hello" rating={5} loc="Patna" type="Pizzas" imgURL="restaurants/PizzaHut.avif" time="35-40 mins" offer="Save 50% upto 500"  />
        </div>
      ))
      }
      </div>
    </div>
    </div>
    </>
  )
}

export default Popular
