import React, { useState } from 'react'
import './firstnavbar.css'
// import './responsive.css'
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaMedal } from "react-icons/fa"
import { BsFillGiftFill } from "react-icons/bs"
import { BsPersonFill } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { BsFlower1 } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"
import { BsShop } from "react-icons/bs"
import { HiChevronDown } from "react-icons/hi"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Firstnavbar = () => {
  const [mobile, setMobile] = useState(false)

  return (
    <>
      <div id="firstnavbar">
        <div className='firstnavbar_in'>
          <div className='left'>
            <span>(012) 489 0 888</span>
            <span>(055) 561 35 35</span>
            <span>info@almali.az</span>
          </div>
          <div className='right'>
            <span className='n'><FaMapMarkerAlt /> xerite</span>
            <span className='n'><FaMedal /> bonus</span>
            <span className='n'><BsFillGiftFill /> hediyye</span>
            <span className='n'><BsPersonFill /> şexsi kabinet</span>
            <span className='sosial'><BsFacebook /> </span>
            <span className='sosial'><BsInstagram /> </span>
            <span className='sosial'><BsWhatsapp /> </span>
          </div>
        </div>
      </div>

      <div className='twonavbar'>
        <div className='twonavbar_in'>
          <div>
            <span className='sho'><HiOutlineShoppingBag /></span>
          </div>
          <div className='Hamburger'>
            <button className='mobile' onClick={() => setMobile(!mobile)}>
              {mobile ? <ImCross /> : <FaBars />}
            </button>
          </div>
          <div className='twonavbar_img'>
            <img src='https://almali.store/wp-content/uploads/2021/06/newlogo.png'></img>
          </div>
          <div className="twonavbar_search">
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
          <ul className={mobile ? 'nav-mobile-link' : 'nav-link'} onClick={() => { setMobile(false) }}>
            <Link to='/telefon'><li>Home<HiChevronDown className="hi-chevron-down"/> <BsChevronRight className="bs-chevron-right"/></li></Link>
            <Link to='/smart'><li>SMART SAATLAR <HiChevronDown className="hi-chevron-down"/> <BsChevronRight className="bs-chevron-right"/></li></Link>
            <Link to='/tv'><li>TV VƏ AUDIO <HiChevronDown className="hi-chevron-down"/> <BsChevronRight className="bs-chevron-right"/></li></Link>
            <Link to='/foto'><li>FOTO VƏ VIDEO <HiChevronDown className="hi-chevron-down"/> <BsChevronRight className="bs-chevron-right"/></li></Link>
            <Link to='/noutbuk'><li>NOUTBUKLAR  VƏ PC <HiChevronDown className="hi-chevron-down"/> <BsChevronRight className="bs-chevron-right"/></li></Link>
            <Link to='/oyun'><li>OYUN KONSOLLARI <HiChevronDown className="hi-chevron-down"/> <BsChevronRight className="bs-chevron-right"/></li></Link>
            <Link to='/mesiet'><li>MƏİŞƏT AVADANLIQLARI <HiChevronDown className="hi-chevron-down"/> <BsChevronRight className="bs-chevron-right"/></li></Link>
            <Link to='/diger'><li>DİGƏR <HiChevronDown className="hi-chevron-down"/> <BsChevronRight className="bs-chevron-right"/></li></Link>
          </ul>
          <div className="search-mobile">
            <input placeholder='   Men axtariram...' type='text'></input>
          </div>
          <span className='search-icon'><BsSearch /></span>
        </div>
      </div>
    </>
  )
}

export default Firstnavbar