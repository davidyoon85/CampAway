import React from 'react';
import { withRouter } from 'react-router-dom';

class SpotFilter extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.handlePricingFilter = this.handlePricingFilter.bind(this);
    this.handleGroupFilter = this.handleGroupFilter.bind(this);

    this.state = {
      pets_allow: false,
      group_size: 1,
      campfire: false,
      tent: false,
      parking: false,
      toilet: false,
      shower: false,
      hiking: false,
      biking: false,
      paddling: false,
      price25: false,
      price50: false,
      price100: false,
      group5: false,
      group10: false,
      group20: false
    }

    this.showAmenities = this.showAmenities.bind(this);
    this.hideAmenities = this.hideAmenities.bind(this);
    this.showPricing = this.showPricing.bind(this);
    this.hidePricing = this.hidePricing.bind(this);
    this.showActivities = this.showActivities.bind(this);
    this.hideActivities = this.hideActivities.bind(this);
    this.showGroup = this.showGroup.bind(this);
    this.hideGroup = this.hideGroup.bind(this);
 
  }

  showAmenities(event) {
    event.preventDefault();

    this.setState({ showAmenities: true }, () => {
      document.addEventListener('click', this.hideAmenities)
    })
  };

  hideAmenities() {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showAmenities: false }, () => {
        document.removeEventListener('click', this.hideAmenities);
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

  showGroup(event) {
    event.preventDefault();

    this.setState({ showGroup: true }, () => {
      document.addEventListener('click', this.hideGroup)
    })
  };

  hideGroup() {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showGroup: false }, () => {
        document.removeEventListener('click', this.hideGroup);
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
      const currentName = e.target.name;
        this.setState({[currentName]: !this.state[currentName]}, () => {
      });

      if (filters[category]) {
        removeSingleFilter(category);
      } else {
        receiveSingleFilter(category);
      }
    }
  }

  handlePricingFilter(amount) {
    const {
      receivePricingFilter,
      removePricingFilter,
      filters
    } = this.props;

    return e => {
      const currentName = e.target.name;
        this.setState({[currentName]: !this.state[currentName]}, () => {
      });

      if (filters['pricing'] === amount) {
        removePricingFilter(amount);
      } else {
        receivePricingFilter(amount);
      }
    }
  }

  handleGroupFilter(amount) {
    const {
      receiveGroupFilter,
      removeGroupFilter,
      filters
    } = this.props;

    return e => {
      const currentName = e.target.name;
        this.setState({[currentName]: !this.state[currentName]}, () => {
      });

      if (filters['group'] === amount) {
        removeGroupFilter(amount);
      } else {
        receiveGroupFilter(amount);
      }
    }
  }

  clearFilters() {
    debugger
    Object.keys(this.state).map(item => 
      this.setState({ [item]: false }))
  }

  render() {
    const { filters } = this.props;

    //campsite area, essentials, amenities, price, activites

    return (
      <div className="spot_filters_header">
        <div className="spot_filters_container">
          <div className="spot_filter_section">
            <button onClick={this.showAmenities}>
            Amenities
            </button> 
            { 
              this.state.showAmenities 
              ? (
              <div 
                className="spot_filter_item"
                ref={(element) => {
                  this.dropdownMenu = element;
              }}
              >
                <button 
                  className={this.state.tent ? 'active_filter_button' : ''} 
                  name="tent" 
                  onClick={this.toggle('tent')}>
                  <img src="https://image.flaticon.com/icons/svg/1535/1535412.svg"/>
                  Tent</button>
                <button 
                  className={this.state.campfire ? 'active_filter_button' : ''} 
                  name="campfire" 
                  onClick={this.toggle('campfire')}>
                  <img src="https://image.flaticon.com/icons/svg/1535/1535413.svg"/>
                  Campfire</button>
                <button 
                  className={this.state.pets_allow ? 'active_filter_button' : ''} 
                  name="pets_allow" 
                  onClick={this.toggle('pets_allow')}>
                  <img src="https://image.flaticon.com/icons/svg/71/71702.svg"/>
                  Pets Allowed</button>
                  <button 
                  className={this.state.parking ? 'active_filter_button' : ''} 
                  name="parking" 
                  onClick={this.toggle('parking')}>
                  <img src="https://image.flaticon.com/icons/svg/818/818383.svg"/>
                  Parking</button>
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
                <button 
                  className={this.state.biking ? 'active_filter_button' : ''} 
                  name="biking"
                  onClick={this.toggle('biking')}>
                  <img src="https://image.flaticon.com/icons/svg/565/565350.svg"/>
                  Biking</button>
                <button 
                  className={this.state.hiking ? 'active_filter_button' : ''} 
                  name="hiking"
                  onClick={this.toggle('hiking')}>
                  <img src="https://image.flaticon.com/icons/svg/71/71423.svg"/>
                  Hiking</button>
                <button 
                  className={this.state.paddling ? 'active_filter_button' : ''} 
                  name="paddling"
                  onClick={this.toggle('paddling')}>
                  <img src="https://image.flaticon.com/icons/svg/38/38607.svg"/>
                  Paddling</button>
              </div>)
              : (
                null
              )
            }
          </div>

          <div className="spot_filter_section">
            <button onClick={this.showGroup}>
            Group
            </button> 
            { 
              this.state.showGroup 
              ? (
              <div 
              className="spot_filter_item"
                ref={(element) => {
                  this.dropdownMenu = element;
              }}
              >
                <button 
                  className={this.state.group5 ? 'active_filter_button' : ''} 
                  name="group5"
                  onClick={this.handleGroupFilter(5)}>5+ Campers</button>
                <button 
                  className={this.state.group10 ? 'active_filter_button' : ''} 
                  name="group10"
                  onClick={this.handleGroupFilter(10)}>10+ Campers</button>
                <button 
                  className={this.state.group20 ? 'active_filter_button' : ''} 
                  name="group20"
                  onClick={this.handleGroupFilter(20)}>20+ Campers</button>
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
                <button 
                  className={this.state.price25 ? 'active_filter_button' : ''} 
                  name="price25"
                  onClick={this.handlePricingFilter(25)}>Under $25</button>
                <button 
                  className={this.state.price50 ? 'active_filter_button' : ''} 
                  name="price50"
                  onClick={this.handlePricingFilter(50)}>Under $50</button>
                <button 
                  className={this.state.price100 ? 'active_filter_button' : ''} 
                  name="price100"
                  onClick={this.handlePricingFilter(100)}>Under $100</button>
              </div>)
              : (
                null
              )
            }
          </div>

          <div className="spot_filter_section">
            <button onClick={() => this.props.clearAllFilters().then(this.clearFilters())}>Clear Filters</button>
          </div>
       </div>
      </div>
    )
  }
}

export default withRouter(SpotFilter);