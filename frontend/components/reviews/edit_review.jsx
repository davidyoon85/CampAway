import React from 'react';

class EditReview extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.review
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId)
    this.props.fetchSingleSpot(this.props.match.params.spotId)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.review !== newProps.review) {
      this.setState(newProps.review)
    }
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.props.match.params.spotId, this.state).then(() => this.props.history.push(`/spots/${this.props.match.params.spotId}`))
  }

  toDateInputValue () {
    let date = new Date();
    return date.toJSON().slice(0, 10);
  }

  render(){
debugger
    if (!this.props.review) {
        debugger
      return null
    }

    if (!this.props.spot) {
        debugger
      return null
    }
    return(
      <div className='edit-review-form'>

        <div className='edit-review-listing-name'>{this.props.spot.title}</div>
        <form className='edit-form-submission'onSubmit={this.handleSubmit}>
              <textarea className='edit-review-description'
                cols='50'
                rows='3'
                value={this.state.description}
                onChange={this.update('description')}  />
            <input className='edit-review-submit' type='submit' value='Submit Review'/>
          </form>
      </div>
    );
  }
}

export default EditReview;