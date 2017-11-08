// Home.js

import React, { Component } from 'react';
import Backgroundartcomp from './Backgroundartcomponent';
import * as d3 from 'd3';

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

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
          <Game/>
        </div>
    );
  }
}

export default Home;