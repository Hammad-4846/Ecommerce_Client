import React from "react";
import { CiLocationOn } from "react-icons/ci";
import "./AddressBox.scss";

function AddressBox() {
  return (
    <div className="AddressBox">
      <div className="left__add-info">
        <CiLocationOn />
        <div className="info">
          <h5>Mr David</h5>
          <p className="p-text">H.No 1044 Street Rajouri..</p>
        </div>
      </div>
      <span />
    </div>
  );
}

export default AddressBox;
