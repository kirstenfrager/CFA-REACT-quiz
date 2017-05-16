import React from 'react';
import ReactDOM from 'react-dom';
import MultiChoice from './MultiChoice';

it('renders without crashing', () => {
  var sample_data = [
    // array of objects. each object is a question
    {
      question: 'What is the meaning of life?',
      correct_answer: '42',
      possible_answers: ['Love', 'Money', 'JavaScript', '42']
    }
  ]
  const div = document.createElement('div');
  ReactDOM.render(<MultiChoice answers={sample_data[0].possible_answers} />, div);
});
