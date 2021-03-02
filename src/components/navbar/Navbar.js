import React, { useState } from 'react'
import NavLogo from './NavLogo';
import NavMenu from "./NavMenu";

const Navbar = ({ changePage, navIsOpen, setNavIsOpen, setTopPage }) => {


    let navBtnIcon = navIsOpen ? "navbarBtn__i fas fa-times" : "navbarBtn__i fas fa-bars";

    let navMenu = navIsOpen && (
        <NavMenu 
            key="navMenu"
            handleChangePage={handleChangePage}
            handleTopPage={handleTopPage}
        />
    );

    function handleNavOpen() {
        setNavIsOpen(prevState => !prevState);
    }

    function handleChangePage(page) {
        setNavIsOpen(false);
        changePage(page);
        setTopPage("default")
    }

    function handleTopPage(page) {
        setNavIsOpen(false);
        setTopPage(page)
    }

    return (
        <div id="navbar" className="navbar">
            <NavLogo />
            { navMenu }
            <button className="navbarBtn" onClick={()=>handleNavOpen()}>
                <i className={navBtnIcon}></i>
            </button>
        </div>
    )
}

export default Navbar;