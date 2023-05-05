import React from 'react'
import './Subscribe.css'
import img3 from '../images/3.jpg'
export default function Subscribe() {
  return (
    <>
    <div className='subpara'>
      <p className='parasub'>
      Stay up-to-date with the latest technology news and trends by subscribing to our newsletter. Our weekly newsletter is packed with informative articles, news, and reviews on the latest advancements in the industry.
      </p>
    </div>
    <h1 className='sub'>Subscribe</h1>
    <div>
      <img className='img3' src={img3} alt="" />
    </div>
    </>
  )
}
