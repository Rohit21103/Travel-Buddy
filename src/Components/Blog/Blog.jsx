import React from 'react'
import './blog.css'
import {BsArrowRightShort} from 'react-icons/bs'

import img from '../../Assets/image/africa.jpg'
import img2 from '../../Assets/image/germany.jpg'
import img3 from '../../Assets/image/srilanka.jpg'
import img4 from '../../Assets/image/MP.jpg'

const posts = [
  {
    id:1,
    postImage:img,
    title:'Unravelling the meaning behind Rainbow Nation, 6 travel destinations for ecological experiences',
    desc:'South Africa is often referred to as the "Rainbow Nation" due to its diverse and multicultural society and the term was coined by Archbishop Desmond Tutu in the early 1990s during South Africa &apos;s transition from apartheid to democracy. South Africa is home to a rich tapestry of cultures, languages and ethnicities as the country&apos;s population is made up of various ethnic groups, including Zulu, Xhosa, Afrikaans, English, Indian and many others.'
  },
  {
    id:1,
    postImage:img2,
    title:'Can Germany&apos;s tourism industry become climate neutral?',
    desc:'Yet the entire tourism industry will have to make similar changes by 2045. According to the Climate Protection Act, Germany must then be greenhouse gas neutral by this date. This means there must be a balance between greenhouse gas emissions and the removal of such gasses from the atmosphere.'
  },
  {
    id:1,
    postImage:img3,
    title:'Maiden cruise vessel for Indian tourists reaches Hambantota port in Sri Lanka',
    desc:'As part of a partnership between Advantis -- the transportation and logistics arm of the Hayleys Group -- and Cordelia Cruises, Advantis - Travel and Aviation will serve as the general sales agent while Advantis Group subsidiary Clarion Shipping will serve as port agent for Cordelia Cruises in Sri Lanka, local media earlier reported.'
  },
  {
    id:1,
    postImage:img4,
    title:'Escaping the heat: Top destinations in Madhya Pradesh for a memorable summer getaway',
    desc:'When it comes to summer retreats, Madhya Pradesh might not be the first destination that comes to mind. However, nestled amidst its lush green landscapes lie several breathtaking hill stations waiting to be explored. These hidden gems offer a perfect escape from the scorching heat and crowded cities.'
  }
]

const Blog = () => {
  return (
    <section className='blog container section'>
      <div className="secContainer">
       <div className="secIntro">
          <h2 className='secTitle'>
            Our Blogs
          </h2>
          <p>
            Let's have some insights about Travel Buddy.
          </p>
       </div>

       {
        posts.map(({id,postImage,title,desc})=>{
          return (
            <div className="mainContainer grid">
          <div className="singlePost grid">

            <div className="imgDiv">
              <img src={postImage} alt={title} />
            </div>

            <div className="postDetails">
              <h3>
                {title}
              </h3>
              <p>
                {desc}
              </p>
            </div>

            <a href="#" className='flex'>
              Read more
              <BsArrowRightShort className='icon'/>
            </a>

          </div>

       </div>
          )
        })
       }
      </div>
    </section>
  )
}

export default Blog