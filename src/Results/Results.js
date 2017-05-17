import React, { Component } from 'react';
import '../Results/Results.css';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Results extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.endMessage}</h3>
        <p className="score-size spacing">Your score was: <br/> <strong>{this.props.score}</strong></p>
        <Button bsStyle="primary" onClick={this.props.retryButton}>Retry</Button>
        <p className="spacing">{this.props.quizData.map((quiz) => <p>{quiz.question}<br />Correct Answer: {quiz.correct_answer}</p>)}</p>
    </div>
    )
  }
};

// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
// props are taken from App.js inside the brackets
// You can chain `isRequired` to make sure a warning is shown if the prop isn't provided
Results.propTypes = {
  endMessage: PropTypes.string,
  score: PropTypes.number.isRequired,
  retryButton: PropTypes.func.isRequired
};

Results.defaultProps = {
  endMessage: 'CONGRATULATIONS'
};

export default Results;
