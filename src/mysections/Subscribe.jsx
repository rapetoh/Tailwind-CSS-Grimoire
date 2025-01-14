
const Subscribe = () => {
  return (
    <div className="flex flex-row gap-15 max-lg:flex-col max-lg:gap-5 max-lg:justify-center max-lg:items-center">


      <div className="flex justify-start w-2/5 max-lg:w-4/5">
        <h1 className="text-4xl font-bold font-montserrat max-lg:text-3xl max-lg:text-center"> Sign Up from <span className="text-coral-red">Updates</span> & Newsletter</h1>
      </div>

      <div className="flex flex-row w-2/5 justify-end items-center max-lg:justify-center">
        <form action="#" className="flex flex-row border-2 border-gray-400 rounded-3xl p-3">
          <input className="p-3 m-3 focus:outline-none" type="text" placeholder="subscribe@nike.com" name="" id="" />  
          <button className='flex flex-row justify-between items-center gap-3 my-3 p-3 bg-coral-red rounded-xl hover:bg-red-500 hover:shadow-red-300'>
            <span className='text-white font-bold'>Sign Up</span>
          </button>
        </form>
      </div>


    </div>
  )
}

export default Subscribe;
