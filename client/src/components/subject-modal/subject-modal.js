import React from "react";

import "./subject-modal.scss";
class SubjectModal extends React.Component {
  render() {
    return (
      <div
        className="subject-modal__background"
        onClick={this.props.closeModal}
      >
        <section className="subject-modal__container">
          <span className="subject-modal__title">Subject details</span>
          <div className="subject-modal__description">
            <span>Subject name: {this.props.name}</span>
            <span>Location: {this.props.location}</span>
            <span>Type: {this.props.type}</span>
            <span>Teachers here</span>
          </div>
          <button onClick={this.props.closeModal} className="close-button">
            X
          </button>
        </section>
      </div>
    );
  }
}

export default SubjectModal;
