import React from 'react';
import styles from './parathaCard.module.css'

export default function ParathaCard(props) {

    const removeItemFromCart = () => {
        let NewCartItems = props.cart.filter(e => e.id !== props.paratha.id)
        props.setCart(NewCartItems)
    }

    return (
        <>
            <div className={styles.container}>
                <div>
                    <img src='https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp' alt='paratha img' />
                </div>
                <div className='p-4 text-center text-white'>
                    <h1 className='text-2xl font-semibold mt-2'>{props.paratha.parantha}</h1>
                    <div className='text-xl font-medium mt-2'>Rs. {props.paratha.price}</div>
                    {props.cart.find(e => e.id === props.paratha.id) ? (
                        <button onClick={removeItemFromCart} className='w-2/4 bg-red-800 text-white h-9 font-medium mt-2'>Remove from Cart</button>)
                        : (<button onClick={() => props.setCart([...props.cart, props.paratha])} className='w-2/4 bg-red-800 text-white h-9 font-medium mt-2'>Add To Cart</button>

                        )}
                </div>
            </div>
        </>
    )
}