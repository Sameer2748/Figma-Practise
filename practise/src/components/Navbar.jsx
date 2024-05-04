import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full h-[100px] flex flex-row justify-between items-center '>
        <div>
            <img className='w-[30vw] md:h-[100px] lg:w-[180px] lg:h-[100px] ' width={230} height={230} src="https://s3-alpha-sig.figma.com/img/3de0/4caf/4582665240404145ae72b9255f16e36d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRcFaCjwA8J31WyrOoIt4gyexvaaMc~vOJ0W-OA5K5DyRdKvncyzZNEproafWpeFCC0v0pXq3psbhtvjaeak7VyX8zUhZnHfVbNeeSKJJV8Tn56i74a3FXy95ysC8oEpYzcsiJSRMDSVV7BehIqUkUMGOfHmWpKnyEfxUNzt5O3xBffpsOtfMJuW03yw9GIes6qbKVWIGFU1cA9F~JdBpyOy5RqD~y0Uz5ZnACXNGmhX-YcY4624R58TFrbJxmPteAA1F3GtUekw2FX1Q455d-teCBWOQVBwxX8oqgs~tUCAvU2Y1aRxZD83NYQKGp4OVGZHYWGLVin8oH7KdKc4Cw__" alt="" />
        </div>
        <div className='pr-10'>
            <ul className='flex flex-row gap-6 md:gap-16 lg:gap-20 '>
                <li>Home</li>
                <li>Product</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar