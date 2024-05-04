import React from 'react'


const Button = ({title, background}) => {
  return (
    <div>
        <button className={`w-[120px] md:[140px] lg:w-[190px] h-[50px] rounded-full  bg-${background} border border-white  `}>
            {title}
        </button>
    </div>
  )
}

export default Button