import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="box-ft">
                    <h2>About</h2>
                    <p>This website,provides a unique content, who's technologies that impact the digital world, and which is more more powerfull in this era..</p>
                </div>
                <div className="links">
                        <h2>Follow </h2>
                    <div className="img">
                    <Link href= ""><img src="/fb_1-removebg-preview.png" alt="" /> </Link> 
                    <img src="/linkdin-removebg-preview.png" alt="" />
                    <img src="/twitter-removebg-preview.png" alt="" id='twit' />
                    </div>

                </div>

                <div className="contact-ft">
                    <h2>Contact</h2>
                    <p>Email: blogweb@gmail.com</p>
                    <p>+92 3173878352</p>
                </div>
            </div>
            <hr />
            <p className='footer-botm'>&copy; 2024 Blog web | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer