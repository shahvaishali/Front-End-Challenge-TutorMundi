import React, { Component } from "react";
import Figure from "./Figure";
import "../Praise/Praise.css";
import "../../App.css";
import { ReactComponent as Lamp } from "./img/lamp.svg";
import { ReactComponent as LookingGlass } from "./img/looking-glass.svg";
import { ReactComponent as SwissKnife } from "./img/swiss-knife.svg";
import { ReactComponent as CheckedSheet } from "./img/checked-sheet.svg";
import { ReactComponent as SmileFace } from "./img/smile-face.svg";

export default class Praise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elogiar: false,
      figColor: Array(5).fill(false),
      svg: [
        {
          name: "lamp",
          icon: <Lamp className="icon" />,
          caption: "Estimula a criatividade"
        },
        {
          name: "looking-glass",
          icon: <LookingGlass className="icon" />,
          caption: "Estimula a curiosidade"
        },
        {
          name: "swiss-knife",
          icon: <SwissKnife className="icon" />,
          caption: "Se adapta à necessidade"
        },
        {
          name: "checked-sheet",
          icon: <CheckedSheet className="icon" />,
          caption: "Ótima didática"
        },
        {
          name: "smile-face",
          icon: <SmileFace className="icon" />,
          caption: "Gente boasíssima"
        }
      ]
    };
    this.submitPraise = this.submitPraise.bind(this);
    this.getData = this.getData.bind(this);
  }

  /* Function will update the figures that are selected */
  changeColor(i) {
    let modCol = this.state.figColor;
    modCol[i] = !modCol[i];
    this.setState({ figColor: modCol });

    //Passes selected figures to praise state in parent component
    let praiseArray = [];
    for (let i = 0; i < this.state.figColor.length; i++) {
      if (this.state.figColor[i]) {
        praiseArray.push(this.state.svg[i].caption);
      }
    }
    this.props.inputPraise(praiseArray);
  }

  /* Switches state to display leave a message and praise box once praise/elogiar button is clicked */
  submitPraise() {
    let praise = !this.state.elogiar;
    this.setState({
      elogiar: praise
    });
  }

  /* Passes textbox value to feedback state in parent component*/
  getData(e) {
    let fb = e.target.value;
    this.props.inputFeedback(fb);
  }

  /* Child component, Figure is rendered */
  renderFigure(figNum, name, icon, caption) {
    return (
      <Figure
        value={figNum}
        key={this.state.svg[figNum].name}
        icon={this.state.svg[figNum].icon}
        caption={this.state.svg[figNum].caption}
        onClick={() => this.changeColor(figNum)}
        style={this.state.figColor[figNum]}
      />
    );
  }

  render() {
    let button;
    if (this.state.elogiar) {
      button = (
        <div className="center">
          <div>
            <p className="compliment-main-title mt-60">Envie um elogio</p>
          </div>
          <div id="figure">
            {this.renderFigure(0)}
            {this.renderFigure(1)}
            {this.renderFigure(2)}
            {this.renderFigure(3)}
            {this.renderFigure(4)}
          </div>
          <div>
            <p className="compliment-main-title">Deixe um recado</p>
          </div>
          <div>
            <textarea
              className="compliment-msg"
              placeholder="Faça elogios, agradecimentos e sugestões. Os tutores adoram!"
              onChange={this.getData}
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
