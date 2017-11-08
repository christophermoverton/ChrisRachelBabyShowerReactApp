import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Backgroundartcomp from './Backgroundartcomponent';
import * as d3 from 'd3';

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
  
  class Game extends React.Component {
    componentDidMount() {
      this.transition();
    }
    transition() {
      var oldText = [];
      oldText.push(d3.select('#T1').select('text').text());
      oldText.push(d3.select('#T2').select('text').text());
      oldText.push(d3.select('#T3').select('text').text());
      oldText.push(d3.select('#T4').select('text').text());
      oldText.push(d3.select('#T5').select('text').text());
      oldText.push(d3.select('#T6').select('text').text());
      oldText.push(d3.select('#T7').select('text').text());
      console.log(oldText);
      var elements = ["#T1","#T2","#T3","#T4","#T5"];
      
      d3.select("#T1").selectAll('text').transition()
          .duration(4000).delay(17000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[0];
              console.log(newText);
              console.log(0);
              console.log(oldText[0]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T1").selectAll('text').text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T2").selectAll('text').transition()
          .duration(4000).delay(22000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[1];
              console.log(newText);
              console.log(0);
              console.log(oldText[1]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T2").selectAll('text').text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T3").selectAll('#t3a').transition()
          .duration(4000).delay(27000).ease(d3.easeLinear).tween("tspan", function () {
            
              var newText = oldText[2];
              console.log(newText);
              console.log(0);
              console.log(oldText[2]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T3").selectAll('#t3a').text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

        
          d3.select("#T4").selectAll('#t4a').transition()
          .duration(4000).delay(32000).ease(d3.easeLinear).tween("tspan", function () {
            
              var newText = oldText[3];
              console.log(newText);
              console.log(oldText[3]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T4").selectAll('#t4a').text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T5").selectAll('#t5a').transition()
          .duration(4000).delay(37000).ease(d3.easeLinear).tween("tspan", function () {
            
              var newText = oldText[4];
              console.log(newText);
              console.log(oldText[4]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T5").selectAll('#t5a').text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T6").selectAll('#t6a').transition()
          .duration(4000).delay(42000).ease(d3.easeLinear).tween("tspan", function () {
            
              var newText = oldText[5];
              console.log(newText);
              console.log(oldText[5]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T6").selectAll('#t6a').text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T7").selectAll('#t7a').transition()
          .duration(4000).delay(32000).ease(d3.easeLinear).tween("tspan", function () {
            
              var newText = oldText[6];
              console.log(newText);
              console.log(oldText[6]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T7").selectAll('#t7a').text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });
    }
 
    render() {
      return (
        <div className="game">


        <Backgroundartcomp/>
        </div>
        
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
