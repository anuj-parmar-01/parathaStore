import React, { useState } from 'react'
import styles from './Checkout.module.css'

export default function Checkout({ finalOrder }) {
    console.log(finalOrder)
    const [distance, setDistance] = useState(0)
    let addOnsPrice = {
        'Extra Sauce': 5,
        'Yogurt': 15,
        'Corn': 10,
        'Cabbage': 15,
        'Fenugreek': 10,
        'Cheese': 20
    }

    const changeDistance = (e) => {
        setDistance(e.target.value)
    }

    const totalPrice = () => {
        let result = finalOrder.reduce((acc, val) => {
            return parseInt(val.price) + acc
        }, 0)
        return result
    }

    const AddOnPrice = () => {
        let map = new Map()
        finalOrder.forEach((item) => {
            item.addOn.forEach((extra) => {
                if (map.has(extra)) map.set(extra, map.get(extra) + 1)
                else map.set(extra, 1)
            })
        })
        return [...map]
    }

    const getAddonPrice = () => {
        let priceArr = AddOnPrice();
        let result = priceArr.reduce((acc, val) => {
            return acc + val[1] * addOnsPrice[val[0]]
        }, 0)
        console.log(result, 'result')
        return parseInt(result)
    }
    return (
        <>
            <div className={styles.outer_container}>
                {finalOrder.map((item) => {
                    return (

                        <div className={styles.item_inner_container}>
                            <div className={styles.item_img}>
                                <img src='https://cdn.cdnparenting.com/articles/2020/01/19152919/Aloo-Paratha-Recipe.webp' alt='' />
                            </div>
                            <div>
                                <h2 className='text-black font-medium'>{item.parantha} </h2>
                            </div>
                            <div className={styles.minus}>
                                {item.quantity}
                            </div>
                            <div className={styles.price}>
                                <h3 className='text-black font-medium'>Rs {item.price}</h3>
                            </div>
                            <div className={styles.add_on}>
                                {(!item.addOn || item.addOn.length == 0) && <div className='text-center text-black font-medium mb-1'>No AddOns</div>}

                                {item.addOn && item.addOn.length > 0 && <div>
                                    <div className='font-medium'>Extras</div>
                                    {item.addOn.map((add, i) => {
                                        return <strong> {add} </strong>
                                    })}
                                </div>
                                }


                            </div>

                        </div>
                    )
                })}

            </div>
              <div className={styles.charge_container}>
              <div className={styles.charges}>
                <div>
                    <div className='text-white'> Select Distance </div>
                    <select onChange={(e) => changeDistance(e)}>
                        <option value={0}>Upto 5 Km</option>
                        <option value={15}>5-8 Km</option>
                        <option value={25}>9-15 Km</option>
                        <option value={40}>Above 15 Km</option>
                    </select>
                </div>
                <div className='text-white'>
                    <div>   Paratha Price : {totalPrice()} </div>
                    <div>   Delivery Charges : {distance} </div>
                    <div>  {AddOnPrice().map((extra) => {
                        return <div> {extra[0]} : {extra[1]} X {addOnsPrice[extra[0]]}   </div>
                    })} </div>
                    <div>
                        Total  : {totalPrice() + parseInt(distance) + getAddonPrice()} </div>
                </div>
                </div>
            </div>
        </>
    )
}