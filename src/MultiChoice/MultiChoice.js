import React, { Component } from 'react';
import '../MultiChoice/MultiChoice.css';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class MultiChoice extends Component {
  render() {
    return (
      // the answer, i is giving it a keyID index to identify which element we are making changes to
      // map is looping through
      // passing in all possible answers for the question and for each asnwer creating a button
      <div>
        {this.props.answers.map((answer, i) => <button className="btn btn-default button-styling" key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
        <br />
        <p className="spacing">You have selected: {this.props.selectedAnswer}</p>
        <Button bsStyle="success" onClick={this.props.handleSubmit}>Submit</Button>
      </div>
    )
  }
};

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired
};

export default MultiChoice
