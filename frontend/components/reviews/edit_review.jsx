import React, { Component } from "react";

class EditReview extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchReview(this.props.match.params.reviewId);
    this.props.fetchSingleSpot(this.props.match.params.spotId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.review !== newProps.review) {
      this.setState(newProps.review);
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .updateReview(this.props.match.params.spotId, this.state)
      .then(() => this.goBack());
  }

  toDateInputValue() {
    let date = new Date();
    return date.toJSON().slice(0, 10);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="create_review_form">
        <div className="review_spot_title">{this.props.spot.title}</div>
        <form className="review_form" onSubmit={this.handleSubmit}>
          <textarea
            className="review_description"
            cols="50"
            rows="10"
            maxLength="500"
            value={this.state.description}
            onChange={this.update("description")}
          />
          <input
            className="create_review_submit"
            type="submit"
            value="Submit Review"
          />
        </form>
      </div>
    );
  }
}

export default EditReview;
