import React from "react";

import "./image.scss";

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
    const { requestSendComment, title, user: author } = this.props;
    e.preventDefault();
    requestSendComment(this.state.inputValue, title, author);
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
      <span className="image__warning">
        There is no comments for this image
      </span>
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
        <div className="image__picture">
          <img src={url} />
        </div>
        <div className="image__item-description">
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Owner: {owner}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Image;
