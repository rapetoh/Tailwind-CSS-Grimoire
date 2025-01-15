import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className="rounded-3xl m-5 shadow-lg flex flex-col h-80 gap-5 p-9 justify-center items-start">
        <div className='rounded-full text-center bg-purple p-3'>
            <img className='m-auto' src={props.ServiceURL} alt="" />
        </div>
        <div className='font-bold font-montserrat text-xl'>
            {props.ServiceName}
        </div>
        <div className='font-montserrat text-slate-400'>
            {props.ServiceDescription}
        </div>
    </div>
  )
}

export default ServiceCard;
