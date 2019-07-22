import React from 'react';
import './App.css';

import USA from './USA';


const colors = ['red', 'blue', 'green'];

class App extends React.Component {

  state = {
    AK: 'red'
  }

  changeStateColor = event => {
    this.setState({
      [event.target.id]: colors[ (colors.indexOf(this.state[event.target.id]) + 1) % colors.length ],
    });
  }
  
  render(){
    return (
      <div className='App'>
        <USA colors={this.state} onClick={this.changeStateColor}/>
      </div>
    );
  }
};

export default App;
