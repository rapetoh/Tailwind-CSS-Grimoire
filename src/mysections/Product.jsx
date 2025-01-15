import ProductCard from "../myComponents/ProductCard"
import { shoe4 } from "../assets/images"
import { shoe5 } from "../assets/images"
import { shoe6 } from "../assets/images"
import { shoe7 } from "../assets/images"

const Product = () => {
  return (
    <div className="flex flex-col gap-10 my-5">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-4xl max-sm:text-3xl font-bold font-montserrat mb-2">
          Our <span className="text-purple">Popular</span> Products
        </h1>
        <p className="max:sm:text-base max-sm:w-4/5 max-lg:w-4/5 w-2/5 text-slate-600 font-montserrat">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
      </div>
      <div className="flex flex-row max-lg:flex-wrap justify-center  gap-6">
        <ProductCard productURL={shoe4} productRate="(4,5)" productName="Nike-Air-Jordan-152" productPrice="$ 522" ></ProductCard>
        <ProductCard productURL={shoe5} productRate="(4,5)" productName="Nike-Air-Jordan-001" productPrice="$ 200.02" ></ProductCard>
        <ProductCard productURL={shoe6} productRate="(4,5)" productName="Nike-Air-Jordan-45" productPrice="$ 410.20" ></ProductCard>
        <ProductCard productURL={shoe7} productRate="(4,5)" productName="Nike-Air-Jordan-147" productPrice="$ 410.0" ></ProductCard>
      </div>
    </div>
  )
}

export default Product
