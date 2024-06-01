import { Tilt } from "react-tilt"

const LeftServiceCard = () => {
    return (
        <>
            <div className="flex w-full h-96 justify-center items-center py-8 ">
                <div className="w-4/5">
                <Tilt options={{max:45, speed:20, scale:1}} className="bg-[url('bg/1.webp')] flex w-3/4  h-80  shadow-all rounded-xl shadow-gray-400">
                    <div className="flex flex-col justify-center w-2/3 h-80  text-black font-md p-4">
                        <div className="text-3xl my-2 font-bold">
                            SERVICE TITLE
                        </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        
                    </div>
                    <div className="w-1/3 h-80 ">
                        <img src="logo.png" alt="" />
                    </div>
                </Tilt>
                </div>
            </div>
        </>
    )
}

export default LeftServiceCard