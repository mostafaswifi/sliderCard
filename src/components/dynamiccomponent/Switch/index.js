import React from "react";
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { flage } from '../../../Redux/actions'


const Switch = () => {
  const myFlage = useSelector(state => state.flageReducer)
    const dispatch = useDispatch()

  return (
 
      <div className="form-check form-switch gswitch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          onChange={() => dispatch(flage())}
          defaultChecked={myFlage}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
      
        </label>
      </div>
   
  );
};

export default Switch;
