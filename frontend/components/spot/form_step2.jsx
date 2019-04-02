import React from 'react';

export const Step2 = (props) => {
    if (props.currentStep !== 2) {
        return null;
    }

    return(
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                className="form-control"
                id="username"
                name="username"
                type="text"
                placeholder="gimme ur name"
                value={props.username}
                onChange={props.handleChange}
                />
        </div>
    );
}