import React from 'react'
import logo from './assets/logo.png'
import './Footer.css'

function Footer(){
    return(
        <>
            <div class="footer tc center ph5">
                <h1>Contact Us</h1>
                <div className='flex space-between'>
                    <img  src={logo} alt='logo' className=' logo mv2' ></img>
                    <div className='dib '>
                        TEDxKIET<br/>
                        KIET Group of Institutions,<br/>
                        Delhi-NCR-201206
                    </div>
                    <h3 className='pointer'>
                        About Us<br/>
                        Contact Us<br/>
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Footer;