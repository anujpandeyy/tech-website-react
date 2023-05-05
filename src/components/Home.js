import React from 'react'
import './Home.css'
import img from '../images/1.jpg'
export default function Home() {

  return (
    <>
    <div className='hero'>
      <p>Do You Want To Know More About Technology? </p>
      <button>Join Now</button>
    </div>
    <div>
      <img src={img} alt="" />
    </div>
    </>
  )
}
