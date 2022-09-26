import React from 'react'
import Switch from '../../components/dynamiccomponent/Switch'
import Monthly from '../../components/staticComponent/Monthly'
import Yearly from '../../components/staticComponent/Yearly'
import './index.css'
const SwitchMonthlyYearlyDiscountHolder = () => {
  return (
    <div className="switch-grid p-0 border-bottom mb-5 pb-5">

        <Monthly />
        <Switch />
        <Yearly />
     

    </div>
  )
}

export default SwitchMonthlyYearlyDiscountHolder