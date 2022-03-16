import React from 'react'
import styles from './Cart.module.css'
import SingleCartItem from './SingleCartItem'
import {Link} from 'react-router-dom'

export default function Cart({ cart, setCart }) {
    console.log(cart, 'cart')
    return (
        <>
            <section className={styles.cart_section}>
                <div className={styles.cart_header}>

                    <div>
                        <h1 className='text-white text-2xl'>Shopping Cart</h1>
                        <p>You have {cart.length} items in the cart</p>
                    </div>
                   <Link to='/checkout'>
                   <button className={styles.checkout_btn}>Proceed to Checkout</button>
                   </Link> 
                </div>

                <div className={styles.cart_items}>
                    {cart.map((item, index) => {
                        return <SingleCartItem paratha={item} cart={cart} setcart={setCart} />
                    })}
                </div>
            </section>
        </>
    )
}