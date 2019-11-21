import React from "react";
import Image from "../Image";
import PropTypes from "prop-types";
import "./gallery.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null
    };

    this.requestSendComment = this.requestSendComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchGalleryImagesAction();
  }

  requestSendComment(comment, title) {
    this.props.postCommentAction(comment, title);
  }

  renderImages(images) {
    const login = this.props.user && this.props.user.login;
    return images.map(
      ({ title, description, imageUrl, price, owner, comments }) => (
        <div className="gallery__item-container">
          <section className="gallery__item">
            <Image
              title={title}
              description={description}
              url={imageUrl}
              owner={owner}
              price={price}
              comments={comments}
              user={login}
              requestSendComment={this.requestSendComment}
            />
          </section>
          <button>Purchase this image</button>
        </div>
      )
    );
  }

  render() {
    const { isLoading, images } = this.props;
    return (
      <div className="gallery">
        <span className="gallery__header">
          <p className="gallery__header-item">Gallery</p>
          <p className="gallery__header-item">
            On this page you can see all images that are hosted on our resource.
            You can comment each image if you want to!
          </p>
        </span>
        <span className="gallery__images">
          {isLoading || !images ? (
            <p>Loading... </p>
          ) : (
            this.renderImages(images)
          )}
        </span>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

Gallery.defaultProps = {
  images: []
};

export default Gallery;
