import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameForm from './game-form';
import GameInfo from './game-info';

import { fetchRandomNumber } from '../actions/index';

class GameContainer extends Component {
  componentWillMount() {
    this.props.fetchRandomNumber();
  }

  render() {
    return (
      <div className='col-sm-4 col-sm-offset-4'>
        <GameForm randomNum={this.props.randomNum} />
        <GameInfo
          guess={this.props.guess}
          randomNum={this.props.randomNum}
          status={this.props.status}
        />
      </div>
    );
  }
}

GameContainer.propTypes = {
  fetchRandomNumber: React.PropTypes.func,
  guess: React.PropTypes.arrayOf(React.PropTypes.number),
  randomNum: React.PropTypes.number,
  status: React.PropTypes.string,
};

GameContainer.defaultProps = {
  fetchRandomNumber: undefined,
  guess: undefined,
  randomNum: undefined,
  status: undefined,
};

const mapStateToProps = (state) => (
  { guess: state.guess, randomNum: state.randomNum, status: state.status }
);

export default connect(mapStateToProps, { fetchRandomNumber })(GameContainer);
