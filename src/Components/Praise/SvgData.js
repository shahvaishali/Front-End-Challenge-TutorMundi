import React from "react";
import { ReactComponent as Lamp } from "./img/lamp.svg";
import { ReactComponent as LookingGlass } from "./img/looking-glass.svg";
import { ReactComponent as SwissKnife } from "./img/swiss-knife.svg";
import { ReactComponent as CheckedSheet } from "./img/checked-sheet.svg";
import { ReactComponent as SmileFace } from "./img/smile-face.svg";
import "../../App.css";
import "../Praise/Praise.css";

const svg = [
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
];

export const figures = [];
for (let i = 0; i < svg.length; i++) {
  figures.push(
    <figure key={svg[i].name} className="compliment mr-12 mb-24 mt-0 ml-0">
      {svg[i].icon}
      <figcaption className="compliment-title">{svg[i].caption}</figcaption>
    </figure>
  );
}
