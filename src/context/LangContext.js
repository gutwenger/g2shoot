import React, { useContext, useState } from "react";
import { INSTRUCTIONS as TEXT_EN } from "../data/instructions_EN";
import { INSTRUCTIONS as TEXT_HK } from "../data/instructions_HK";

const LangContext = React.createContext();

export function useLang() {
    return useContext(LangContext);
}

export const LangProvider = ({ children }) => {

    const [lang, setLang] = useState("EN");
    const [texts, setTexts] = useState(TEXT_EN);

    const INSTRUCTIONS = {
        EN: TEXT_EN,
        HK: TEXT_HK,
    }

    function handleChangeLanguage({ lang }) {
        setLang(lang);
        setTexts(INSTRUCTIONS[lang]);
    }

    return(
        <LangContext.Provider value={{ texts, lang, handleChangeLanguage }}>
            { children }
        </LangContext.Provider>
    )
}