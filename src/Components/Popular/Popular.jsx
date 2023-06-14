import React , {useState} from 'react'
import './popular.css'
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import img from '../../Assets/image/1.jpg'
import img2 from '../../Assets/image/2.jpg'
import img3 from '../../Assets/image/3.jpg'
import img4 from '../../Assets/image/4.jpg'
import img5 from '../../Assets/image/5.jpg'
import img6 from '../../Assets/image/6.jpg'

const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Tower Bridge',
    location:'London',
    grade:'View you will enjoy in london"s eye'
  },
  {
  id:2,
  imgSrc:img2,
  destTitle:'Burj Khalifa',
  location:'Dubai',
  grade:'Get experience of amrt city'
},

{
  id:3,
  imgSrc:img3,
  destTitle:'Culture',
  location:'India',
  grade:'You will get to explore various types of places'
},
{
  id:4,
  imgSrc:img4,
  destTitle:'Beauty of Berlin',
  location:'Germany',
  grade:'Enjoy all the view with gorgeous Germany'
},
{
  id:5,
  imgSrc:img5,
  destTitle:'Beautiful Roads',
  location:'America',
  grade:'A combination of various famous places'
},
{
  id:6,
  imgSrc:img6,
  destTitle:'Forests',
  location:'Australia',
  grade:'Wanna Enjoy Beauty of nature?? Come Australia'
}
]

const Popular = () => {
  // var i = 0;
  // var j = 2;
  // const [data, setData] = useState(Data.slice(i,j))
  // function handleonclick(op) {
  //   console.log(op)
  //   if(op === "-"){
  //     i = i - 2;
  //     j = j - 2;
  //     setData(Data.slice(i , j))
  //   } else if (op === "+"){
  //     i = i + 2;
  //     j = j + 2;
  //     setData(Data.slice(i , j))
  //   }
  // }
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secheader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
            To live is the rarest thing in the world. Most people exist, that is all
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="mainContent grid">
         {
          Data.map(({id,imgSrc,destTitle,location,grade})=>{
            return(
              <div className="singleDestination">

                <div className="destImage">
                  <img src={imgSrc} alt="Imge title" />
                  <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                        <p>
                          {grade}
                        </p>
                      <BsArrowRightShort className='icon'/>
                  </div>
                </div>
              
                  <div className="destFooter">
                      <div className="number">
                        0{id}
                      </div>
                      <div className="destText flex">
                        <h6>{location}</h6> 
                        <span className='flex'>
                          <span className="dot">
                            <BsDot className='icon'/>
                          </span>
                          Dot
                        </span>
                      </div>
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


export default Popular