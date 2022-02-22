import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaViber, FaTelegram } from 'react-icons/fa';
import { Ftopcompartment, Footercontainer, Fcontent, FCopyright, Frow, Fbg } from './Footercomponent';

const Footer = () => {
  return (
    <Footercontainer>
        <Ftopcompartment>
            <Fcontent>
                <h1>Gourmet Express</h1>
                <p>About Us</p>
                <p>Career</p>
                <a href='/'>Terms and condition</a>
                <a href='/'>Licenses</a>
            </Fcontent>
            <Fcontent>
                <h1>CONTACT</h1>
                <p>contact@gourmetexpress.com</p>
                <p>+95973515248, +951228496</p>
                <Frow>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaViber/>
                    <FaTelegram/>
                </Frow>
            </Fcontent>
            <Fcontent>
                <h1>Address</h1>
                <p>150 UpperKyimyindaing Street Ahlone Township
                Yangon 111101</p>
                
            </Fcontent>
        </Ftopcompartment>
        <FCopyright>All rights reserved <span>&#169;</span>Gourmet Express. </FCopyright>
        <Fbg src={require('../../assets/footerblack.png')} />
    </Footercontainer>
  )
}

export default Footer