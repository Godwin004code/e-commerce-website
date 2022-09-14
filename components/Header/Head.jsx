
import React from 'react'
import {AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"

const Head = () => {
  return (
    <header className='container head'>
    <section class="d-flex justify-content-between mt-3">
    <div class="d-flex justify-content-between" style={{width: '10%'}}>
      <h2>LE</h2>
      <div className='d-flex justify-content-center align-self-center p-3' style={{backgroundColor: '#F1F0F0', }}>
        <AiOutlineHome />
      </div>
    </div>
    <form style={{width: '60%'}} class="d-flex" role="search">
      <input  class="form-control m-2" type="search" placeholder="Search your items" aria-label="Search" />
    </form>
    <div className='d-flex justify-content-between' style={{width: '10%'}}>
      <div style={{backgroundColor: '#F1F0F0', }} className='d-flex justify-content-center align-self-center p-3' >
        <BsPerson />
      </div>
      <div className='d-flex justify-content-center align-self-center p-3' style={{backgroundColor: '#F1F0F0', }}>
        <AiOutlineShoppingCart />
      </div>
    </div>

</section>
    </header>
  )
}

export default Head