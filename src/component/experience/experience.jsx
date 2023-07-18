import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className='experience__pl'>
         <h3>Programming Languages</h3>
          <div className="experience__content">
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>C++</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Java</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>JavaScript</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>Python</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            </center>
          </div>
         </div>
        
        <div className="experience__frontend">
        
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>CSS</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>XML</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>React</h4>
               <small className='text-light'>Experience</small>
               </div>
            </article>
            </center>
          </div>
        </div>
        
        {/* end of frontend  */}
        
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>NodeJS</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>MongoDB</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>MySQL</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>PHP</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            </center>
            <center>
            <article className='experience__details'>
               <BsPatchCheckFill className='experience__details-icon'/>
               <div>
               <h4>XML</h4>
               <small className='text-light'>Basic</small>
               </div>
            </article>
            </center>
          </div>
        </div>
      </div>

    </section>
  )
}

export default experience