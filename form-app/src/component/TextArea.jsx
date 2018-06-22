import React from "react";

const TextArea = props => {
    return (
        <div className="form-group">
            <label className="form-label">{props.title}</label>
            <textarea 
                className="form-control"
                id={props.namme}
                name={props.name}
                rows={props.rows}
                cols={props.cols}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default TextArea;