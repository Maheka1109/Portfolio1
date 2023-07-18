import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port.jpg'
import IMG2 from '../../assets/bank.jpg'
import IMG3 from '../../assets/ttt2.jpg'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <center>
            <img src={IMG1} alt=''className='img img-img1'/>
            </center>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href='http://github.com' className='btn'>Github</a>
              <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <center>
            <img src={IMG2} alt='' className='img img-img2'/>
            </center>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href='http://github.com' className='btn'>Github</a>
              <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <center>
            <img src={IMG3} alt=''className='img img-img3'/>
            </center>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href='http://github.com' className='btn'>Github</a>
              <a href='#' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
      </div>

    </section>
  )
}

export default portfolio