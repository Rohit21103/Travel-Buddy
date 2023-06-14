import React from 'react'
import './offer.css'
import {MdKingBed,MdBathtub,MdAirportShuttle,MdLocationPin} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {BsArrowRightShort} from 'react-icons/bs'
import img8 from '../../Assets/image/8.jpg'
import img9 from '../../Assets/image/9.jpg'
import img10 from '../../Assets/image/10.jpg'
import img11 from '../../Assets/image/11.jpg'

import img from "../../Assets/image/8.jpg"

const Offers = [
  {
    id:1,
    imgSrc:img8,
    destTitle:' Near Tower Bridge',
    location:'London',
    price:'Rs 50,000'
  },
  {
  id:2,
  imgSrc:img9,
  destTitle:' Near Burj Khalifa',
  location:'Dubai',
  price:'Rs 45,000'
},

{
  id:3,
  imgSrc:img10,
  destTitle:'Near New Delhi',
  location:'India',
  price:'Rs 35,000'
},
{
  id:4,
  imgSrc:img11,
  destTitle:'Near Main Road',
  location:'Germany',
  price:'Rs 28,000'
}
]

const Offer = () => {
  return (
    <section className='offer container section'>
      <div className='secContainer'>


        <div className="secIntro">
          <h2 className="secTitle">
            Speical Offers
          </h2>
          <p>
            We are here to provide best deals, come & enjoy
          </p>
        </div>

        <div className="mainContent grid">
         {
          Offers.map(({id,imgSrc,destTitle,location,price})=>{
            return(
              <div className="singleOffer">

              <div className="destImage">
                <img src={imgSrc} alt="Image Name" />
                <span className="discount">
                  30% off
                </span>
              </div>
  
              <div className="offerBody">
                <div className="price flex">
                  <h4>
                    {price} 
                  </h4>
                  <span className="status">
                      For Rent
                  </span>
                </div>
  
                <div className="amenities flex">
                   <div className="singleAmenity flex">
                      <MdKingBed className='icon'/>
                      <small>2 Beds</small>
                   </div>
  
                   <div className="singleAmenity flex">
                      <MdBathtub className='icon'/>
                      <small>Bathtub</small>
                   </div>
  
                   <div className="singleAmenity flex">
                      <FaWifi className='icon'/>
                      <small>Wifi</small>
                   </div>
  
                   <div className="singleAmenity flex">
                      <MdAirportShuttle className='icon'/>
                      <small>Shuttle</small>
                   </div>
                </div>
                <div className="location flex">
                  <MdLocationPin className='icon'/>
                  <small>
                    {destTitle}, {location}
                  </small>
                </div>
                <button className='btn flex'>
                  View Details
                  <BsArrowRightShort className='icon'/>
                </button>
  
              </div>
            </div>
            )
          })
         }
        </div>
      </div>
    </section>
  )
}

export default Offer