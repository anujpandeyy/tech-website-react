import React from 'react'
import './About.css'
import img2 from '../images/2.jpg'
export default function About() {
  return (
    <>
    <div>
      <img className='img2' src={img2} alt="" />
    </div>
    <h1 className='abouth1'>ABOUT US</h1>
    <div className='about'>
      <p className='aboutp'>
      Welcome to AP, a website dedicated to exploring the latest trends in technology and providing you with insightful articles, news, and reviews.

At AP, we value your feedback and opinions. We encourage you to share your thoughts with us, ask questions, and provide suggestions for future topics. Our goal is to build a community of like-minded individuals who share a passion for technology and want to stay informed about the latest developments.
Thank you for visiting AP, and we hope you enjoy our content!
      </p>
    </div>
    </>
  )
}
