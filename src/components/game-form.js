import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userGuess, userStatus } from '../actions/index';

class GameForm extends Component {
  constructor(props) {
    super(props);

    this.state = { guess: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      guess: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newGuess = parseInt(this.state.guess.trim(), 10);

    if (newGuess) {
      this.props.userGuess(newGuess);
      this.props.userStatus(newGuess, this.props.randomNum);
    }

    this.setState({
      guess: '',
    });
  }

  render() {
    return (
      <form className='input-group' onSubmit={this.handleSubmit}>
        <input
          className='form-control'
          type='text'
          value={this.state.guess}
          onChange={this.handleInputChange}
        />
        <span className='input-group-btn'>
          <button className='btn btn-danger' type='submit'>Submit</button>
        </span>
      </form>
    );
  }
}

GameForm.propTypes = {
  userGuess: React.PropTypes.func,
  userStatus: React.PropTypes.func,
  randomNum: React.PropTypes.number,
};

GameForm.defaultProps = {
  userGuess: undefined,
  userStatus: undefined,
  randomNum: undefined,
};

export default connect(null, { userGuess, userStatus })(GameForm);
