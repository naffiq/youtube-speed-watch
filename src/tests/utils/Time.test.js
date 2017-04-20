import Time from './../../utils/Time';

describe('Time util', () => {
  it ('toTime should render correct time', () => {
    expect(Time.toTime(123)).toEqual('02:03');
    expect(Time.toTime(3)).toEqual('00:03');
    expect(Time.toTime(3723)).toEqual('01:02:03');
  });

  it ('should convert duration to seconds', () => {
    expect(Time.toSeconds('PT24M1S')).toEqual(24 * 60 + 1);
  });

  it ('should convert seconds in speedWatch to correct time', () => {
    expect(Time.speedWatch(3723, 2)).toEqual('31:02');
  });
});
