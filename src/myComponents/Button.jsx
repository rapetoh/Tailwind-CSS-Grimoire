import React from 'react'

const Button = (props) => {
  return (
    <button className='flex flex-row justify-between items-center gap-3 my-3 p-3 bg-coral-red rounded-xl hover:bg-red-500 hover:shadow-red-300'>
        <span className='text-white font-bold'>{props.label}</span>
        {props.theURL?<img src={props.theURL}/>:""}
    </button>
  )
}

export default Button;
