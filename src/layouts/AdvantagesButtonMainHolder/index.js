import React from 'react'
import Advantages from '../../components/staticComponent/Advantages'
import ButtonMain from '../../components/staticComponent/ButtonMain'
const AdvantagesButtonMinHolder
 = () => {
  return (
    <div className="d-flex flex-wrap justify-content-evenly align-items-center pb-5">
        <div className="d-flex flex-column">
            <Advantages text="unlimited websites"/>
            <Advantages text="100% data owenership" />
            <Advantages text="email reports" />
        </div>
        <ButtonMain />

    </div>
  )
}

export default AdvantagesButtonMinHolder
