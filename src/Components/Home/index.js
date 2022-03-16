import React, { useState } from 'react'
import ParathaCard from '../parathaCard'
import Header from '../Header'

export default function Home({cart,setCart}) {
    const [parathaList, setparathaList] = useState([{ "parantha": "Aloo", "id": "1", "price": "100", "img": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp" }, { "parantha": "Gobi", "id": "2", "price": "100", "img": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp" },
    { "parantha": "Paneer", "id": "3", "price": "100", "img": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp" }, { "parantha": "Muli", "id": "4", "price": "100", "img": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp" }, { "parantha": "Pyaaz", "id": "5", "price": "100", "img": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp" }, { "parantha": "Mix", "id": "6", "price": "100", "img": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp" }, { "parantha": "Anda", "id": "7", "price": "100", "img": "https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp" }])
    
    return (
        <>
         <Header/>  
            <div className='text-white font-medium text-3xl text-center'>Order Tastiest Parathas</div>
            <div className='flex flex-wrap gap-2.5'>
                {parathaList.map((paratha, index) => {
                    return <ParathaCard paratha={paratha} cart={cart} setCart={setCart}  index={index} />
                })}
            </div>
        </>
    )
}