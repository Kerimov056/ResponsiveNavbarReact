import React from 'react'
import PropTypes from  'prop-types'
import './Home.scss'

const Telefon = ({imgurl, iphoneName,kapasite,iphoneColor,oldPrice,newPrice}) => {
  return (
    <>
        <div className='phone'>
          <div className='phone_in'>
            <div className='img'>
              <img src={imgurl} alt={imgurl}></img>
              <button id='btn' type='button'>ENDIRIMLER</button>
            </div>
            <div className='info'>
              <h4><span>{iphoneName}</span><span>{kapasite}</span><span>{iphoneColor}</span></h4>
             <h5><span className='old'>{oldPrice} <span>AZN</span></span> <span className='new'>{newPrice}<b>AZN</b></span></h5>
            </div>
          </div>
        </div>
    </>
  )
}

Telefon.propTypes={
  imgurl: PropTypes.string.isRequired,
  iphoneName: PropTypes.string.isRequired,
  kapasite: PropTypes.string,
  iphoneColor: PropTypes.string,
  oldPrice: PropTypes.number,
  newPrice: PropTypes.number.isRequired
}

Telefon.defaultProps={
  iphoneColor: "bele melumat yoxdur",
  oldPrice: "bele melumat yoxdur"
}
export default Telefon