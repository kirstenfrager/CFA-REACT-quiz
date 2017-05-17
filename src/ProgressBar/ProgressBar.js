import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class ProgressBar extends Component {
//   render() {
//     return <p>{this.props.currentStep} out of {this.props.questionLength}</p>
//   }
// };

// stateless component
const ProgressBar = ({ currentStep, questionLength }) => {
  return <p>{currentStep} out of {questionLength}</p>
};

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
  questionLength: PropTypes.number.isRequired
};

export default ProgressBar;
