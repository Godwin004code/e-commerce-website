import React from 'react'
import Data from './SlidesData'

const SlidesDot = ({active, switchSlide}) => {
    return (
        <div className="all-dot d-flex justify-content-center mt-4 mb-4">
            {
                Data.map((slide, index) => {
                    return (
                        <div 
                            key={index}
                            className={active === index ? "active-dot dot" : "dot"}
                            onClick={() => switchSlide(index)}

                        ></div>
                    )
                })
            }
        </div>
    )
}

export default SlidesDot