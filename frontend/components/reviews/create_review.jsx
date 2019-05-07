import React from 'react';

class CreateReview extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      description: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleSpot(this.props.match.params.spotId)
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.props.match.params.spotId, this.state).then(
      () => this.props.history.push(`/spots/${this.props.match.params.spotId}`))
  }

  render(){
    console.log(this.props.spot)
    if (!this.props.spot) {
      return null
    }

    return(
      <div className='create_review_form'>
        <div className='review_spot_title'>{this.props.spot.title}</div>
        <form className='review_form'onSubmit={this.handleSubmit}>
            <textarea className='review_description'
              cols='50'
              rows='20'
              value={this.state.description}
              onChange={this.update('description')}
              placeholder='Leave a review about your experience here!'/>
            <input className='create_review_submit' type='submit' value='Submit Review'/>
          </form>
      </div>
    );
  }
}

export default CreateReview;
