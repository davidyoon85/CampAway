import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotFilter extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.handlePricingFilter = this.handlePricingFilter.bind(this);

    this.state = {
      showAccomodations: false,
      showPricing: false,
    }

    this.showAccomodations = this.showAccomodations.bind(this);
    this.hideAccomodations = this.hideAccomodations.bind(this);
    this.showPricing = this.showPricing.bind(this);
    this.hidePricing = this.hidePricing.bind(this);
    this.showActivities = this.showActivities.bind(this);
    this.hideActivities = this.hideActivities.bind(this);
  }

  showAccomodations(event) {
    event.preventDefault();

    this.setState({ showAccomodations: true }, () => {
      document.addEventListener('click', this.hideAccomodations)
    })
  };

  hideAccomodations() {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showAccomodations: false }, () => {
        document.removeEventListener('click', this.hideAccomodations);
      })
    }
  };

  showPricing(event) {
    event.preventDefault();

    this.setState({ showPricing: true }, () => {
      document.addEventListener('click', this.hidePricing)
    })
  };

  hidePricing() {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showPricing: false }, () => {
        document.removeEventListener('click', this.hidePricing);
      })
    }
  };

  showActivities(event) {
    event.preventDefault();

    this.setState({ showActivities: true }, () => {
      document.addEventListener('click', this.hideActivities)
    })
  };

  hideActivities() {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showActivities: false }, () => {
        document.removeEventListener('click', this.hideActivities);
      })
    }
  };

  toggle (category) {
    const {
      filters,
      removeSingleFilter,
      receiveSingleFilter
    } = this.props;

    return e => {
      if (filters[category]) {
        removeSingleFilter(category);
      } else {
        receiveSingleFilter(category);
      }
    }
  }

  handlePricingFilter (amount) {
    const {
      receivePricingFilter,
      removePricingFilter,
      filters
    } = this.props;

    return e => {
      if (filters['pricing'] === amount) {
        removePricingFilter(amount);
      } else {
        receivePricingFilter(amount);
      }
    }
  }

  render() {
    const { filters } = this.props;

    //campsite area, essentials, amenities, price, activites

    return (
      <div className="spot_filters_header">
        <div className="spot_filters_container">
          <div className="spot_filter_section">
            <button onClick={this.showAccomodations}>
            Accomodations
            </button> 
            { 
              this.state.showAccomodations 
              ? (
              <div 
                className="spot_filter_item"
                ref={(element) => {
                  this.dropdownMenu = element;
              }}
              >
                <button value="any_accomodations">Any Accomodations</button>
                <button value="tent" onClick={this.toggle('tent')}>Tent</button>
                <button value="campfire" onClick={this.toggle('campfire')}>Campfire</button>
                <button value="pets_allow" onClick={this.toggle('pets_allow')}>Allow Pets</button>
              </div>)
              : (
                null
              )
            }
          </div>
          
          <div className="spot_filter_section">
            <button onClick={this.showPricing}>
            Pricing
            </button> 
            { 
              this.state.showPricing 
              ? (
              <div 
              className="spot_filter_item"
                ref={(element) => {
                  this.dropdownMenu = element;
              }}
              >
                <button onClick={this.handlePricingFilter(25)}>Under $25</button>
                <button onClick={this.handlePricingFilter(50)}>Under $50</button>
                <button onClick={this.handlePricingFilter(100)}>Under $100</button>
              </div>)
              : (
                null
              )
            }
          </div>

          <div className="spot_filter_section">
            <button onClick={this.showActivities}>
            Activities
            </button> 
            { 
              this.state.showActivities 
              ? (
              <div 
                className="spot_filter_item"
                ref={(element) => {
                  this.dropdownMenu = element;
              }}
              >
                <button onClick={this.toggle('biking')}>Biking</button>
                <button onClick={this.toggle('hiking')}>Hiking</button>
                <button onClick={this.toggle('paddling')}>Paddling</button>
              </div>)
              : (
                null
              )
            }
          </div>

          <div className="spot_filter_section">
            <button onClick={() => this.props.clearAllFilters()}>Clear Filters</button>
          </div>
       </div>
      </div>
    )
  }
}

export default withRouter(SpotFilter);