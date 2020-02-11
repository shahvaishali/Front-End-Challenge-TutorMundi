import React, { Component } from "react";
import book from "./img/book.png";
import { ReactComponent as Star } from "./img/star.svg";
import "../Header/Header.css";
import "../../App.css";

export default class Header extends Component {
  render() {
    const star = [];
    for (let i = 0; i < 5; i++) {
      star.push(<Star className="star ml-12" />);
    }

    return (
      <div>
        <section className="center">
          <div>
            <img src={book} alt="book" className="book" />
          </div>
          <div>
            <p className="text-title mb-24">Como foi a ajuda do tutor?</p>
          </div>
          <div>{star}</div>
        </section>
      </div>
    );
  }
}
