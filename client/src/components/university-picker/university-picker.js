import React from "react";

import "./university-picker.scss";

const UniversityPicker = ({ universities, onPick }) => {
  return (
    <section className="university-picker">
      <div className="university-picker__container">
        {universities &&
          universities.map((uni, index, arr) => (
            <div
              className={
                index === arr.length - 1
                  ? "university-picker__university-card-last"
                  : "university-picker__university-card"
              }
              onClick={onPick}
            >
              <div className="university-picker__img-container">
                <img src={uni.img} id={uni.name} />
              </div>
              <span className="university-picker__name">{uni.name}</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default UniversityPicker;
