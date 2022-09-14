import React, { useState } from 'react'
import SlidesArrow from './SlidesArrow'
import Data from './SlidesData'
import SlidesDot from './SlidesDot'
import Image from 'next/image'

const SliderContainer = () => {

    
    const [active, setActive] = useState(0)

    const { text, img} = Data[active]

    const nextSlide = () => {
        setActive(() => {
            let newIndex = active + 1

            if(newIndex > Data.length - 1) {
                return 0
            }  else if(newIndex < 0) {
                return Data.length - 1
            }

            return newIndex
        })
    }

    setTimeout(nextSlide, 5000)

    const prevSlide = () => {
        setActive(() => {
            let newIndex = active + 1

            if(newIndex < 0) {
                return Data.length - 1
            } else if(newIndex > Data.length - 1) {
                return 0
            }

            return newIndex
        })
    }

    

    return (
        
        <div className="w position-relative">
                <div className="slide-img w-100">
                <Image width={800} height={500} src={img} alt="slide img" className='slider-img'  />     
                </div>
                <div className="position-absolute top-50 mt-5  py-1 px-1" style={{backgroundColor: '#58A0E2', color: 'white'}}>
                    <h2>{text}</h2>
                </div>
                {/* <SlidesArrow next={nextSlide} prev={prevSlide} /> */}
                <SlidesDot active={active} switchSlide={(active) => setActive(active)} />
        </div>
    )
}

export default SliderContainer