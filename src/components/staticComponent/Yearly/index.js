import React from 'react'
import './index.css'
import Discount from '../../dynamiccomponent/Discount'

const Yearly = () => {
  return (
    <div className="text-capitalize d-flex fw-bold text-secondary ygrid align-items-center">
        Yearly billing
        <Discount />
    </div>
  )
}

export default Yearly