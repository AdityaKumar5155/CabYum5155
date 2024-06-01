import { useState } from "react"

const Login = ({setLogin} :any) => {
    return (
        <>
            <form action="" className="flex min-w-[500px] flex-col justify-start w-full">
                    <input className="font-bold p-3 border rounded-xl mb-5" type="text" name="email" placeholder="E-mail Address" />
                    <input className="font-bold p-3 border rounded-xl mb-5" type="password" name="password" placeholder="Password"/>
                    <div className="mb-3" onClick={()=>{setLogin(false)}}> New User? Create a new account </div>
                    <button className="p-5 border-2 rounded-xl text-xl font-bold hover:text-white hover:bg-green-400">
                        Login
                    </button>
            </form>
        </>
    )
}

const Register = ({setLogin} :any) => {
    return (
    <>
            <form action="" className="flex min-w-[500px] flex-col justify-start w-full ">
                    <input className=" font-bold p-3 border rounded-xl mb-5" type="text" name="name" placeholder="name" />
                    <input className="font-bold p-3 border rounded-xl mb-5" type="email" name="email" placeholder="E-mail Address" />
                    <input className="font-bold p-3 border rounded-xl mb-5" type="password" name="password" placeholder="Password"/>
                    
                    <input className="font-bold p-3 border rounded-xl mb-5" type="password" name="cpassword" placeholder="Confirm Password"/>
                    <div className="mb-3 text-gray-500 " onClick={()=>{setLogin(true)}}> Already have an account? Login Now </div>
                    <button className="p-5 border-2 rounded-xl text-xl font-bold hover:text-white hover:bg-green-400">
                        Register
                    </button>
            </form>
    </>
    )
}


const RLOverlay = ({setOverlay} :any) => {
    const [login,setLogin] = useState(true)
  return (
    <div className=" fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] flex justify-center items-center ">
        <div className="flex relative items-center p-10 justify-center flex-col  rounded-tl-xl rounded-br-xl bg-white"> 
        <div className="font-bold absolute flex justify-center items-center right-5 top-5 w-9 h-9 rounded-full bg-green-300" onClick={()=>setOverlay(false)}>
            X
        </div>
            <div className="flex w-full justify-start  text-3xl font-bold mb-5">
                Getting &nbsp; <span className="-ml-2 text-green-400">Hungry?</span> 
            </div>
            <div className="w-full">
                {login? (<Login setLogin={setLogin} />) : (<Register setLogin={setLogin} />)}
            </div>
        </div>
    </div>
  )
}

export default RLOverlay
