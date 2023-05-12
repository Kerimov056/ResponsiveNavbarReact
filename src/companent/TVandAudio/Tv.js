import React from 'react'
import './tv.scss'
import { AiOutlineShoppingCart } from "react-icons/ai"
import PropTypes from  'prop-types'

const Tv = ({imgUrl,description,price}) => {
  return (
    <>
      <div className='Tv'>
        <div className='Tv_img'>
          <img src={imgUrl}></img>
        </div>
        <div className='Tv_info'>
          <div className='Tv_info_in'>
            <h5 className='h55'>{description}</h5>
            <h6 className='spann'>{price}<span>AZN</span></h6> <br />
            <button type='button'><span className='sebet'>Sebete at</span><span className='sebetIcon'><AiOutlineShoppingCart /></span></button>
          </div>
        </div>
      </div>
    </>
  )
}

Tv.propTypes={
  imgurl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}


export default Tv