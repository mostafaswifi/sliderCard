import React from 'react'
import SliderCostViewerHolder from '../SliderCostViewsHolder'
import SwitchMonthlyYearlyDiscountHolder from '../SwitchMonthlyYearlyDiscountHolder'
import AdvantagesButtonMinHolder from '../AdvantagesButtonMainHolder'
const MainCardLayout = () => {
  return (
    <div className="container mx-auto bg-white rounded-3 shadow" style={{width: "fit-content"}}>
        

        <SliderCostViewerHolder />
        <SwitchMonthlyYearlyDiscountHolder />
        <AdvantagesButtonMinHolder />

    </div>
  )
}

export default MainCardLayout