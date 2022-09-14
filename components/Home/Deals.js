import Image from 'next/image';
import React from 'react'
import First from '../Slider/drone-g9a77f832c_1280.jpg';
import Second from '../Slider/student-gcf0254c90_1280.jpg';
import { AiOutlineShoppingCart} from "react-icons/ai"
import { FaHeart} from 'react-icons/fa'

const Deals = () => {
  return (
    <section>
   <div className="card mb-4">
  <Image src={First} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Camera HD lightbuld</h5>
    <button href="#" className="btn btn-primary stretched-link me-3">
    <AiOutlineShoppingCart />
    </button>
    <button href="#" className="btn btn-primary stretched-link">
    <FaHeart />
    </button>
  </div>
</div>
<div className="card mb-4">
  <Image src={Second} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Apple </h5>
    <button href="#" className="btn btn-primary stretched-link me-3">
    <AiOutlineShoppingCart />
    </button>
    <button href="#" className="btn btn-primary stretched-link">
    <FaHeart />
    </button>
  </div>
</div>
    </section>
  )
}

export default Deals