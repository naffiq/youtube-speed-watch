import React, { Component } from 'react';
import qs from 'qs';
import axios from 'axios';
import moment from 'moment-interval';
import logo from './logo.svg';
import './App.css';
import SpeedWatch from './components/SpeedWatch';

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const search = this.videoUrl.value.split('?');

    if (search[1]) {
      const video = qs.parse(search[1]);

      axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${video.v}&key=${apiKey}`)
        .then((response) => {
          const duration = response.data.items[0].contentDetails.duration;
          const parsedDuration = moment.duration(duration);

          const minutes = parsedDuration.minutes() + parsedDuration.hours() * 3600;
          const seconds = parsedDuration.seconds() + minutes * 60;

          this.setState((props, state) => { return {seconds} });
        });
    }
  };

  render() {
    const { seconds } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Enter YouTube video URL</h2>

          <form className="form-url" onSubmit={this.handleSubmit}>
            <input ref={(el) => this.videoUrl = el} placeholder="https://www.youtube.com/watch?v=EoB_LKjizOQ"/>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="container">
          <SpeedWatch seconds={seconds} />
        </div>
      </div>
    );
  }
}

export default App;
