import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { sliderValue, sliderValueYear } from "../../../Redux/actions";

const Slider = () => {
  const mySlideVal = useSelector((state) => state.sliderReducer);
  const flage = useSelector((state) => state.flageReducer);

  const dispatch = useDispatch();

  return (
    <div className="Snaming">
      <input
        type="range"
        defaultValue={mySlideVal}
        onChange={(e) =>
          dispatch(
            !flage
              ? sliderValue(e.target.value)
              : sliderValueYear(e.target.value)
          )
        }

        onInput={(e) => dispatch(!flage ? sliderValue(e.target.value) : sliderValueYear(e.target.value))}
        className="form-range d-block mx-auto mt-5 mb-3 mx-auto slider"
        id="customRange1"
      ></input>
    </div>
  );
};

export default Slider;
