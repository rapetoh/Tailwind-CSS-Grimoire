import { offer } from "../assets/images"
import Button from "../myComponents/Button"

const SpecialOffer = () => {
  return (
    <div className="flex flex-row gap-6 max-lg:flex-col items-center">
      <div className="w-2/4 max-lg:w-full">
        <img src={offer} alt="" />
      </div>
      <div className=" w-2/4 max-lg:w-full flex flex-col justify-center items-start max-lg:items-center gap-5 ">
        <h1 className="font-bold font-montserrat text-4xl max-lg:text-3xl"><span className="text-coral-red">Special</span> Offer</h1>
        <p className="text-lg max-lg:text-sm font-montserrat text-gray-500 w-3/4">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.<br /> <br />Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex flex-row gap-3 items-start">
          <Button label="View Deatils"></Button>
          <button className='flex flex-row justify-between items-center gap-3 my-3 p-3 bg-white rounded-xl hover:bg-gray-300 border-2 border-slate-600'>
            <span className='text-slate-700 font-bold'>Learn More</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer
