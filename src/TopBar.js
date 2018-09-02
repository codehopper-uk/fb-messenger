import React from 'react'

const TopBar = (props) => {
    return (
        <div className="top-bar">
            <i className="icon fab fa-facebook-messenger" />
            <a
                onClick={props.toggleModal}
                className={`username ${props.userPosition || 'left'}`}
            >
                Alex
            </a>
        </div>
    )
}

export default TopBar