import React from 'react';

export const Step1 = (props) => {
    if (props.currentStep !== 1) {
        return null;
    }

    return (
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                value={props.email}
                onChange={props.handleChange}
            />
        </div>
    );
};
