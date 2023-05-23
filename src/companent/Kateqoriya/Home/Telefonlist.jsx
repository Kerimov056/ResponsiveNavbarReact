import React, { useEffect, useState } from 'react'
import Telefon from './Telefon'
import axios from 'axios';
import './Home.scss'

const Telefonlist = () => {
    const [telefon, setTelefon] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setTelefon(response.data)
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const [price, setPrice] = useState(1)

    const change = (e) => {
        setPrice(e.target.value);
    }

    return (
        <>
            {/* <div>
                <input type="range" min={1} max={1000} onInput={change} />
                <h1>Price: {price}</h1>
            </div> */}


            <div className='telefonAll'>
                {
                    telefon.filter(sya => { return sya.price > parseInt(price, 0) }).map(sum => {
                        return <Telefon key={sum.id} imgurl={sum.image} iphoneName={sum.title} kapasite="128GB" iphoneColor="(Blue)" oldPrice={2499.0} newPrice={sum.price} />
                    })
                }
            </div>
        </>
    )
}

export default Telefonlist