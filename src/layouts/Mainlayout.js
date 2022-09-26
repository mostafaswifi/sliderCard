import React from 'react'
import './Mainlayout.css'
import TitleComponent from '../components/staticComponent/titleComponent/TitleComponent'
import MainCardLayout from './MainCardLayout'
const Mainlayout = () => {
  return (
    <div className='ground'>
      <TitleComponent />
      <MainCardLayout />
    </div>
  )
}

export default Mainlayout