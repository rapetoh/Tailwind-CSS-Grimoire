import React from 'react'
import { star } from '../assets/icons';

const ReviewCard = (props) => {
    return (
        <div className="p-6 w-2/5 max-lg:w-4/5 flex flex-col gap-4 justify-center items-center border-2 border-white rounded-3xl shadow-xl">
            <div className="h-24 w-24 overflow-hidden mb-2 rounded-full flex border-4 border-purple justify-center items-center p-1">
                <img className='w-full h-full rounded-full object-cover' src={props.ReviewerURL} alt="" />
            </div>
            <p className="text-slate-700 text-base font-montserrat text-center">{props.comment}</p>
            <span className="flex flex-row"><img src={star} alt="" />&nbsp;{props.productRate}</span>
            <p className="text-purple font-bold font-montserrat text-center">{props.productName}</p>
        </div>
    )
}

export default ReviewCard;
