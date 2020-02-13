import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Praise from "./Components/Praise/Praise";
import SubmitPraise from "./Components/SubmitPraise/SubmitPraise";
import ThankYou from "./Components/ThankYou/ThankYou";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      praise: [],
      confirmar: false
    };
    this.getFeedback = this.getFeedback.bind(this);
    this.getPraise = this.getPraise.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  getPraise(praiseValue) {
    this.setState({
      praise: praiseValue
    });
  }
  getFeedback(feedbackValue) {
    this.setState({
      feedback: feedbackValue
    });
  }

  /* Submits feeback and praise when confirmar button is clicked */
  submitData() {
    console.log("feedback is : " + this.state.feedback);
    console.log("praise is : " + this.state.praise.join(", "));
    this.setState({
      confirmar: true
    });
  }
  render() {
    return this.state.confirmar ? (
      <div>
        <ThankYou />
      </div>
    ) : (
      <div>
        <Header />
        <Praise inputFeedback={this.getFeedback} inputPraise={this.getPraise} />
        <SubmitPraise onClick={this.submitData} />
      </div>
    );
  }
}
