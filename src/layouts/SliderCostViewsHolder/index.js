import React from 'react'
import PagePreview from '../../components/dynamiccomponent/PagePreview'
import Cost from '../../components/dynamiccomponent/Cost'
import Slider from '../../components/dynamiccomponent/Slider'
import './index.css'
const SliderCostViewerHolder = () => {
  return (
    <div className="costumGrid  p-md-5  p-5 px-1 col-12">
        <PagePreview />
        <Cost />
        <Slider />
    </div>
  )
}

export default SliderCostViewerHolder