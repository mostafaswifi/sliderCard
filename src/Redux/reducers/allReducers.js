import { combineReducers } from "redux";
import sliderReducer from "./rangeSliderReducer";
import flageReducer from './flageReducer'

const allReducers = combineReducers({
    sliderReducer,
    flageReducer
})

export default allReducers