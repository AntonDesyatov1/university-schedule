import React from "react";
import { connect } from "react-redux";

import "./menu.scss";
class Menu extends React.Component {
  state = {
    editMode: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ editMode: false });
  };

  renderEditForm = () => (
    <form className="menu__info" onSubmit={this.handleSubmit}>
      <span>
        <label>Phone number</label>
        <input placeholder="Your phone number" />
      </span>
      <span>
        <label>e-mail</label>
        <input placeholder="Your email" />
      </span>
      <button onClick={this.handleSubmit}>Save</button>
    </form>
  );

  render() {
    const {
      user: { name, img },
    } = this.props;
    return (
      <section className="menu">
        <span className="menu__img">
          <img src={img} />
        </span>

        {this.state.editMode ? (
          this.renderEditForm()
        ) : (
          <div className="menu__info">
            <span>{name}</span>
            <button onClick={() => this.setState({ editMode: true })}>
              Edit info
            </button>
          </div>
        )}
        <button className="menu__close-button" onClick={this.props.toggleMenu}>
          Close
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(Menu);
