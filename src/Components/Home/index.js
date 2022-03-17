import React, { useEffect, useState } from 'react'
import ParathaCard from '../parathaCard'
import Header from '../Header'
import styles from './Home.module.css'


export default function Home({cart,setCart}) {
    const [parathaList, setparathaList] = useState([])

    useEffect(()=> {
        //fetching data from local server, data present in mockAPI folder
     fetch(' http://localhost:8000/paratha').then(res=> res.json()).then(res => setparathaList(res))
    },[])
    
    return (
        <>
         <Header cart={cart}/>  
            <div className='text-white font-medium text-3xl text-center my-6'>Order Our Tasty Parathas</div>
            <div className={`flex flex-wrap gap-2.5 ${styles.center}`}>
                {parathaList.map((paratha, index) => {
                    return <ParathaCard key={paratha.id} paratha={paratha} cart={cart} setCart={setCart}  index={index} />
                })}
            
            </div>
        </>
    )
}