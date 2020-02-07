import React from "react";

import "./lesson-card.scss";

class LessonCard extends React.Component {
  render() {
    return <span className="lesson-card">{this.props.name}</span>;
  }
}

export default LessonCard;
