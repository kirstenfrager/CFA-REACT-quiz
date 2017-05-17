import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  render() {
    return <h4 className="spacing">{this.props.currentQuestion}</h4>
  }
};

Question.propTypes = {
  currentQuestion: PropTypes.string.isRequired
};

// so we can access it in a diffferent file. similar to module.exports
export default Question;
