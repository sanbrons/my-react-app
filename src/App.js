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

    this.state = { isOpen: false };

    this.toggleModal = this.toggleModal.bind(this);
  };

  toggleModal = () => {
    const { colour, text } = this.props;

    this.setState({
      isOpen: !this.state.isOpen
    });
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Greeting name="Sanbron"/>
          <div className="me--btn-w">
            <Button onClick={this.toggleModal.bind(this)} text="Click" colour="red"/>
            <Button onClick={this.toggleModal} text="Click" colour="blue"/>
          </div>

          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            {this.props.colour}
            <br/><br/>
          </Modal>
          
        </header>
      </div>
    );
  }
}

export default App;
