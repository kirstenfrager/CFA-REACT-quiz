import React, { Component } from 'react';

class Question extends Component {
  render() {
    return <h4 className="spacing">{this.props.currentQuestion}</h4>
  }
};

// so we can access it in a diffferent file. similar to module.exports
export default Question;
