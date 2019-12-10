import React from "react";
import Image from "../Image";

import "./profile.scss";

class Profile extends React.Component {
  renderImages = images =>
    images ? (
      images.map(({ title, description, imageUrl, price, owner }) => (
        <div className="gallery__item">
          <Image
            title={title}
            description={description}
            url={imageUrl}
            owner={owner}
            price={price}
            renderComments={this.renderComments}
            requestSendComment={this.requestSendComment}
          />
        </div>
      ))
    ) : (
      <span>You haven't purchased any images yet</span>
    );

  render() {
    const { user } = this.props;
    return user ? (
      <div className="profile__wrapper">
        <section className="profile__user-metadata">
          <span>Name: {user.name}</span>
          <span>Balance: {user.balance}</span>
        </section>
        <section className="profile__user-images">
          <span>Purchased images:</span>
          <span>{this.renderImages(user.images)}</span>
        </section>
      </div>
    ) : (
      <section>Log in or sign up to view your profile!</section>
    );
  }
}

export default Profile;
