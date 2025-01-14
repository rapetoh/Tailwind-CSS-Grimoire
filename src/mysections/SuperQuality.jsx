import { shoe8 } from "../assets/images"
import Button from "../myComponents/Button"


const SuperQuality = () => {
  return (
    <div className="flex flex-row gap-16 items-center max-lg:flex-col">
      <div className="flex flex-col justify-start items-start w-2/5 max-lg:w-4/5">
        <h1 className="text-4xl max-lg:text-3xl font-bold font-montserrat my-6">We Provide You <span className="text-coral-red font-bold font-montserrat">Super Quality</span> Shoes</h1>
        <p className="font-montserrat">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <br />
        <p className="font-montserrat mb-10">Our dedication to detail and excellence ensures your satisfaction.</p>
        <Button label="View Details"></Button>
      </div>
      <div className="rounded-3xl h-4/5 mx-16">
        <img src={shoe8} alt="shoe8" />
      </div>
    </div>
  )
}

export default SuperQuality
