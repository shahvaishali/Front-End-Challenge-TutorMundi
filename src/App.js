import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Praise from "./Components/Praise/Praise";
import SubmitPraise from "./Components/SubmitPraise/SubmitPraise";
function App() {
  return (
    <div>
      <Header />
      <Praise />
      <SubmitPraise />
    </div>
  );
}

export default App;
