import React, { Component } from "react";

class Comments extends React.Component {
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}

          <button
            className="remove-comment"
            onClick={
              this.props.removeComment.bind(null, this.props.params.postId, i)}
          >
            ×
          </button>
        </p>
      </div>
    );
  }
  // onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}
  handleSubmit(e) {
    e.preventDefault(); // stop page from refreshing when submitted
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
