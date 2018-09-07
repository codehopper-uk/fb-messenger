import React, {Component} from 'react'
import users from "../mocks/users"
import messages from "../mocks/messages"
import Threads from "./Threads"
import Conversations from './Conversations';

const filterMessageByUsername = ({ username } = {}) => message => (
    message.from === username ||
    message.to === username
)

class Messenger extends Component {

    constructor() {
        super()
        const selectedUser = users[0]
        this.state = {
        selectedUser: selectedUser,
        conversation: messages.filter(filterMessageByUsername(selectedUser)),
        }
    }

    selectUser = (user = {}) => {
        this.setState({
            selectedUser: user,
            conversation: messages.filter(filterMessageByUsername(user))
        })
    }

    showSettings = () => {
        this.props.toggleModal()
    }

    render() {
        const selectedUser = this.state.selectedUser
        const styledConversation = this.state.conversation.map((message, i) => (
        <div
            key={i}
            className={`message-wrapper ${
            message.from === "you" ? "sent" : "received"
            }`}
        >
            {message.to === "you" && (
            <img
                src={`images/${selectedUser.username}_lg.jpg`}
                alt={`${selectedUser.username}`}
                className="avatar medium"
            />
            )}
            <div className="message">{message.message}</div>
            {message.from === "you" && (
            <div className="message-read">
                <i className="icon fa fa-check-circle" />
            </div>
            )}
        </div>
        ))
        return (
            <div className="messenger">
            <Threads
                showSettings={this.showSettings}
                users={users}
                selectUser={this.selectUser}
            />
            <Conversations
                selectedUser={selectedUser}
                styledConversation={styledConversation}
            />
            </div>
        )
    }
}

export default Messenger