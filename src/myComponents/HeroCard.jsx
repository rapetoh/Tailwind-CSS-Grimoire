import React from 'react'
import { useRef } from 'react'

const HeroCard = (props) => {

    const shoeref = useRef("");

    function updateBigShoe () {
        if (shoeref.current.style.border == ""){
            let shoesArray = document.getElementsByClassName('myShoeCard');
            for(let index=0; index < shoesArray.length; index++){
                shoesArray[index].style.border = "";
            }
            shoeref.current.style.border = "2px solid red";
            document.getElementById('mainShoe').setAttribute("src", props.cardURL);
        }
    }
  return (
    <div ref={shoeref} onClick={updateBigShoe} className='border-5 border-white-400 rounded-3xl flex justify-center items-center bg-thumbnailbg bg-cover myShoeCard hover:-translate-y-3 transition-transform duration-300'>
      <img className='p-5' src={props.cardURL} alt="card-Image" />
    </div>
  )
}

export default HeroCard
