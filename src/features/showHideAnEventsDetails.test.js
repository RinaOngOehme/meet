import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default.', ({ given, when, then }) => {

    let AppWrapper;
    given('user has opened the app', () => {
      AppWrapper = mount(<App />);

    });

    when('the user has not clicked on any event element', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the user should see a list of all upcoming events unexpanded', () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    let AppWrapper;

    given('user has opened the app and seen a list of all upcoming events unexpanded', () => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.find('.event')).toHaveLength(0);


    });

    when('the user clicks onto the ShowMore button', () => {
      AppWrapper.update();
      AppWrapper.find('.showMore').at(0).simulate('click');

    });

    then('the user should be able to see more information of the event', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let AppWrapper;
    let EventWrapper;
    given('user has already clicked on an event element and has expanded it to see more details', () => {
      AppWrapper = mount(<App />);
      EventWrapper = shallow(<Event event={mockData[0]} />)
      EventWrapper.find('.showMore').at(0).simulate('click');
      expect(EventWrapper.find('.details')).toHaveLength(1);

    });

    when('the user clicks onto the ShowLess button', () => {
      EventWrapper.find('.showLess').at(0).simulate('click');
      expect(EventWrapper.find('.details')).toHaveLength(0);

    });

    then('the user should be able to see less information of the event', () => {
      expect(AppWrapper.find('.details')).toHaveLength(0);
    });
  });

});