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
          <div className="subject-modal__body">
            <div className="subject-modal__description">
              <span>Subject name: {this.props.name}</span>
              <span>Location: {this.props.location}</span>
              <span>Type: {this.props.type}</span>
              <div className="subject-modal__teachers">
                {this.props.teachers.map(teacher => (
                  <div className="subject-modal__teacher-card">
                    <span>{teacher.name}</span>
                    <a href={teacher.link} target="_blank">
                      Read more
                    </a>
                    <div className="subject-modal__teacher-img-container">
                      <img src={teacher.img} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="subject-modal__materials">
              <span>first material</span>
              <span>first material</span>
            </div>
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
