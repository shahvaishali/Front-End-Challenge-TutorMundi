import React from "react";
import "../../App.css";
import "../Praise/Praise.css";

export default function Figure(props) {
  let figStyle = props.style ? "icon-selected" : "icon-unselected";
  let backColor = props.style ? "#2cc6d0" : "#ffffff";
  let capStyle = props.style ? "#ffffff" : "#2cc6d0";

  return (
    <figure
      onClick={props.onClick}
      key={props.name}
      className={`compliment mr-12 mb-24 mt-0 ml-0 ${figStyle}`}
      style={{ backgroundColor: backColor }}
    >
      {props.icon}
      <figcaption className="compliment-title" style={{ color: capStyle }}>
        {props.caption}
      </figcaption>
    </figure>
  );
}
