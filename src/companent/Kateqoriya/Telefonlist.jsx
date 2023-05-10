import React, { useEffect, useState } from 'react'
import Telefon from './Telefon'
import axios from 'axios';
import './kataqoriya.scss'

const Telefonlist = () => {
    const [telefon, setTelefon] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setTelefon(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className='telefonAll'>
                <div className='telefonAll_in'>
                    {
                        telefon.map((item, id) => {
                            return <Telefon key={id} imgurl={item.image} iphoneName={item.title} kapasite="128GB" iphoneColor="(Blue)" oldPrice={2499.0} newPrice={item.price} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Telefonlist