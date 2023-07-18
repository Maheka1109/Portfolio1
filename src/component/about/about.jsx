import React from 'react'
import './about.css'
import Me from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="meh" src={Me} alt="About Img"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

           <article className='about__card'>
            <FaAward className="about__icon"/>
            <h5>Education</h5>
            <small>BE Computer Engineer</small>
           </article>

           <article className='about__card'>
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>Fresher</small>
           </article>

           <article className='about__card'>
            <FaAward className="about__icon"/>
            <h5>Project</h5>
            <small>4 projects</small>
           </article>
          </div>
          <p>
            I am a coding enthusiast having problem solving skills with a good knowledge of Data Structures & Algorithms, skilled in C++. Solved more than 100+ Algorithmic problems. And highly interested in Web Development and Mobile App Development
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>    
      </div>
    </section>
  )
}

export default about