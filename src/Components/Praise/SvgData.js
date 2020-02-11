import React from "react";
import { ReactComponent as Lamp } from "./img/lamp.svg";
import { ReactComponent as LookingGlass } from "./img/looking-glass.svg";
import { ReactComponent as SwissKnife } from "./img/swiss-knife.svg";
import { ReactComponent as CheckedSheet } from "./img/checked-sheet.svg";
import { ReactComponent as SmileFace } from "./img/smile-face.svg";

const svg = [
  {
    name: "lamp",
    icon: <Lamp />,
    caption: "Estimula a criatividade"
  },
  {
    name: "looking-glass",
    icon: <LookingGlass />,
    caption: "Estimula a curiosidade"
  },
  {
    name: "swiss-knife",
    icon: <SwissKnife />,
    caption: "Se adapta à necessidade"
  },
  {
    name: "checked-sheet",
    icon: <CheckedSheet />,
    caption: "Ótima didática"
  },
  {
    name: "smile-face",
    icon: <SmileFace />,
    caption: "Gente boasíssima"
  }
];

export const figures = [];
for (let i = 0; i < svg.length; i++) {
  figures.push(
    <figure key={svg[i].name}>
      {svg[i].icon}
      <figcaption>{svg[i].caption}</figcaption>
    </figure>
  );
}
