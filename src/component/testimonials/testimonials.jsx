import React from 'react'
import './testimonials.css'
import SS1 from '../../assets/SQL.png'
import SS2 from '../../assets/Campus.png'


// import Swiper core and required modules
import {Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data=[
  {
    avatar:SS2,
    name:'Campus Credentials',
    review:'Bruh',
  },
  {
    avatar:SS1,
    name:'SQL',
    review:'Bruh1',
  },
]
const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <center>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {
          data.map(({avatar,name,review},index)=>{
            return (
              <SwiperSlide key={index} className="testimonials">
          <div className="client__avatar">
            <img src={avatar} alt=" 1" className='bruh'/>
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className="client__review">
             {review}
          </small>
        </SwiperSlide>
           )
          })
        }
      </Swiper>
        </center>
    </section>
        

  )
}

export default testimonials