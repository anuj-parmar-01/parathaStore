import React, { useState } from 'react'
import styles from './Cart.module.css'

export default function SingleCartItem({ cart, setcart, paratha }) {
    const [quantity, setQuantity] = useState(1);
    let addon = ['Corn', 'Cabbage', 'Fenugreek', 'Cheese']

    const reduceQuantity = () => {
        setQuantity(quantity - 1)
    }
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const removeFromCart = () => {
        let newCartItems = cart.filter(e => e.id !== paratha.id)
        setcart(newCartItems)
    }

    return (
        <>

            <div className={styles.item_inner_container}>
                <div className={styles.item_img}>
                    <img src='https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp' alt='' />
                </div>
                <div>
                    <h2 className='text-black font-medium'>{paratha.parantha} Paratha</h2>
                </div>
                <div className={styles.minus}>
                    <button className='text-black font-bold' disabled={quantity === 1 ? true : false} onClick={reduceQuantity}>-</button>
                    <input className='text-black' type='text'value={quantity} />
                    <button className='text-black font-medium' onClick={increaseQuantity}>+</button>
                </div>
                <div className={styles.price}>
                    <h3 className='text-black font-medium'>Rs {paratha.price*quantity}</h3>
                </div>
                <div className={styles.add_on}>
                    <div className='text-center text-black font-medium mb-1'>Available AddOns</div>
                    {addon.map((add,i) => {
                       return (<>
                        <input type='checkbox' id={i}/>
                           <label className={`text-black font-medium ${styles.label}`} for={i}>{add}</label>
                       </>
                          )
                    })}
                </div>
                <button onClick={removeFromCart} className='text-black'>
                    delete
                </button>
            </div>

        </>
    )
}