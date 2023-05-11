import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import './smart.scss'


const Smart = () => {
  return (
    <>
      <div className='watch'>
        <div className='watch_img'>
          <img src='https://almali.store/wp-content/uploads/2022/08/71XMTLtZd5L._AC_SL1500_-768x768.jpg'></img>
        </div>
        <div className='watch_info'>
          <div className='watch_info_in'>
            <h5 className='h55'>(Sifarişlə) New Apple Watch Series 8 GPS 41mm Midnight Aluminum Case with Midnight Sport Band -- Regular</h5>
            <h6 className='spann'>859.0<span>AZN</span></h6> <br/>
            <button type='button'><span className='sebet'>Sebete at</span><span className='sebetIcon'><AiOutlineShoppingCart/></span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Smart