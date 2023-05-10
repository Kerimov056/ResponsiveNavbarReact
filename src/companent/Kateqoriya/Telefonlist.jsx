import React, { useEffect, useState } from 'react'
import Telefon from './Telefon'
import './kataqoriya.scss'

const Telefonlist = () => {
    const [telefon, setTelefon] = useState([])
    useEffect(()=>{
        const getTelefon = () => {
            fetch("https://fakestoreapi.com/products").then(resopnse => resopnse.json()).then(data => setTelefon(data))
        }
        getTelefon()
    }, []);
    return (    
        <>
            <div className='telefonAll'>
                <div className='telefonAll_in'>
                    {
                        telefon.map((item,id)=>{
                            return <Telefon key={id} imgurl={item.image} iphoneName={item.title} kapasite="128GB" iphoneColor="(Blue)" oldPrice={2499.0} newPrice={item.price} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Telefonlist