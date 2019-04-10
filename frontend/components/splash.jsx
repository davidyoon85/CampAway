import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.history.push('/spots');
    }

    render() {
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
    </>
    )
}
}

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        state
    }
}

export default connect(mapStateToProps, null)(Splash);