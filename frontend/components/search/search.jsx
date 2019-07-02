import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: '',
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.receiveGeolocation(e.target.children[0].value)
    this.props.history.push("/spots")
  }

  render() {
    if (this.props.location.pathname === '/host' || this.props.location.pathname.includes("review")) {
      return (
        null
      )
    } else {
      return (
       <div className="search_container">
         <i className="fas fa-search fa-xs search_icon"></i>
         <form className="search_form" onSubmit={this.handleSubmit}>
           <input placeholder="Search..." className="search_nav_bar" onChange={this.update('searchParams')}
             value={this.state['searchParams']}
           />
         </form>
       </div>
     );
    }
  }
}

export default withRouter(Search);