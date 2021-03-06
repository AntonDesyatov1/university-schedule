import React from "react";

import "./university-picker.scss";

const UniversityPicker = ({ universities, onPick }) => {
  return (
    <section className="university-picker">
      <span className="university-picker__header">Choose your university</span>
      {universities &&
        universities.map((uni, index, arr) => (
          <div
            className="university-picker__university-card"
            id={uni.id}
            onClick={onPick}
          >
            <div className="university-picker__img-container">
              <img src={uni.img} id={uni.id} />
            </div>
            <span id={uni.id} className="university-picker__name">
              {uni.name}
            </span>
          </div>
        ))}
    </section>
  );
};

export default UniversityPicker;
