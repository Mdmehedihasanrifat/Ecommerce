import React from 'react';
import './forminput.scss'
const FromInput = ({handleChange,label,...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}
                  />{

            label?(<label className={`${otherProps.value.length?'shirnk':''} form-input`}>{label} </label>):null
        }
            
        </div>
    );
};

export default FromInput;