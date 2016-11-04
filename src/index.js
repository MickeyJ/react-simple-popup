import React, { Component } from 'react'
import { render } from 'react-dom'
import './style/main.scss'

import Popup from './popup'

class App extends Component {
  constructor(){
    super();
    this.state = {
      popupIsOpen: false,
      opacity: 0
    }
  }

  handleOpen = () => {

    this.setState({ popupIsOpen: true });

    setTimeout(() =>{
      this.setState({ opacity: 1 });
    }, 20)

  };

  handleClose = () => {

    this.setState({ opacity: 0 });

    setTimeout(() =>{
      this.setState({ popupIsOpen: false });
    }, 300)

  };

  renderPopup = () =>(
    <Popup opacity={this.state.opacity} handleClose={this.handleClose}/>
  );

  render(){
    return(
      <div>

        <h1>React Popup</h1>

        <hr/>

        <button onClick={this.handleOpen}>
          See Popup!
        </button>

        {this.state.popupIsOpen
          ? this.renderPopup()
          : ''
        }

      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);
