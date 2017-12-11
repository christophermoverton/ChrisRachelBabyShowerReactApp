import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'


function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  class CanvasDraw extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
      updateCanvas(){
        var ctx = this.refs.canvas.getContext("2d"),
        dashLen = 220, dashOffset = dashLen, speed = 10,
        txt = "STROKE-ON CANVAS", x = 30, i = 0;

        ctx.font = "100px Destain"; 
        ctx.lineWidth = 1.0; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
        ctx.strokeStyle = ctx.fillStyle = "#0a1338";

        (function loop() {
            ctx.clearRect(x, 0, 60, 150);
            ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
            dashOffset -= speed;                                         // reduce dash length
            ctx.strokeText(txt[i], x, 90);                               // stroke letter

            if (dashOffset > 0) requestAnimationFrame(loop);             // animate
            else {
                ctx.fillText(txt[i], x, 90);                               // fill final letter
                dashOffset = dashLen;                                      // prep next char
                x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
                ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
                ctx.rotate(Math.random() * 0.005);                         // random rotation
                if (i < txt.length) requestAnimationFrame(loop);
            }
        })();
    }
    render() {
        return (
            <canvas ref="canvas" width={1000} height={300}/>
        );
    }    
  }
  
  class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
      }

      handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }

    renderSquare(i) {
      return <Square value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}/>;
    }
    
  
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  

  
  // ========================================
  


  // main.js



ReactDOM.render((
  <div id="backgr">
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </div>
), document.getElementById('root'))
