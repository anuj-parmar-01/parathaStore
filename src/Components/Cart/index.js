import React from 'react'
import ParathaCard from '../parathaCard'

export default function Cart({cart,setCart}){

    console.log(cart,'inside cart')
    return (<>
    <div className='flex flex-wrap'>
    {cart.map((paratha,index)=> {
        return <ParathaCard paratha={paratha} cart={cart} setCart={setCart} index={index}/>
    })}
    </div>
   
    </>)
}