const SplashItem = spot => {
  <div className="splash_section" onClick={() => this.handleClick(spot.id)}>
    <div className="splash_section_img">
      <img src={spot.photoUrls[0]} alt="" />
    </div>
    <div className="splash_section_details">
      <h3 className="splash_section_name">{spot.title}</h3>
      <div className="splash_section_location">New York</div>
    </div>
  </div>;
};

export default SplashItem;
