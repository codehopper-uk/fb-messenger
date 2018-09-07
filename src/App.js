import React, { Component } from "react"
import "./App.css"
import Modal from "./Modal"
import Footer from "./Footer"
import TopBar from "./TopBar"
import Messenger from "./Messenger"

class App extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  render() {
    const loggedUser = { name: 'Alex' }
    const { showModal } = this.state

    return (
      <div className="app">
        <Modal
          show={showModal}
          toggleModal={this.toggleModal}
        />
        <TopBar
          toggleModal={this.toggleModal}
        />
        <Messenger
          toggleModal={this.toggleModal}
        />
        <Footer />
      </div>
    )
  }
}

export default App
