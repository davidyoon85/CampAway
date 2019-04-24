import React from 'react';
import { connect } from 'react-redux';
import { fetchAllSpots } from '../actions/spot_actions';
import { Link, withRouter } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllSpots();
      }

    handleSubmit() {
        this.props.history.push('/spots');
    }

    render() {
        const splashSpots = this.props.state.entities.spots || null;
    return (
    <>
    <div className="splash_main">
        <div className="splash_subtitle1">
            Find yourself outside.
        </div>
        <div className="splash_subtitle2">
            Book unique camping experiences on over <nobr className="bold">300,000</nobr> campsites, ranches, vineyards, public parks and more.
        </div>

        <div className="search_bar_main">
            <i className="fas fa-search fa-lg search_icon"></i>
            <input className="search_bar" type="search" placeholder="Try New York, Camping, cabin..." />
            <input onClick={this.handleSubmit} type="submit" className="search_button" value="Search" />
        </div>

        <div className="splash_subtitle3">
            Discover camping...
        </div>

        <div className="splash_main_section">

            <div className="splash_section">
                <div className="index_section">
                    {/* <Link to={`/spots/${splashSpots[0].id}`}> */}
                        <img src="https://img.hipcamp.com/image/upload/q_auto,f_auto/v1544737872/best2018hipcamps_v6pluc.jpg" />
                    {/* </Link> */}
                        <div className="index_section_container">    
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>
                </div>

                <div className="index_section">
                    <img src="https://img.hipcamp.com/image/upload/f_auto,q_auto/v1528746350/01-book_arxtej.jpg" />
                        <div className="index_section_container">   
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>    
                </div>

                <div className="index_section">
                    <img src="https://img.hipcamp.com/image/upload/f_auto,q_auto/v1528746350/02-this_vkgeye.jpg" />
                        <div className="index_section_container">   
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>
                </div>

                <div className="index_section">
                    <img src="https://img.hipcamp.com/image/upload/q_auto,f_auto/v1544737872/best2018hipcamps_v6pluc.jpg" />
                        <div className="index_section_container">  
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>
                </div>

                <div className="index_section">
                    <img src="https://img.hipcamp.com/image/upload/f_auto,q_auto/v1528746350/01-book_arxtej.jpg" />
                        <div className="index_section_container"> 
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>
                </div>

                <div className="index_section">
                    <img src="https://img.hipcamp.com/image/upload/f_auto,q_auto/v1528746350/02-this_vkgeye.jpg" />
                        <div className="index_section_container">    
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>
                </div>
                
                <div className="index_section">
                    <img src="https://img.hipcamp.com/image/upload/q_auto,f_auto/v1544737872/best2018hipcamps_v6pluc.jpg" />
                        <div className="index_section_container">
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>
                </div>

                <div className="index_section">
                    <img src="https://img.hipcamp.com/image/upload/f_auto,q_auto/v1528746350/01-book_arxtej.jpg" /> 
                        <div className="index_section_container">    
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>
                </div>

                <div className="index_section">
                    <img src="https://img.hipcamp.com/image/upload/f_auto,q_auto/v1528746350/02-this_vkgeye.jpg" />
                        <div className="index_section_container">
                            {/* <div className="index_section_header"> */}
                            <h3 className="index_section_header">See the nominess</h3>
                            {/* </div> */}
                            <div className="index_section_subheader">
                            2018 Hipcamps of the year
                            </div>
                        </div>
                </div>

            </div>
        </div>
    </div>

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
                                    <a href="https://www.instagram.com/davidyoon85/" className="social_link"><i className="fab fa-instagram"> Instagram</i></a>
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

const mapStateToProps = (state, ownProps) => {
    
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
    fetchAllSpots: () => dispatch(fetchAllSpots()),
}};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);