import React from 'react';

export default class SpeedWatch extends React.Component {
  toTime = (actualSeconds) => {

    let minutes = actualSeconds / 60;
    const seconds = Math.floor(actualSeconds % 60);

    const hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);

    let result = `${`0${minutes}`.substr(-2)}:${`0${seconds}`.substr(-2)}`;
    if (hours > 0) {
      result = `${`0${hours}`.substr(-2)}:${result}`;
    }
    return result;
  }

  speedWatch = (speed) => {
    const { seconds } = this.props;
    const actualSeconds = seconds / speed;

    return this.toTime(actualSeconds);
  };

  render() {
    const { seconds } = this.props;

    if (!seconds) {
      return (
        <div className="alert alert-warning">
          Enter video url
        </div>
      );
    }

    return (
      <div>
        <h2>Time to watch a video at different speeds:</h2>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <span className="label label-success">x1.25</span>
              </td>
              <td> {this.speedWatch(1.25)} </td>
            </tr>

            <tr>
              <td>
                <span className="label label-warning">x1.5</span>
              </td>
              <td> {this.speedWatch(1.5)} </td>
            </tr>

            <tr>
              <td>
                <span className="label label-danger">x2</span>
              </td>
              <td> {this.speedWatch(2)} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
