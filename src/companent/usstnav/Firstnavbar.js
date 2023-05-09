import React, { useState } from 'react'
import './firstnavbar.css'
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaMedal } from "react-icons/fa"
import { BsFillGiftFill } from "react-icons/bs"
import { BsPersonFill } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { BsFlower1 } from "react-icons/bs"
import { BsShop } from "react-icons/bs"
import { HiChevronDown } from "react-icons/hi"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Firstnavbar = () => {
  const [mobile,setMobile] = useState(false)

  return (
    <>
      <div id="firstnavbar">
        <div className='firstnavbar_in'>
          <div className='left'>
            <span>(012) 489 0 888</span>
            <span>(055) 561 35 35</span>
            <span>info@almali.az</span>
          </div>
          <div>
            <span><FaMapMarkerAlt /> xerite</span>
            <span><FaMedal /> bonus</span>
            <span><BsFillGiftFill /> hediyye</span>
            <span><BsPersonFill /> şexsi kabinet</span>
            <span className='sosial'><BsFacebook /> </span>
            <span className='sosial'><BsInstagram /> </span>
            <span className='sosial'><BsWhatsapp /> </span>
          </div>
        </div>
      </div>

      <div className='twonavbar'>
        <div className='twonavbar_in'>
          <div className='twonavbar_img'>
            <img src='https://almali.store/wp-content/uploads/2021/06/newlogo.png'></img>
          </div>
          <div className='twonavbar_search'>
            <input placeholder='   Men axtariram...' type='text'></input>
          </div>
          <span className='search'><BsSearch /></span>
          <div>
            <span className='shop'><BsFlower1 /></span>
            <span className='shop'><BsShop /></span>
          </div>
        </div>
      </div>

      <div className='threenavbar'>
        <div className='threenavbar_in'>
          <ul className='nav-link'>
            <Link to='/telefon'><li>TELEFONLAR VƏ PLANŞETLƏR <HiChevronDown/></li></Link>
            <Link to='/smart'><li>SMART SAATLAR <HiChevronDown/></li></Link>
            <Link to='/tv'><li>TV VƏ AUDIO <HiChevronDown/></li></Link>
            <Link to='/foto'><li>FOTO VƏ VIDEO <HiChevronDown/></li></Link>
            <Link to='/noutbuk'><li>NOUTBUKLAR  VƏ PC <HiChevronDown/></li></Link>
            <Link to='/oyun'><li>OYUN KONSOLLARI <HiChevronDown/></li></Link>
            <Link to='/mesiet'><li>MƏİŞƏT AVADANLIQLARI <HiChevronDown/></li></Link>
            <Link to='/diger'><li>DİGƏR <HiChevronDown/></li></Link>
          </ul>
          <button className='mobile'>
            {mobile ? <ImCross />: <FaBars/>}
          </button>
        </div>
      </div>
    </>
  )
}

export default Firstnavbar