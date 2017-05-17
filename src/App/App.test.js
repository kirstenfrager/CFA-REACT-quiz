import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// trying to test whether it renders without crashing
// jest testing framework
// within the test file there's a function which gets sent a message 'renders without crashing'
// use an arrow function to set up a div constant to set up an element
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// yarn add enzyme --dev
// yarn add react-test-renderer --dev
it('retryQuiz() resets quiz state', () => {
  let component = shallow(<App />);
  component.instance().setState = jest.fn();

  component.instance().state = {
    progress: 2,
    selected: 'yeahhhh!',
    score: 4
  };

  component.instance().retryQuiz();

  expect(component.instance().setState).toHaveBeenCalledWith({
    progress: 0,
    selected: 'none yet!',
    score: 0
  })
});
