import React from 'react';
import Time from './../utils/Time';

export default ({ seconds }) => {
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
              <span className="label label-default">x1</span>
            </td>
            <td> {Time.speedWatch(seconds)} </td>
          </tr>

          <tr>
            <td>
              <span className="label label-success">x1.25</span>
            </td>
            <td> {Time.speedWatch(seconds, 1.25)} </td>
          </tr>

          <tr>
            <td>
              <span className="label label-warning">x1.5</span>
            </td>
            <td> {Time.speedWatch(seconds, 1.5)} </td>
          </tr>

          <tr>
            <td>
              <span className="label label-danger">x2</span>
            </td>
            <td> {Time.speedWatch(seconds, 2)} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
