import React, { Component } from "react";
import book from "./img/book.png";
import { ReactComponent as Star } from "./img/star.svg";

export default class Header extends Component {
  render() {
    const star = [];
    for (let i = 0; i < 5; i++) {
      star.push(<Star />);
    }

    return (
      <div>
        <div>
          <img src={book} alt="book" />
        </div>
        <div>
          <p>Como foi a ajuda do tutor?</p>
        </div>
        <div>{star}</div>
      </div>
    );
  }
}
