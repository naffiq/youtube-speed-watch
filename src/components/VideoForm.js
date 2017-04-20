import React from 'react';
import qs from 'qs';
import axios from 'axios';

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

import Time from './../utils/Time';

export default class VideoForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const search = this.videoUrl.value.split('?');
    const { updateSeconds } = this.props;

    if (search[1]) {
      const video = qs.parse(search[1]);

      axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${video.v}&key=${apiKey}`)
        .then((response) => {
          const duration = response.data.items[0].contentDetails.duration;

          updateSeconds(Time.toSeconds(duration));
        });
    }
  };

  render() {
    return (
      <form className="form-url" onSubmit={this.handleSubmit}>
        <input ref={(el) => this.videoUrl = el} placeholder="https://www.youtube.com/watch?v=EoB_LKjizOQ"/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
