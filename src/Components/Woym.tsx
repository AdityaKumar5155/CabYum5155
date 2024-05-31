import { useState, useEffect } from "react"
import { woym } from "../Constants/index.ts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Woym = () => {
  const [start, setStart] = useState<Boolean>(true)
  const [end, setEnd] = useState<Boolean>(false)
  const [button, setButton] = useState<Boolean>(true)
  const scrollableDiv = document.getElementById('woym');
    const scrollRight = () => {
        let scrollDiv = document.getElementById("woym");
        scrollDiv?.scrollBy({left:400, behavior:"smooth"});
        if (button)
          setButton(false)
        else
          setButton(true)
        
    }
    const scrollLeft = () => {
      let scrollDiv = document.getElementById("woym");
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
    <div className="flex justify-center w-full">
    <div className="min-w-920 lg:w-3/5 xs:w-full m-3">
    <div className="relative w-full">
      <div className="flex text-2xl font-bold mb-2 w-full">
        What's on your mind?
        <div className="absolute right-0">
        <div className="flex w-[70px] justify-between text-sm">
        <button disabled={!!start} className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center" onClick={()=>{scrollLeft()}} > <FontAwesomeIcon  icon="arrow-left"/> </button>
        <button disabled={!!end} className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center" onClick={()=>{scrollRight()}}> <FontAwesomeIcon  icon="arrow-right"/> </button>
        </div>
        </div>
        </div>
      </div>
      <div id="woym" className="flex h-[180px] min-w-920 overflow-hidden">
      {woym.map((dish) => (
        <img className="pl-4 pr-6" src={`${dish.url}`} />
      ))
      }
      </div>
    </div>
    </div>
    </>
  )
}

export default Woym
