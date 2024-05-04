import React from 'react'
import './../App.css'
import Button from './Button'

const Footer = () => {
  return (
    <div className='pt-[10rem]'>
        <div className='footer w-full h-[400px] flex flex-col justify-center items-center  p-5 '>
            <h1 className='text-4xl tracking-wide text-white font-bold p-4 '>Download the app now.</h1>
            <p className='text-xl tracking-wide pb-5 text-white  '>Available on your favorite store. Start your premium experience now</p>
            <div className='flex  gap-4 text-white text-lg pt-10'>
                <Button title="Playstore" background={"red-500"}/>
                <Button title="App Store" background={"none"}/>
            </div>
        </div>

        <div className=' flex flex-col lg:flex-row justify-between p-10 items-center'>
            <img className='hidden lg:block' width={180} height={180} src="https://s3-alpha-sig.figma.com/img/3de0/4caf/4582665240404145ae72b9255f16e36d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRcFaCjwA8J31WyrOoIt4gyexvaaMc~vOJ0W-OA5K5DyRdKvncyzZNEproafWpeFCC0v0pXq3psbhtvjaeak7VyX8zUhZnHfVbNeeSKJJV8Tn56i74a3FXy95ysC8oEpYzcsiJSRMDSVV7BehIqUkUMGOfHmWpKnyEfxUNzt5O3xBffpsOtfMJuW03yw9GIes6qbKVWIGFU1cA9F~JdBpyOy5RqD~y0Uz5ZnACXNGmhX-YcY4624R58TFrbJxmPteAA1F3GtUekw2FX1Q455d-teCBWOQVBwxX8oqgs~tUCAvU2Y1aRxZD83NYQKGp4OVGZHYWGLVin8oH7KdKc4Cw__" alt="" />
            <div className='flex gap-4 '>
                <img className='cursor-pointer' width={50} height={50} src="https://imgs.search.brave.com/50UHMRxztKA1c72flwwtrDlw9LKT1DjyEa2N92Uas8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1M2Uu/cG5n" alt="" />
                <img className='cursor-pointer' width={50} height={50} src="https://imgs.search.brave.com/jheuiv4a4zOziT7mJee6bzUIPkJbxXlTtezzJ_lmOPY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzAwLzI0LzU5/LzM2MF9GXzMwMDI0/NTk1M19TdmloMURZ/SmJ3NHYydDkyRWhE/T1R3VzRMSXFNZ2ht/eS5qcGc" alt="" />
                <img className='cursor-pointer' width={50} height={50} src="https://imgs.search.brave.com/yoSsk-oZ918MuyTkALN4zojmJfFEsAR5OZsLDFTxpZQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMzLzIxLzYx/LzM2MF9GXzMzMzIx/NjE4MF8wY0RMeTNl/WWQ0dkFmR2V2ajJm/bHJaVVR3eHBKUkZk/SC5qcGc" alt="" />
            </div>
            <p className=''>copyright@ 2024 Made By Sameer</p>

        </div>

    </div>
  )
}

export default Footer