import React from 'react'

const NavMenuGrp = ({ title, path, handleChangePage }) => {
    return (
        <li className="navMenu__ul__li" onClick={()=>handleChangePage(path)}>
            { title }
        </li>
    )
}

export default NavMenuGrp;