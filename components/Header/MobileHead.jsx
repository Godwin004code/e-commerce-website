import React from 'react'
import {AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import { FaBars } from 'react-icons/fa'
import {HiBars3BottomRight} from "react-icons/hi"

const MobileHead = ({ setShowNav }) => {
    const handleClick = () => {
        setShowNav(true)
        document.documentElement.scrollTop = 0
        document.body.classList.add('remove-scrollbar')
    }
  return (
    <header className='mobile-head'>
    <section class="d-flex justify-content-between ">
    <div class="d-flex justify-content-between" style={{width: '10%'}}>
      <h2>LE</h2>
    </div>
    <div className='d-flex justify-content-between' style={{width: '35%'}}>
      <div style={{backgroundColor: '#F1F0F0' }} className='d-flex justify-content-center align-self-center p-3' onClick={handleClick}>
        <FaBars />
      </div>
      <div className='d-flex justify-content-center align-self-center p-3' style={{backgroundColor: '#F1F0F0' }}>
        <AiOutlineShoppingCart />
      </div>
    </div>
</section>
    </header>
    
  )
}

export default MobileHead