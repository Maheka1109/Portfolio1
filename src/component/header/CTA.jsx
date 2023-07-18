import React from 'react'
import CV from '../../assets/31.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <center>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </center>
    </div>
  )
}

export default CTA