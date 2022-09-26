import React from 'react'
import './index.css'
import { useSelector } from 'react-redux';
const Cost = () => {
  const mySlideVal = useSelector(state => state.sliderReducer);
  const flageSelector = useSelector(state => state.flageReducer);

  return (
    <div className="fs-1 boldest Cnaming mx-md-5 mx-3 text-center">
        
        $<span style={{width: 80,display:"inline-block"}}>{mySlideVal.cost}</span> <span style={{width: 80,display:"inline-block"}} className="fw-lighter fs-5 text-secondary">/ {flageSelector ? "year" : "month"}</span>  

    </div>
  )
}

export default Cost