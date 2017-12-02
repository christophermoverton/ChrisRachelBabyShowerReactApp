// Home.js

import React, { Component } from 'react';
import Backgroundartcomp from './Backgroundartcomponent';
import * as d3 from 'd3';
import './Home.css';

class Game extends React.Component {
    componentDidMount() {
      this.transition();
    }

    transition() {
      var oldText = [];
      oldText.push(d3.select('#T1').text());
      oldText.push(d3.select('#T2').text());
      oldText.push(d3.select('#T3').text());
      oldText.push(d3.select('#T4').text());
      oldText.push(d3.select('#T5').text());
      oldText.push(d3.select('#T6').text());
      oldText.push(d3.select('#T7').text());
      console.log(oldText);
      var elements = ["#T1","#T2","#T3","#T4","#T5"];
      
      d3.select("#T1").transition()
          .duration(4000).delay(17000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[0];
              console.log(newText);
              console.log(0);
              console.log(oldText[0]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T1").text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T2").transition()
          .duration(4000).delay(22000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[1];
              console.log(newText);
              console.log(0);
              console.log(oldText[1]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T2").text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T3").transition()
          .duration(4000).delay(27000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[2];
              console.log(newText);
              console.log(0);
              console.log(oldText[2]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T3").text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

        
          d3.select("#T4").transition()
          .duration(4000).delay(32000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[3];
              console.log(newText);
              console.log(oldText[3]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T4").text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T5").transition()
          .duration(4000).delay(37000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[4];
              console.log(newText);
              console.log(oldText[4]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T5").text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T6").transition()
          .duration(4000).delay(42000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[5];
              console.log(newText);
              console.log(oldText[5]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T6").text(newText.slice(0, 
                                     Math.round( t * textLength) ));
              };
          });

          d3.select("#T7").transition()
          .duration(4000).delay(32000).ease(d3.easeLinear).tween("text", function () {
            
              var newText = oldText[6];
              console.log(newText);
              console.log(oldText[6]);
              var textLength = newText.length;
              return function (t) {
                d3.select("#T7").text(newText.slice(0, 
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

class Home extends Component {
  render() {
    return (
       
          
          <Game/>
        
    );
  }
}

export default Home;