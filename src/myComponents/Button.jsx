import React from 'react'
import { toast } from 'react-toastify';

const Button = (props) => {


  const notifyInfo = () => {
    toast.info("Info😃: This is a clone page and not an official Nike Page. Buttons are for demonstration purposes only.");
  };

  return (
    <button onClick={notifyInfo} className='flex flex-row justify-between items-center gap-3 my-3 p-3 bg-purple rounded-xl hover:bg-red-500 hover:shadow-red-300'>
        <span className='text-white font-bold'>{props.label}</span>
        {props.theURL?<img src={props.theURL}/>:""}
    </button>
  )
}

export default Button;
