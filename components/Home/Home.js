
import Image from 'next/image'
import React, { useState } from 'react'
import Head from '../Header/Head'
import SliderContainer from '../Slider/SliderContainer'
import Deals from './Deals'
import First from '../Slider/drone-g9a77f832c_1280.jpg';
import Second from '../Slider/student-gcf0254c90_1280.jpg';
import { AiOutlineShoppingCart} from "react-icons/ai"
import { FaHeart} from 'react-icons/fa'
import Footer from '../Footer/Footer'
import MobileHead from '../Header/MobileHead'
import MobileNav from '../Header/MobileNav'

const HomeTab = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
    <Head />
    <MobileHead setShowNav={setShowNav} />
    <div className={showNav === true ? 'd-flex' : 'd-none'}>
    <MobileNav setShowNav={setShowNav} />
    </div>
      <div className='slide-cont lay-width d-flex justify-content-between my-5 mb-2 mx-auto' >
      <div className='deals'>
        <Deals />
      </div>
      <div className='sliders'>
      <SliderContainer />
      </div>
      </div>
      <section className='d-flex justify-content-between marques'>
      <div className="mb-4 me-4 marque" >
  <Image src={First} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Camera HD lightbuld</h5>
    <h5 className="card-title">#10,000</h5>
    <button href="#" className="btn btn-primary stretched-link me-3">
    <AiOutlineShoppingCart />
    </button>
    <button href="#" className="btn btn-primary stretched-link">
    <FaHeart />
    </button>
  </div>
</div>
      <div className=" mb-4 me-4 marque" >
  <Image src={First} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Camera HD lightbuld</h5>
    <h5 className="card-title">#10,000</h5>
    <button href="#" className="btn btn-primary stretched-link me-3">
    <AiOutlineShoppingCart />
    </button>
    <button href="#" className="btn btn-primary stretched-link">
    <FaHeart />
    </button>
  </div>
</div>
<div className=" mb-4 me-4 marque" >
  <Image src={First} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Camera HD lightbuld</h5>
    <h5 className="card-title">#10,000</h5>
    <button href="#" className="btn btn-primary stretched-link me-3">
    <AiOutlineShoppingCart />
    </button>
    <button href="#" className="btn btn-primary stretched-link">
    <FaHeart />
    </button>
  </div>
</div>
<div className=" mb-4 me-4 marque" >
  <Image src={First} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Camera HD lightbuld</h5>
    <h5 className="card-title">#10,000</h5>
    <button href="#" className="btn btn-primary stretched-link me-3">
    <AiOutlineShoppingCart />
    </button>
    <button href="#" className="btn btn-primary stretched-link">
    <FaHeart />
    </button>
  </div>
</div>
<div className="mb-4 me-4 marque">
  <Image src={First} alt="..." />
  <div className="card-body">
    <h5 className="card-title">Camera HD lightbuld</h5>
    <h5 className="card-title">#10,000</h5>
    <button href="#" className="btn btn-primary stretched-link me-3">
    <AiOutlineShoppingCart />
    </button>
    <button href="#" className="btn btn-primary stretched-link">
    <FaHeart />
    </button>
  </div>
</div>
<div className=" mb-4 me-4 marque" >
  <Image src={First} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Camera HD lightbuld</h5>
    <h5 className="card-title">#10,000</h5>
    <button href="#" className="btn btn-primary stretched-link me-3">
    <AiOutlineShoppingCart />
    </button>
    <button href="#" className="btn btn-primary stretched-link">
    <FaHeart />
    </button>
  </div>
</div>




      </section>
     
      <div className='mb-2 mt-5 lay-width mx-auto d-flex justify-content-between'>
        <h2>
          Shop
        </h2>
        <button className='border-0 px-4'>
          View All
        </button>
      </div>
    <section  className='lay-width mx-auto mb-5 d-flex justify-content-between flex-wrap'>
      <div className='d-flex mb-4 flex-column justify-content-center p-4 border border-opacity-80' style={{backgroundColor: ' #F3F3F3', }}>
    <div>
    <Image src={Second} className="card-img-top" alt="..." />
    </div>
    <div>
      <p style={{fontSize: '15'}} className='text-center'>
      Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with 18-135 mm Zoom Lens
      </p>
      <h2 className='text-center'>599 $</h2>
    </div>
    <div className='d-flex '></div>
    <div href="#" className="btn stretched-link mb-3" style={{background: '#454D4A', color: 'white'}}>
    <AiOutlineShoppingCart />
    </div>
    <div href="#" className="btn stretched-link" style={{background: '#454D4A', color: 'white'}}>
    <FaHeart />
    </div>
      </div>

      <div className='d-flex mb-4 flex-column justify-content-center p-4 border border-opacity-80' style={{backgroundColor: ' #F3F3F3', }}>
    <div>
    <Image src={Second} className="card-img-top" alt="..." />
    </div>
    <div>
      <p style={{fontSize: '15'}} className='text-center'>
      Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with 18-135 mm Zoom Lens
      </p>
      <h2 className='text-center'>599 $</h2>
    </div>
    <div className='d-flex '></div>
    <div href="#" className="btn stretched-link mb-3" style={{background: '#454D4A', color: 'white'}}>
    <AiOutlineShoppingCart />
    </div>
    <div href="#" className="btn stretched-link" style={{background: '#454D4A', color: 'white'}}>
    <FaHeart />
    </div>
      </div>
      <div className='d-flex mb-4 flex-column justify-content-center p-4 border border-opacity-80' style={{backgroundColor: ' #F3F3F3', }}>
    <div>
    <Image src={Second} className="card-img-top" alt="..." />
    </div>
    <div>
      <p style={{fontSize: '15'}} className='text-center'>
      Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with 18-135 mm Zoom Lens
      </p>
      <h2 className='text-center'>599 $</h2>
    </div>
    <div className='d-flex '></div>
    <div href="#" className="btn stretched-link mb-3" style={{background: '#454D4A', color: 'white'}}>
    <AiOutlineShoppingCart />
    </div>
    <div href="#" className="btn stretched-link" style={{background: '#454D4A', color: 'white'}}>
    <FaHeart />
    </div>
      </div>
      <div className='d-flex flex-column justify-content-center p-4 border border-opacity-80 mb-4' style={{backgroundColor: ' #F3F3F3', }}>
    <div>
    <Image src={Second} className="card-img-top" alt="..." />
    </div>
    <div>
      <p style={{fontSize: '15'}} className='text-center'>
      Sony Alpha ILCE 6600M 24.2 MP Mirrorless Digital SLR Camera with 18-135 mm Zoom Lens
      </p>
      <h2 className='text-center'>599 $</h2>
    </div>
    <div className='d-flex '></div>
    <div href="#" className="btn stretched-link mb-3" style={{background: '#454D4A', color: 'white'}}>
    <AiOutlineShoppingCart />
    </div>
    <div href="#" className="btn stretched-link" style={{background: '#454D4A', color: 'white'}}>
    <FaHeart />
    </div>
      </div>
    </section>
    <div className='p-4' style={{backgroundColor: '#F1F0F0'
}}>
    <Footer />
    </div>
    </>
  )
}

export default HomeTab