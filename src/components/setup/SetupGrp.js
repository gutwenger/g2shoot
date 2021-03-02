import React from 'react'

const SetupGrp = ({ label, item: { name, min, max, defaultValue } }) => {
    
    return (
        <div className="setupGrp">
            <label htmlFor={`setupGrp_${name}`} className="setupGrp__label">
                { label }
            </label>
            <input
                id={`setupGrp_${name}`}
                className="setupGrp__input"
                name={name}
                type="number"
                min={min}
                max={max}
                defaultValue={defaultValue}
                required
            />
        </div>
    )
}

export default SetupGrp;