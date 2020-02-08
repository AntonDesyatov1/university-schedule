import React from "react";

import "./university-picker.scss";

const UniversityPicker = ({ universities, onPick }) => {
  return (
    <div className="university-picker">
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
                <img src={uni.img} />
              </div>
              <span>{uni.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UniversityPicker;
