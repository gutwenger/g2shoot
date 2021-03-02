import React from 'react';

import { useLang } from "../../context/LangContext";
import { HOW_TO_EN, HOW_TO_HK } from "../../data/howtoData";
import HowtoCard from './HowtoCard';

const Howto = () => {

    const { lang, texts } = useLang();

    let howtoInstructions = {
        EN: HOW_TO_EN,
        HK: HOW_TO_HK,
    }

    let howtoDisplay = howtoInstructions[lang].map((item, i) => (
        <HowtoCard
            key={`howtocard-${i}`}
            step={ i + 1}
            descriptions={ item }
        />
    ))

    return (
        <div id="howto" className="topPage">
            <div className="topPageContent howto">
                <h2 className="howto__h2">
                    { texts.howto.title }
                </h2>
                <div className="howto__steps">
                { howtoDisplay }
            </div>
            </div>
        </div>
    )
}

export default Howto;
