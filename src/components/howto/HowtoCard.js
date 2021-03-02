import React from 'react';

const HowtoCard = ({ step, descriptions }) => {

    let descriptionsDisplay = descriptions && descriptions.map((item, i) => (
        <p key={`howto-${step}-${i}`} className="howtocard__con__p">
            { item }
        </p>
    ))

    console.log(descriptionsDisplay);

    return (
        <div className="howtocard">
            <p className="howtocard__step">
                { step }
            </p>
            <div className="howtocard__con">
                { descriptionsDisplay }
            </div>
        </div>
    )
}

export default HowtoCard;