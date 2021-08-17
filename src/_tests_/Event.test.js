import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />)

  });

  test('render status', () => {
    expect(EventWrapper.find('.status')).toHaveLength(1);
  });
  test('render htmllink', () => {
    expect(EventWrapper.find('.htmlLink')).toHaveLength(1);
  });
  test('render summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });
  test('render description', () => {
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });
  test('render location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  test('render start datetime', () => {
    expect(EventWrapper.find('.start')).toHaveLength(1);
  });
  test('render end datetime', () => {
    expect(EventWrapper.find('.end')).toHaveLength(1);
  });

  test('Show details on click', () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find('.showMore').simulate('click');
    expect(EventWrapper.find('.showMore')).toBeTruthy();
  });

  test('Hide details on click', () => {
    EventWrapper.setState({
      show: true,
    });
    EventWrapper.find('.showLess').simulate('click');
    expect(EventWrapper.find('.showLess')).toBeTruthy();
  });
});