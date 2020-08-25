/* eslint-disable no-undef */
// import React from 'react';
// eslint-disable-next-line import/extensions
import App from '../client/components/App';
import Carousel from '../client/components/Carousel.jsx';
import Header from '../client/components/Header';
import Images from '../client/components/Images';
import Rating from '../client/components/Rating';
import Listing from '../client/components/Listing';

describe('<App /> rendering', () => {
  it('should not render an <h1> element', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.children('h1')).toHaveLength(0);
  });

  it('should have state isLoading set initial to true', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.state('isLoading')).toBe(true);
  });

  it('should render Carousel throwing an error', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });
});
