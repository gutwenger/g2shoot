import React, { useState } from "react";
import './App.css';

import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Result from "./components/result/Result";
import EndGame from "./components/endGame/EndGame";
import Howto from "./components/howto/Howto";
import Contact from "./components/contact/Contact";

function App() {

    const [topPage, setTopPage] = useState("default");
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");

    function changePage(page) {
        setCurrentPage(page);
    }

    const TOP_PAGE = {
        result: (
            <Result
                key="result"
                changePage={changePage}
                setNavIsOpen={setNavIsOpen}
                setTopPage={setTopPage}
            />
        ),
        endgame: (
            <EndGame 
                key="result"
                changePage={changePage}
                setNavIsOpen={setNavIsOpen}
                setTopPage={setTopPage}
            />
        ),
        howto: (
            <Howto />
        ),
        contact: (
            <Contact />
        ),
        default: ""
    }

    return (
        <div className="App">
            { TOP_PAGE[topPage] }
            <Navbar 
                key="navbar"
                changePage={changePage}
                navIsOpen={navIsOpen}
                setNavIsOpen={setNavIsOpen}
                setTopPage={setTopPage}
            />
            <Content
                key="content"
                currentPage={currentPage}
                changePage={changePage}
                setTopPage={setTopPage}
            />
        </div>
    );
}

export default App;
