import React from 'react'

const Conversations = (props) => {
    return (
        <div className="conversation">
            <div className="conversation-bar">
            <h2>
                {props.selectedUser.name &&
                    `${props.selectedUser.name.first} ${props.selectedUser.name.last}`}
            </h2>
            <div className="conversation-menu">
                <i className="icon fas fa-phone" />
                <i className="icon fas fa-video" />
                <i className="icon fas fa-info-circle" />
            </div>
            </div>
            <div className="conversation-content">
            <div className="messages">
                <div className="list">
                {props.styledConversation || <p>You have no messages</p>}
                </div>
                <div className="new-message">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="message-box"
                />
                <button>Send</button>
                </div>
            </div>
            <div className="user-detail">
                <div className="user">
                <div>
                    <img
                    className="avatar large"
                    src={`images/${props.selectedUser.username}_lg.jpg`}
                    alt={`${props.selectedUser.username}`}
                    />
                    <div className="user-title">
                    <div className="user-name">
                        {props.selectedUser.name &&
                        `${props.selectedUser.name.first} ${props.selectedUser.name.last}`}
                    </div>
                    <div className="last-active">
                        Active {Math.floor(Math.random() * 3) + 1}m ago
                    </div>
                    </div>
                </div>
                <i className="icon fas fa-cog" />
                </div>
                <div>Options</div>
                <div>Facebook Profile</div>
            </div>
            </div>
        </div>
    )
}

export default Conversations