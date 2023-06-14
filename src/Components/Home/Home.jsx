import React, { useEffect } from 'react'
import './home.css'


const Home = () => {

  return (
   <section className='home'>    
    <div className="setContainer container">
      <div className="homeText">
        <h1 data-aos="fade-up" className='title'>Live your Fun With Travel Buddy</h1>

        <p className="subtitle">Come with your buddies to make your outing special!</p>

        <button className='btn'>
          <a href='#'>Explore</a>
        </button>

      </div>

      <div className="homeCard grid">

      <div className="locationDiv">
        <label htmlFor="location">Location</label>
        <input type="text" placeholder='Dream Destination' />
      </div>
      

      <div className="priceDiv">
        <label htmlFor="price">Price</label>
        <input type="text" placeholder='2000-10000' />
      </div>

      <button className='btn'>Search</button>
      </div>
    </div>

   </section>
  )
}

export default Home