import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('user has not specified how many events the user wants to see', () => {
      AppWrapper = mount(<App />)
    });

    when('the user opens the app with the number of events showing', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    then('the user should be able to see at least 32 number of events', () => {

      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32)
    });
  });


  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;

    given('user opened the app and should be able to see at least 32 number of events', () => {
      AppWrapper = mount(<App />);

    });

    when('the user changes the number of events showing between 1 and 32', () => {
      const numberOfEvents = { target: { value: 1 }, };
      AppWrapper.find('.numberInput').simulate('change', numberOfEvents);

    });

    then('the user should be able to see the changed number of events showing in our case 1', () => {
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(1);
    });
  });

});