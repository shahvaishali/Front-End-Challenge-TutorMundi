import React, { Component } from "react";
import { figures } from "./SvgData.js";
import "../Praise/Praise.css";
import "../../App.css";

export default class Praise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elogiar: false
    };
    this.submitPraise = this.submitPraise.bind(this);
  }
  submitPraise() {
    let praise = !this.state.elogiar;
    this.setState({
      elogiar: praise
    });
  }
  render() {
    let button;
    if (this.state.elogiar) {
      button = (
        <div className="center">
          <div>
            <p className="compliment-main-title mt-60">Envie um elogio</p>
          </div>
          <div>{figures}</div>

          <div>
            <p className="compliment-main-title">Deixe um recado</p>
          </div>
          <div>
            <textarea
              className="compliment-msg"
              placeholder="Faça elogios, agradecimentos e sugestões. Os tutores adoram!"
            ></textarea>
          </div>
        </div>
      );
    } else {
      button = (
        <div className="center">
          <div>
            <button
              onClick={this.submitPraise}
              className="praise-btn praise-btn-text mt-36"
            >
              ELOGIAR
            </button>
          </div>
        </div>
      );
    }
    return <div>{button}</div>;
  }
}
