import React from "react";
import "../SubmitPraise/SubmitPraise.css";
import "../../App.css";

export default function SubmitPraise(props) {
  return (
    <div className="center">
      <div>
        <button className="skip mt-95 mr-28">PULAR</button>
        <button className="confirm confirm-text mt-86" onClick={props.onClick}>
          CONFIRMAR
        </button>
      </div>
    </div>
  );
}
