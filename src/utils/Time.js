import moment from 'moment';

export default class Time {
  static toTime(actualSeconds) {

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

  static speedWatch(seconds, speed = 1) {
    const actualSeconds = Math.round(seconds / speed);

    return Time.toTime(actualSeconds);
  };

  static toSeconds(duration) {
    const parsedDuration = moment.duration(duration);

    const minutes = parsedDuration.minutes() + parsedDuration.hours() * 60;
    return parsedDuration.seconds() + minutes * 60;
  }
};
