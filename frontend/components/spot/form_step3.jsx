import React from 'react';

export const Step3 = (props) => {
    if (props.currentStep !== 3) {
        return null;
    }

    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    className="form-control"
                    id="password"
                    name="password"
                    type="password"
                    placehoder="gimme ur password"
                    value={props.password}
                    onChange={props.handleChange}
                    />
            </div>
            <button className="btn btn-success btn-block">Sign Up</button>
        </React.Fragment>
    );
}