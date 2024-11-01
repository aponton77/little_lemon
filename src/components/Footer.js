import React from 'react'
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p className='footer-desc'>
                    We are a family owned Mediterranean restaurant, focued on traditional recipes served with a modern twist.
                </p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul className='footer-desc'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul className='footer-desc'>
                    <li>Address: <br/> 123 Main Street - Dallas, TX</li>
                    <li>Phone: <br/> 214-597-7900</li>
                    <li>Email: <br/> Contact@LittleLemmon.com</li>
                </ul>
            </div>

            <div>
                <h3>Social Links</h3>
               <ul className='footer-desc'>
                <li><a href='/'>Facebook</a></li>
                <li><a href='/'>Instagram</a></li>
                <li><a href='/'>Twitter</a></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer