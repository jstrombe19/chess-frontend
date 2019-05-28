import React from 'react';
import ReactDOM from 'react-dom';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(64).fill(null),
      whitesTurn: true,
      whiteCheck: false,
      blackCheck: false,
    };
  }

  handleMove(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.whitesTurn ? whitePieces : blackPieces;
    this.setState({
      squares: squares,
      whitesTurn: !this.state.whitesTurn,
    });
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    return(

    )
  }
}
