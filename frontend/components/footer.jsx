import React from 'react';

const Footer = () => {
    return (
    <>
    <div className="foot_div">
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

    {/* <div className="foot_bottom">
        <div className="pull-left">
              Made in California.
            </div>
            <div className="pull-right">
              © 2019 Camp Away
        </div>
    </div> */}
    </>
    )
};

export default Footer;