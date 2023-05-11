import React from 'react'
import './footer.scss'
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"
import { SiTelegram } from "react-icons/si"
import { FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer_in'>
                <p>@2023 Almali.store.Allrights reserved</p>
                <div className='contact'>
                    <span className='message'><AiOutlineMessage/>  Sullariniz bize verin Bize yazin!</span>
                    <span>Jivo</span>
                </div>
                <div>
                    <span className='sosial'><BsFacebook /></span>
                    <span className='sosial'><BsInstagram /></span>
                    <span className='sosial'><BsWhatsapp /></span>
                    <span className='sosial'><SiTelegram/></span>
                    <span className='sosial'><FaTwitter/></span>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Footer