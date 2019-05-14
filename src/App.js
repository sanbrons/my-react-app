import React, { Component } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import Modal from './Components/Modal';
import Button from './Components/Button';

const redbtn= {
  background: 'red'
}
const bluebtn= {
  background: 'blue'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, colour: "" };

    this.toggleModal = this.toggleModal.bind(this);
  };

  toggleModal(x) {
    this.setState({
      isOpen: !this.state.isOpen,
      colour: x
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Greeting name="Sanbron"/>
          <div className="me--btn-w">
            <Button onClick={() => this.toggleModal("red")} text="Click" colour="red"/>
            <Button onClick={() => this.toggleModal("blue")} text="Click" colour="blue"/>
            <Button onClick={() => this.toggleModal("grey")} text="Click" colour="grey"/>
            <Button onClick={() => this.toggleModal("green")} text="Click" colour="green"/>
          </div>

          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            This is a <b>{this.state.colour}</b> button.
            <br/><br/>
          </Modal>
          
        </header>
      </div>
    );
  }
}

export default App;
