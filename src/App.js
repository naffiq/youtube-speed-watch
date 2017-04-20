import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpeedWatch from './components/SpeedWatch';
import VideoForm from './components/VideoForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0
    };
  }

  updateSeconds = (seconds) => {
    this.setState(() => {
      return { seconds };
    });
  }

  render() {
    const { seconds } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Enter YouTube video URL</h2>

          <VideoForm updateSeconds={this.updateSeconds} />
        </div>

        <div className="container">
          <SpeedWatch seconds={seconds} />
        </div>
      </div>
    );
  }
}

export default App;
