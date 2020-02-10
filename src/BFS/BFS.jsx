import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BFS.css';

export default class BFS extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      canvasSize: { canvasWidth: 800, canvasHeight: 600 }
    })
  }

  componentDidMount() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
  }

  render() {
    return (
      <div className="BFS">
        <canvas ref={ canvasHex => this.canvasHex = canvasHex }></canvas>
      </div>
    )
  }

}
