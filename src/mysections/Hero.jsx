import Button from "../myComponents/Button"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { bigShoe2 } from "../assets/images"
import { bigShoe3 } from "../assets/images"
import HeroCard from "../myComponents/HeroCard"
import { toast } from "react-toastify"


const Hero = () => {

  

  return (
    <div id="home" className="flex xl:padding-x xl:flex-row flex-col justify-center min-h-screen gap-10 border-8 border-[#9370DB] rounded-3xl">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl text-purple">Our Summer Collection</p>
        <h1 className="text-8xl font-bold my-10 max-sm:text-4xl max-sm:text-wrap">
          <span className=" bg-white pr-10 z-10 no-text-nowrap rounded-full max-sm:text-wrap">
            The&nbsp;New&nbsp;Arrival
          </span><br />
          <span className="text-purple">
            Nike&nbsp;
          </span>
          Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray sm:max-w-sm mb-5">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label='Shop Now' theURL={arrowRight}></Button>
        <div className="flex flex-row gap-16 items-center justify-start my-10 py-5 max-sm:flex-col max-sm:gap-7 max-sm:items-start">
          <div>
            <p className="text-4xl font-montserrat font-bold max-sm:text-4xl">1k+</p>
            <p className="font-semibold text-gray-500">Brands</p>
          </div>
          <div>
            <p className="text-4xl font-montserrat font-bold max-sm:text-4xl">500+</p>
            <p className="font-semibold text-gray-500">Shops</p>
          </div>
          <div>
            <p className="text-4xl font-montserrat font-bold max-sm:text-4xl">250k+</p>
            <p className="font-semibold text-gray-500">Customers</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-hero rounded-3xl">
        <img id="mainShoe" src={bigShoe1} alt="bigshoe1" className="p-10 relative" />
        <div className="flex gap-8 w-4/5 relative z-10 top-10">
          <HeroCard cardURL={bigShoe1} ></HeroCard>
          <HeroCard cardURL={bigShoe2} ></HeroCard>
          <HeroCard cardURL={bigShoe3} ></HeroCard>
        </div>
      </div>
    </div>
  )
}

export default Hero
