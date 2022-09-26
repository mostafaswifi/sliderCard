import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'
const PagePreview = () => {
  const mySlideVal = useSelector(state => state.sliderReducer);
 
  return (
    <div className="fw-bold text-secondary text-uppercase spacer mx-md-5 mx-3 Pnaming text-center">
       <span style={{width: 50,display: "inline-block"}}> {mySlideVal.previewNum}</span>k pagepreview
    </div>
  )
}

export default PagePreview