
const CareerForm = () => {
  return (
    <div className="w-full flex justify-center bg-white  ">
      <div className="w-4/5 flex justify-center min-w-[600px] bg-[url('bg/1.webp')] bg-no-repeat bg-cover p-6">
      <form action="" className=" w-[600px] flex justify-center items-center flex-col py-6"> 
        <div className="flex w-full justify-between "> <input placeholder="First Name" className=" bg-green-100 text-black w-[300px] mr-3 my-3 p-3 rounded-xl" type="text" name="fname" /> <input placeholder="Last Name" className="bg-green-100 text-black  ml-3 my-3 p-3 rounded-xl w-[300px]" type="text" name="lname" /></div>
        <div className=" flex w-full justify-between"> <input placeholder="E-mail Address" className="bg-green-100 text-black  w-[300px] mr-3 my-3 p-3 rounded-xl" type="text" name="fname" /> <input placeholder="Mobile Number" className="bg-green-100 text-black  ml-3 my-3 p-3 rounded-xl w-[300px]" type="text" name="lname" /></div>
        <input placeholder="Street Address" className=" bg-green-100 text-black  my-3 w-full py-3 px-3 rounded-xl" type="text" name="address" />
        <div className="flex w-full justify-between"> <input placeholder="City" className="bg-green-100 text-black  w-[300px] mr-3 my-3 p-3 rounded-xl" type="text" name="fname" /> <input placeholder="State" className="bg-green-100 text-black  ml-3 my-3 p-3 rounded-xl w-[300px]" type="text" name="lname" /></div>
        <div className="flex w-full justify-between"> <input placeholder="ZipCode" className="bg-green-100 text-black  w-[300px] mr-3 my-3 p-3 rounded-xl" type="text" name="fname" /> <input placeholder="Country" className="bg-green-100 text-black  ml-3 my-3 p-3 rounded-xl w-[300px]" type="text" name="lname" /></div>
        <textarea placeholder="About Yourself" className="h-48 bg-green-100 text-black  my-3 w-full py-3 px-3 rounded-xl" name="about" />
        <div className=" flex w-full justify-between">
        <label htmlFor="dl" className="bg-green-100 text-black p-3 rounded-xl">
            Aadhar Card
        </label>
        <input id="dl" name="dl" type="file" className="hidden bg-orange-300 text-black p-3 rounded-xl" />
        <label htmlFor="dl" className="bg-green-100 text-black p-3 rounded-xl">
            Driving License
        </label>
        <input id="dl" name="dl" type="file" className="hidden bg-orange-300 text-black p-3 rounded-xl" />
        <label htmlFor="dl" className="bg-green-100 text-black p-3 rounded-xl">
            Resume/CV
        </label>
        <input id="dl" name="dl" type="file" className="hidden  text-black p-3 rounded-xl" />
        </div>
        <div className="w-full my-6 relative"> 
        <button className="absolute w-full py-3 bg-green-100 text-black font-bold rounded-xl border-2 hover:bg-green-400">
            Apply
        </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default CareerForm
