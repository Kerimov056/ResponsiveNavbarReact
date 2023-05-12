import React, { useEffect, useState } from 'react'
import Smart from './Smart'
import './smart.scss'
// import axios from 'axios'


const SmartSaatlar = () => {
    // const [watch, setWatch] = useState([])
    // useEffect(() => {
    //     axios.get('')                    // Elbetde o birsi kimi bunuda
    //         .then(response => {         // elmek olar ama api tapa bilmedik
    //             setWatch(response.data)// deye eliye bilmedik
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])
    return (
        <>
            <div className='watchAll'>
                <div className='watchAll_in'>
                    {/* {
                        watch.map((item, id) => {
                         return <Smart key={id} imgUrl={item.image}
                                description={item.description}
                                price={item.price} />
                        })
                    } */}

                    <Smart imgUrl={"https://almali.store/wp-content/uploads/2022/08/71XMTLtZd5L._AC_SL1500_-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band – Regular"}
                        price={999.0} />
                    <Smart imgUrl={"https://almali.store/wp-content/uploads/2022/09/71kUZq7ON3L._AC_SX466_-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm RED Aluminum Case with RED Sport Band – Regular"}
                        price={789.0} />
                    <Smart imgUrl={"https://almali.store/wp-content/uploads/2022/09/71xSYnvg7OL._AC_SL1500_-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Silver Aluminum Case with White Sport Band – Regular"}
                        price={1159.0} />
                    <Smart imgUrl={"https://almali.store/wp-content/uploads/2022/08/71XMTLtZd5L._AC_SL1500_-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band – Regular"}
                        price={1999.0} />
                    <Smart imgUrl={"https://almali.store/wp-content/uploads/2022/09/71rimxfInpL._AC_SL1500_-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band – Regular"}
                        price={859.0} />
                    <Smart imgUrl={"https://almali.store/wp-content/uploads/2021/07/2831738395-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Silver Aluminum Case with White Sport Band – Regular"}
                        price={1659.0} />
                    <Smart imgUrl={"https://almali.store/wp-content/uploads/2022/04/MKUQ3_VW_34FRwatch-44-alum-spacegray-nc-se_VW_34FR_WF_CO-768x768.jpeg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Silver Aluminum Case with White Sport Band – Regular"}
                        price={959.0} />
                    <Smart imgUrl={"https://almali.store/wp-content/uploads/2022/04/MKUW3_VW_34FRwatch-44-alum-silver-nc-se_VW_34FR_WF_CO-768x768.jpeg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band – Regular"}
                        price={999.0} />
                </div>
            </div>
        </>
    )
}

export default SmartSaatlar