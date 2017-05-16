import React, { Component } from 'react';
import '../Results/Results.css';

class Results extends Component {
  render() {
    return (
      <div>
        <h3 className="spacing">{this.props.endMessage}</h3>
        <p className="score-size">Your score was: <br/> <strong>{this.props.score}</strong></p>
        <button className="btn btn-primary spacing" onClick={this.props.retryButton}>Retry</button>
    </div>
    )
  }
};

export default Results;
