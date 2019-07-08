import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchAllSpots } from '../actions/spot_actions';
import { receiveGeolocation } from '../actions/location_filter_actions';

class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchParams: '',
          };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllSpots();
      }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveGeolocation(e.target.children[0].value)
        this.props.history.push('/spots');
    }

    handleClick(e) {
        let spotIndex = Object.values(this.props.state.entities.spots)[e]
        this.props.history.push(`/spots/${spotIndex.id}`);
    }

    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <>
            <main className="splash_main">
                <div className="splash_subtitle1">
                    Find yourself outside.
                </div>
                
                <div className="splash_subtitle2">
                    Book unique camping experiences on over <nobr className="bold">300,000</nobr> campsites, ranches, vineyards, public parks and more.
                </div>

                <div className="search_bar_main">
                    <i className="fas fa-search search_bar_icon"></i>
                    <form className="search_form" onSubmit={this.handleSubmit}>
                        <input placeholder="Try New York..." className="search_bar" onChange={this.update('searchParams')}
                            value={this.state['searchParams']}/>
                        <input onClick={() => this.handleSubmit} type="submit" className="search_button" value="Search" /> 
                    </form>
                </div>

                <div className="splash_subtitle3">
                    Discover camping...
                </div>

                <div className="splash_container">
                    <div className="splash_main_section">
                        <div className="splash_section" onClick={() => this.handleClick(0)}>
                            <div className="splash_section_img">
                                <img src="https://s3.amazonaws.com/camp-away-dev/spot1_0.jpg" alt=""/>
                            </div>
                            <div className="splash_section_details">    
                                <h3 className="splash_section_name">Cabin in the Woods</h3>
                                <div className="splash_section_location">
                                    New York
                                </div>
                            </div>
                        </div>

                        <div className="splash_section" onClick={() => this.handleClick(1)}>
                            <div className="splash_section_img">
                                <img src="https://s3.amazonaws.com/camp-away-dev/spot2_0.jpg"  alt=""/>
                            </div>
                            <div className="splash_section_details">   
                                <h3 className="splash_section_name">Oh! Pear Orchards</h3>
                                <div className="splash_section_location">
                                    New York
                                </div>
                            </div>    
                        </div>

                        <div className="splash_section" onClick={() => this.handleClick(2)}>
                            <div className="splash_section_img">
                                <img src="https://s3.amazonaws.com/camp-away-dev/spot3_0.jpg"  alt=""/>
                            </div>
                            <div className="splash_section_details">   
                                <h3 className="splash_section_name">Blue Mountain Camping</h3>
                                <div className="splash_section_location">
                                    New York
                                </div>
                            </div>
                        </div>

                        <div className="splash_section" onClick={() => this.handleClick(3)}>
                            <div className="splash_section_img">
                                <img src="https://s3.amazonaws.com/camp-away-dev/spot4_0.jpg"  alt=""/>
                            </div>
                            <div className="splash_section_details">  
                                <h3 className="splash_section_name">Enveloped in Woods</h3>
                                <div className="splash_section_location">
                                    New York
                                </div>
                            </div>
                        </div>

                        <div className="splash_section" onClick={() => this.handleClick(4)}>
                            <div className="splash_section_img">
                                <img src="https://s3.amazonaws.com/camp-away-dev/spot5_0.jpg"  alt=""/>
                            </div>
                            <div className="splash_section_details"> 
                                <h3 className="splash_section_name">Lakeside Forest</h3>     
                                <div className="splash_section_location">
                                    New York
                                </div>
                            </div>
                        </div>

                        <div className="splash_section" onClick={() => this.handleClick(8)}>
                            <div className="splash_section_img">
                                <img src="https://camp-away-dev.s3.amazonaws.com/spot9_0.jpg"  alt=""/>
                            </div>
                            <div className="splash_section_details">
                                <h3 className="splash_section_name">Rustic, Enchanted Cabin</h3>
                                <div className="splash_section_location">
                                    New York
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="foot_div">
                    <div className="foot_div_section">
                        <div className="foot_description">
                            <div className="foot_description_title">
                                CampAway is everywhere you want to camp.
                            </div>
                            <div className="foot_description_text">
                                Discover unique experiences on ranches, nature preserves, farms,vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites,car camping, airstreams, tiny houses, RV camping, glamping tents and more.
                            </div>
                        </div>

                        <div className="foot_social">
                            <div className="foot_social_title">
                                <div className="foot_description_title">
                                Social
                                </div>

                                <div className="social_link_li">
                                    <a href="https://github.com/davidyoon85" className="social_link"><i className="fab fa-github"> Github</i></a>
                                
                                </div>
                                <div className="social_link_li">
                                    <a href="https://www.linkedin.com/in/davidyoon85" className="social_link"><i className="fab fa-linkedin"> Linkedin</i></a>
                                
                                </div>
                                <div className="social_link_li">
                                    <a href="https://davidyoon85.github.io" className="social_link"><i id="portfolio_link" className="fas fa-user"> Portfolio</i></a>
                                  
                                </div>
                            </div>
                            <div className="foot_social_text">
                                    
                            </div>
                        </div>
                    </div>
                </div>
                </footer>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllSpots: () => dispatch(fetchAllSpots()),
        receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);