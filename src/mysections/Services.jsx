import { support } from "../assets/icons"
import { truckFast } from "../assets/icons"
import { shieldTick } from "../assets/icons"
import ServiceCard from "../myComponents/ServiceCard"

const Services = () => {
  return (
    <div className="flex flex-row max-lg:flex-col justify-center items-center">
      <ServiceCard ServiceDescription="Enjoy seamless shopping with our complimentary shipping service." ServiceName="Free Shipping" ServiceURL={truckFast} ></ServiceCard>
      <ServiceCard ServiceDescription="Experience worry-free transactions with our secure payment options." ServiceName="Secure Payment" ServiceURL={shieldTick} ></ServiceCard>
      <ServiceCard ServiceDescription="Our dedicated team is here to assist you every step of the way." ServiceName="Love To Help You" ServiceURL={support} ></ServiceCard>
    </div>
  )
}

export default Services
