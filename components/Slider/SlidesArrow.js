import React from 'react'


const SlidesArrow = ({next, prev}) => {
    return (
        <div className="btns">
            <div className="position-absolute top-0 start-0 fs-2" onClick={prev}>
                &#10094;
            </div>
            <div className="position-absolute top-0 end-0 fs-2" onClick={next}>
                &#10095;
            </div>
        </div>
    )
}

export default SlidesArrow