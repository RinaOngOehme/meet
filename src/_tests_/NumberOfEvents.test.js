import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents'
import { ErrorAlert } from '../Alert'



describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={(k, v) => jest.fn()} />)
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
  });

  test('render 32 events by default', () => {
    expect(NumberOfEventsWrapper.find(".numberInput").prop("value")).toEqual(32)
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe(numberOfEvents);
  });

  test('render ErrorAlert', () => {
    expect(NumberOfEventsWrapper.find(ErrorAlert)).toHaveLength(1)
  })

  test("Change state when input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 32
    });
    const eventObject = { target: { value: '2' } };
    NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('2');
  });


});
