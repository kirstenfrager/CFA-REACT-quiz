import React, { Component } from 'react';
import '../Results/Results.css';
import { Button } from 'react-bootstrap';

class Results extends Component {
  render() {
    return (
      <div>
        <h3 className="spacing">{this.props.endMessage}</h3>
        <p className="score-size spacing">Your score was: <br/> <strong>{this.props.score}</strong></p>
        <Button bsStyle="primary" onClick={this.props.retryButton}>Retry</Button>
    </div>
    )
  }
};

export default Results;
