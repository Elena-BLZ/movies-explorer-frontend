import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({ text, checked, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        className="filter-check-box"
        checked={checked}
        onChange={onChange}
      ></input>
      <span className="filter-check-box__pseudo-item">
        <span className="filter-check-box__circle"></span>
      </span>
      <span className="filter-check-box__label-text">{text}</span>
    </label>
  );
}
