import React from 'react'
import './navi.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
const Nav = () => {
  const[activeNavi , setActiveNavi]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNavi('#above')}className={activeNavi==='#'? 'active':'' }><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNavi('#abote')} className={activeNavi==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNavi('#experience')} className={activeNavi==='#experience'?'active':''}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNavi('#services')} className={activeNavi==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNavi('#contact')} className={activeNavi==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav