import React from 'react'

const HomeBtn = ({ icon, page, title, setTopPage, changePage }) => {
    
    function handleClick() {
        if (page === "howto") {
            setTopPage("howto");
        } else {
            changePage(page);
        }
    }

    return (
        <div className="homeBtn" onClick={()=>handleClick()}>
            <i className={`homeBtn__i ${icon}`} />
            <p className="homeBtn__p">{ title }</p>
        </div>
    )
}

export default HomeBtn;
