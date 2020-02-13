import React from "react";
import "../../App.css";
import thankYou from "./img/thankyou.png";
export default function ThankYou() {
  return (
    <div className="center">
      <div>
        <img src={thankYou} alt="thankyou" className="mt-69" />
      </div>
      <div>
        <p className="text-title mt-0">Obrigado pelo seu elogio!</p>
      </div>
    </div>
  );
}
