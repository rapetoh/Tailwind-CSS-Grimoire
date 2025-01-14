import { star } from "../assets/icons";


const ProductCard = (props) => {
  return (
    <div className="p-6 flex flex-col gap-2 justify-center items-center border-2 border-white rounded-3xl shadow-xl">
        <div className="h-3/5 rounded-3xl flex justify-center items-center bg-thumbnailbg bg-cover m-5">
            <img src={props.productURL} alt="" />
        </div>
        <span className="flex flex-row"><img src={star} alt="" />&nbsp;{props.productRate}</span>
        <p className="font-bold font-montserrat text-center">{props.productName}</p>
        <p className="text-coral-red text-2xl font-bold font-montserrat">{props.productPrice}</p>
    </div>
  )
}

export default ProductCard;
