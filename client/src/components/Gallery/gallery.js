import React from "react";
import Image from "../Image";
import PropTypes from "prop-types";
import "./gallery.scss";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null
    };

    this.requestSendComment = this.requestSendComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGalleryImagesAction();
  }

  requestSendComment(comment, title, author) {
    this.props.postCommentAction(comment, title, author);
  }

  renderComments(comments) {
    return comments.length ? (
      comments.map(({ author, comment }) => {
        return (
          <div className="gallery__item-comment">
            <p>Author of comment: {author}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: comment
              }}
            ></p>
          </div>
        );
      })
    ) : (
      <span className="image__warning">
        There is no comments for this image
      </span>
    );
  }

  handleSubmit(e) {
    const { requestSendComment, title, user: author } = this.props;
    e.preventDefault();
    this.requestSendComment(this.state.inputValue, title, author);
  }

  renderImages(images) {
    const login = this.props.user && this.props.user.login;
    const comments = this.props.user && this.props.user.comments;
    return images.map(
      ({ title, description, imageUrl, price, owner, comments }) => (
        <div className="gallery__item-wrapper">
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
          {/* <button className="gallery__item-purchase">
            Purchase this image
          </button> */}
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
