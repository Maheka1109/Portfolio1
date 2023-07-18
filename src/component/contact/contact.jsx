import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
// import emailjs from 'emailjs-com'
//  Contact = () => {
//   const form=useRef();
   
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YconstOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
const Contact = () => {
  return (
    <section id="contact">

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mahekaochani@gmail.com</h5>
            <a href="mailto:mahekaochani@gmail.com" target='_blank_'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Message</h4>
            <h5>Mahek Ochani</h5>
            <a href="https://api.whatsapp.com/send?phone+918390111109" target='_blank_'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-8390111109</h5>
            <a href="https://api.whatsapp.com/send?phone+918390111109" target='_blank_'>Send a message</a>
          </article>

        </div>
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form action="">
          <input type="text" name='name' placeholder="your Full Name" required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea> 
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact