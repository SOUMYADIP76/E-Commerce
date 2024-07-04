import React from 'react'
import './Newsletter.css'
const Newsletter=()=> {
  return (
    <div className='Newsletter'>
      <h1>Get Exclusive Ofeers In Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
