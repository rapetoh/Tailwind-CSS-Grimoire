import ReviewCard from "../myComponents/ReviewCard";
import { customer1 } from "../assets/images";
import { customer2 } from "../assets/images";

function CustomerReviews() {
    return (
        <div className="flex flex-col items-center gap-14">
            <div className="flex flex-col justify-center items-center w-3/5">
                <h1 className="text-4xl max-lg:text-3xl font-montserrat font-bold text-center">What Our <span className="text-coral-red">Customer</span> Say?</h1>
                <p className="font-montserrat text-slate-400 w-3/5 max-lg:w-4/5 text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            </div>
            <div className="flex flex-row max-lg:flex-col gap-14 justify-center items-center">
                <ReviewCard productName="Napoleon Hill" productRate="5.0" comment="This product is amazing and very comfortable" ReviewerURL={customer1} ></ReviewCard>
                <ReviewCard productName="Simone De Beauvoire" productRate="4.8" comment="Very nice shoes for a young girl like me" ReviewerURL={customer2} ></ReviewCard>
            </div>
        </div>
    )
}
export default CustomerReviews;