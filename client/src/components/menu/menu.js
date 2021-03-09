import React from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../store/user";

import "./menu.scss";
class Menu extends React.Component {
  state = {
    editMode: false,
  };

  componentDidMount() {
    const {
      user: { email, phoneNumber },
    } = this.props;
    this.setState({ email, phoneNumber });
  }

  handlePhoneNumberChange = (e) =>
    this.setState({ phoneNumber: e.target.value });

  handleEmailChange = (e) => this.setState({ email: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { phoneNumber, email } = this.state;
    const { login, updateUserInfo, university } = this.props;
    updateUserInfo({ phoneNumber, email, login, university });
    this.setState({ editMode: false });
  };

  renderEditForm = () => (
    <form className="menu__info" onSubmit={this.handleSubmit}>
      <span>
        <label>Phone number</label>
        <input
          placeholder="Your phone number"
          value={this.state.phoneNumber}
          onChange={this.handlePhoneNumberChange}
        />
      </span>
      <span>
        <label>e-mail</label>
        <input
          placeholder="Your email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
      </span>
      <button onClick={this.handleSubmit}>Save</button>
    </form>
  );

  render() {
    const {
      user: { fio, img, phoneNumber, email },
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
            <span>{fio}</span>
            <span>{phoneNumber}</span>
            <span>{email}</span>
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

const mapDispatchToProps = {
  updateUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
