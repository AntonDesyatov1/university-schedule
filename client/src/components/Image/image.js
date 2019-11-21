import React from "react";

import "./image.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    const { requestSendComment, title } = this.props;
    e.preventDefault();
    requestSendComment(this.state.inputValue, title);
  }

  renderComments(comments) {
    return comments.length ? (
      comments.map(({ author, comment }) => {
        return (
          <div className="image__comment">
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
      <span>There is no comments for this image</span>
    );
  }

  render() {
    const {
      title,
      description,
      price,
      owner,
      user,
      comments,
      url
    } = this.props;
    return (
      <React.Fragment>
        <div className="image__container">
          <img src={url} />
        </div>
        <div>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Owner: {owner}</p>
        </div>
        <section className="image__comment-section">
          {this.renderComments(comments)}
          {user ? (
            <form onSubmit={this.handleSubmit} className="image__send-comment">
              <textarea
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                name="comment"
              />
              <input type="submit" value="Send comment" />
            </form>
          ) : (
            <span>Log in to leave your comment</span>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default Image;
