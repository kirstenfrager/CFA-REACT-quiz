import React, { Component } from 'react';
import './App.css';
import Question from '../Question/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'none yet!',
      score: 0
    };
    // bind the context to the context of the component
    // bind connects the context of our component to this.updateSelected
    // so when we use it in a different context it will still reference the contact of the app component and that way it will still reference the state here
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.retryQuiz = this.retryQuiz.bind(this);
    this.quiz_data = [
      // array of objects. each object is a question
      {
        question: 'What is the meaning of life?',
        correct_answer: '42',
        possible_answers: ['Love', 'Money', 'JavaScript', '42']
      },
      {
        question: 'Who is the best coding YouTuber?',
        correct_answer: 'FunFunFunction',
        possible_answers: ['Coding Train', 'Young Lamb', 'Wes Bos', 'FunFunFunction']
      }
    ]
  };

  // updating the state
  updateSelected(answer) {
    // need the parenthesis because its a function and then {} because we are passing in an object
    this.setState({
      selected: answer
    })
  };

  retryQuiz() {
    this.setState({
      progress: 0,
      selected: 'none yet!',
      score: 0
    })
  };

  submitAnswer() {
    // if the answer that we have selected is equal to the question object we are up to with the correct answer
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer) {
      this.setState({
        // incrementing our score and progress and only happens if the question is true
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'none yet!'
      })
    } else {
      // otherwise if they don't choose the correct answer only update the progress
      this.setState({
        progress: this.state.progress + 1,
        selected: 'none yet!'
      })
    }
  };

  // series of components nested inside
  render() {
    return (
      <div className="text-center">
        <h2 className="header-styling">Quiz App</h2>

        {this.state.progress < this.quiz_data.length ? (
          <div>
            <Question currentQuestion={this.quiz_data[this.state.progress].question} />
            <ProgressBar currentStep={this.state.progress + 1} questionLength={this.quiz_data.length} />
            <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
        <Results score={this.state.score} endMessage="Congratulations, you have finished!" retryButton={this.retryQuiz}/>
         )}
      </div>
    );
  }
};

export default App;
