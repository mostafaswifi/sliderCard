import React from "react";
import check from "../../../assets/imgs/icon-check.svg";
import './index.css'
const Advantages = ({text}) => {
  return (
    <div className="d-flex flex-row align-items-center mt-2">
      <img src={check} alt="ico-check" className="img-fluid img-resizer" />
      <span className="text-secondary fw-bold mx-2 text-capitalize">{text}</span>
    </div>
  );
};

export default Advantages;
