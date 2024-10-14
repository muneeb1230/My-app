import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="container">
                <div className="navbar">
                <h1>Blog website</h1>
                    <div className="menu">
                    <ul>
                        <Link href= ""><li>Home</li></Link>
                        <Link href= ""><li>About</li></Link>
                        <Link href= ""><li>services</li></Link>
                        <Link href= ""><li>Contact</li></Link>
                        
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header