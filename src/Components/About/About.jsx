import React from 'react'
import './about.css'

import img from '../../Assets/image/travel.png'
import img2 from '../../Assets/image/escape.png'
import img3 from '../../Assets/image/rating.png'

import video from '../../Assets/video.mp4'


const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Why Travel Buddy?
        </h2>
        <div className="mainContent container grid">

          <div className="singleItem">
            <img src={img} alt="Image Name"/>
            <h3>
              50+ Verified Packages
            </h3>
            <p>
            Certainly, travel is more than the seeing of sights; 
            it is a change that goes on, deep and permanent, in the ideas of living
            </p>
          </div>

          <div className="singleItem">
            <img src={img2} alt="Image Name"/>
            <h3>
               100+ Fun Activities
            </h3>
            <p>
            The secret of our vigor and activity is that we have managed to have a lot of fun.
            </p>
          </div>

          <div className="singleItem">
            <img src={img3} alt="Image Name"/>
            <h3>
              1000+ Trusted Partners 
            </h3>
            <p>
            A lot of people have fancy things to say about customer service, but it’s just a day-in, 
            day-out, ongoing, never-ending, persevering, compassionate kind of activity.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="CardContent grid">
            <div className="cardText">
            <h2>
              Wonderful living experience!
            </h2>
            <p>
              The Adventure you are going to have will be last long in your memories.
            </p>
            </div>
          </div>

          <div className="cardVideo">
            <video src={video} autoPlay loop muted  type="video/mp4"></video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About