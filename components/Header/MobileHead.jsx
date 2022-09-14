import React from 'react'
import {AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import { FaBars } from 'react-icons/fa'

const MobileHead = ({ setShowNav }) => {
    const handleClick = () => {
        console.log('count');
    }
  return (
    <header className='mobile-head'>
    <section class="d-flex justify-content-between mt-3">
    <div class="d-flex justify-content-between" style={{width: '10%'}}>
      <h2>LE</h2>
    </div>
    <div className='d-flex justify-content-between' style={{width: '30%'}}>
      <div style={{backgroundColor: '#F1F0F0', }} className='d-flex justify-content-center align-self-center p-3 '  >
        <FaBars />
      </div>
      <div className='d-flex justify-content-center align-self-center p-3' style={{backgroundColor: '#F1F0F0', }} onClick={handleClick}>
        <AiOutlineShoppingCart />
      </div>
    </div>

</section>
    </header>
  )
}

export default MobileHead