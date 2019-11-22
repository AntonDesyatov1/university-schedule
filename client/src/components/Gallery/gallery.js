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

  renderImages(images) {
    const login = this.props.user && this.props.user.login;
    const comments = this.props.user && this.props.user.comments;
    return images.map(
      ({ title, description, imageUrl, price, owner, comments }) => (
        <div className="gallery__item-wrapper">
          <div className="gallery__item-info">
            <section className="gallery__item-info-content">
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
            <button className="gallery__item-purchase">
              Purchase this image
            </button>
          </div>
          <div className="gallery__item-comments-wrapper">
            <section className="gallery__item-comments">
              {this.renderComments(comments)}
            </section>
            {this.props.user ? (
              <form
                onSubmit={this.handleSubmit}
                className="gallery__item-comments-form"
              >
                <textarea
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="comment"
                  style={{ width: "80%" }}
                />
                <input type="submit" value="Send comment" />
              </form>
            ) : (
              <span className="gallery__warning">
                Log in to leave your comment
              </span>
            )}
          </div>
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
