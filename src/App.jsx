import React from 'react'
import Header from './component/header/header'
import Navi from './component/navi/navi'
import About from './component/about/about'
import Experience from './component/experience/experience'
// import Services from './component/service/service'
import Portfolio from './component/portfolio/portfolio'
import Testimonials from './component/testimonials/testimonials'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'

const App = () => {
  return (
    <>
         <Header />
         <Navi/>
         <About/>
         <Experience/> 
         {/* <Services/> */}
         <Portfolio/>
         <Testimonials/>
         <Contact/>
         <Footer/>
    </>
  )
}

export default App