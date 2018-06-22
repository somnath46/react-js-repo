import React from "react";

const CheckBox = props => {
    return (
        <div className="from-group">
            <label for={props.name} className="form-label">
                {props.title}
            </label>
            <div className="checkbox">
                {props.options.map(option => {
                    return (
                        <label key={option} className="checkbox-inline">
                            <input 
                                id={props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option}
                                checked={props.selectedOption.indexOf(option) > -1}
                                type="checkBox"
                            />
                            {option}
                        </label>
                    );
                }
                )}
            </div>
        </div>
    );
};

export default CheckBox;