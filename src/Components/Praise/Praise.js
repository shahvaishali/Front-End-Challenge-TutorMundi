import React, { Component } from "react";
import { figures } from "./SvgData.js";

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
        <div>
          <div>
            <p>Envie um elogio</p>
          </div>
          {figures}
          <div>
            <p>Deixe um recado</p>
          </div>
          <div>
            <textarea placeholder="Faça elogios, agradecimentos e sugestões. Os tutores adoram!"></textarea>
          </div>
        </div>
      );
    } else {
      button = (
        <div>
          <button onClick={this.submitPraise}>ELOGIAR</button>
        </div>
      );
    }
    return <div>{button}</div>;
  }
}
