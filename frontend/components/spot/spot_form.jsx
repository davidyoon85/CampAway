import React from 'react';

class SpotForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            spot: [
                {title: ""},
                {body: ""},
                {price: null},
                {sites: null},
                {group_size: null},
                {lat: null},
                {long: null},
                {check_in: ""},
                {check_out: ""},

                {pets_allow: false, isActive: false},
                {campfire: false, isActive: false},
                {tent: false, isActive: false},
                {parking: false, isActive: false},
                {toilet: false, isActive: false},
                {shower: false, isActive: false},
                {hiking: false, isActive: false},
                {biking: false, isActive: false},
                {wildlife: false, isActive: false},
                {paddling: false, isActive: false}
            ]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick(idx) {
        let temp = this.state.spot;
        temp[idx].isActive = !temp[idx].isActive;
        this.setState({ arr: temp });
    }

    render() {
        return (
            <form>
                <h1>Create your spot!</h1><br />
                <input type="text" name="title" placeholder="title" onChange={this.handleChange} />
                <input type="text" name="body" placeholder="body" onChange={this.handleChange} />
                <input type="text" name="price" placeholder="price" onChange={this.handleChange} />
                <input type="text" name="sites" placeholder="sites" onChange={this.handleChange} />
                <input type="text" name="group_size" placeholder="group_size" onChange={this.handleChange} />
                <input type="text" name="lat" placeholder="lat" onChange={this.handleChange} />
                <input type="text" name="long" placeholder="long" onChange={this.handleChange} />
                <input type="text" name="check_in" placeholder="check_in" onChange={this.handleChange} />
                <input type="text" name="check_out" placeholder="check_out" onChange={this.handleChange} />
                <div>
                    {this.state.spot.map((ele, idx) =>

                        <button className="spot_form_button" key={idx} onClick={() => this.onClick(idx)}>
                            orange: {ele.name} / banana: {ele.isActive ? "true" : "false"}
                        </button>

                    )}
                </div>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default SpotForm;

{/* <div key={idx} onClick={() => this.onClick(idx)}>
    name: {ele.name} / isActive: {ele.isActive ? "true" : "false"}
</div> */}