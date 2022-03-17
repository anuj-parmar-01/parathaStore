import React, { useState, useEffect } from 'react'
import styles from './Cart.module.css'

export default function SingleCartItem({ cart, setcart, paratha, finalOrder, changeFinalOrder }) {
    const [quantity, setQuantity] = useState(paratha.quantity || 1);
    const [add, setAdd] = useState([])

    const handleCheck = (e) => {
        if (e.target.checked) {
            setAdd([...add, e.target.value])
        }
    }

    const reduceQuantity = () => {
        setQuantity(quantity - 1)
    }
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const removeFromCart = () => {
        let newCartItems = cart.filter(e => e.id !== paratha.id)
        let finalItems = finalOrder.filter(e => e.id !== paratha.id)
        changeFinalOrder(finalItems)
        setcart(newCartItems)
    }


    useEffect(() => {

        let item = {}
        item.id = paratha.id
        item.parantha = paratha.parantha;
        item.quantity = quantity
        item.price = paratha.price * quantity
        item.addOn = add
        let newItems = finalOrder.filter(e => e.id !== paratha.id)
        changeFinalOrder([...newItems, item])
    }, [quantity, add])



    return (
        <>
            <div className={styles.item_inner_container}>
                <div className={styles.item_img}>
                    <img src='https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp' alt='' />
                </div>
                <div>
                    <h2 className='text-black font-medium'>{paratha.parantha}</h2>
                </div>
                <div className={styles.minus}>
                    <button className='text-black font-bold' disabled={quantity === 1 ? true : false} onClick={reduceQuantity}>-</button>
                    <input className='text-black' type='text' readOnly value={quantity} />
                    <button className='text-black font-medium' onClick={increaseQuantity}>+</button>
                </div>
                <div className={styles.price}>
                    <h3 className='text-black font-medium'>Rs {paratha.price * quantity}</h3>
                </div>
                <div className={styles.add_on}>
                    <div className='text-center text-black font-medium mb-1'>Available AddOns</div>
                    {paratha.addOn.map((add, i) => {
                        return (<>
                            <input onChange={(e) => handleCheck(e)} type='checkbox' value={add} id={i} />
                            <label className={`text-black font-medium ${styles.label}`} >{add}</label>
                        </>
                        )
                    })}
                </div>
                <button onClick={removeFromCart} className='text-black'>
                    Delete
                </button>
            </div>

        </>
    )
}