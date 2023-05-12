import React from 'react'
import './tv.scss'
import Tv from './Tv'

const TvS = () => {
  return (
    <>
        <div className='TvAll'>
                <div className='TvAll_in'>
                    {/* {
                        watch.map((item, id) => {
                         return <Tv key={id} imgUrl={item.image}
                                description={item.description}
                                price={item.price} />
                        })
                    } */}

                    <Tv imgUrl={"https://almali.store/wp-content/uploads/2022/09/61cF5MtG6CL._AC_SX425_-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band – Regular"}
                        price={999.0} />
                    <Tv imgUrl={"https://almali.store/wp-content/uploads/2021/01/MD827-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm RED Aluminum Case with RED Sport Band – Regular"}
                        price={789.0} />
                    <Tv imgUrl={"https://almali.store/wp-content/uploads/2022/08/51eEjlrQEL._AC_SL1374_-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Silver Aluminum Case with White Sport Band – Regular"}
                        price={1159.0} />
                    <Tv imgUrl={"https://almali.store/wp-content/uploads/2022/08/1111-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band – Regular"}
                        price={1999.0} />
                    <Tv imgUrl={"https://almali.store/wp-content/uploads/2021/01/MQ562-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band – Regular"}
                        price={859.0} />
                    <Tv imgUrl={"https://almali.store/wp-content/uploads/2021/07/2831738395-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Silver Aluminum Case with White Sport Band – Regular"}
                        price={1659.0} />
                    <Tv imgUrl={"https://almali.store/wp-content/uploads/2021/01/MQ572-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Silver Aluminum Case with White Sport Band – Regular"}
                        price={959.0} />
                    <Tv imgUrl={"https://almali.store/wp-content/uploads/2021/01/MTQX2-768x768.jpg"}
                        description={"(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band – Regular"}
                        price={999.0} />
                </div>
            </div>
    </>
  )
}

export default TvS