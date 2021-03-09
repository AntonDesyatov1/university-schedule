import React from "react";

import "./lesson-card.scss";

//day lesson time location teacher
const LessonCard = ({ lesson, time, location, teacher }) => {
  return lesson ? (
    <div className="lesson-card">
      <span className="lesson-card__lesson-name">{lesson}</span>
      <span className="lesson-card__metadata">
        <span>{time}</span>
        <span>{location}</span>
        <span>{teacher && <span>{teacher}</span>}</span>
      </span>
    </div>
  ) : (
    <span className="lesson-card"></span>
  );
};

export default LessonCard;
