import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import './smart.scss'
import PropTypes from  'prop-types'


const Smart = ({imgUrl,description,price}) => {
  return (
    <>
      <div className='watch'>
        <div className='watch_img'>
          <img src={imgUrl}></img>
        </div>
        <div className='watch_info'>
          <div className='watch_info_in'>
            <h5 className='h55'>{description}</h5>
            <h6 className='spann'>{price}<span>AZN</span></h6> <br/>
            <button type='button'><span className='sebet'>Sebete at</span><span className='sebetIcon'><AiOutlineShoppingCart/></span></button>
          </div>
        </div>
      </div>
    </>
  )
}

Smart.propTypes={
  imgurl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

Smart.defaultProps={
  // price: "bele melumat yoxdur",
  // description: "bele melumat yoxdur"
}
export default Smart