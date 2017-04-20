import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SpeedWatch from './../../components/SpeedWatch';

describe('SpeedWatch', () => {
  it('should render properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SpeedWatch seconds={12} />, div);
  });

  it('should render proper time from seconds', () => {
    const component = renderer.create(
      <SpeedWatch seconds={1234} />
    );

    expect(component).toMatchSnapshot();
  });
});
