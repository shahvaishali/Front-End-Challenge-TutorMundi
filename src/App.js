import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Praise from "./Components/Praise/Praise";
import SubmitPraise from "./Components/SubmitPraise/SubmitPraise";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      praise: []
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
  }
  render() {
    return (
      <div>
        <Header />
        <Praise inputFeedback={this.getFeedback} inputPraise={this.getPraise} />
        <SubmitPraise onClick={this.submitData} />
      </div>
    );
  }
}
