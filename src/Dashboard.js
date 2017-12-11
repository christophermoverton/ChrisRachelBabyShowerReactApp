// Dashboard.js

import React, { Component } from 'react';
import Backgroundart2comp from './Backgroundart2component';

import './Dashboard.css';
import * as d3 from 'd3';
import * as d3scale from 'd3-scale';

/*

*/

class Dashboard extends Component {
  
  checkDeviceSize(){
    if (document.body.clientWidth/1366.0 < .4){
      return true;
    }
    return false;
  }
  
  componentDidMount() {

    this.loadConfetti();
    this.transition();
    
  }

  componentWillUnmount(){
    console.log("calling component unmount");
    /*
    d3.select("#T11a").transition();
    d3.select("#T11b").transition();
    d3.select("#T11c").transition();
    d3.select("#T11d").transition();
    d3.select("#T11e").transition();
    d3.select("#T11f").transition();
    d3.select("#T11g").transition();
    d3.select("#T11h").transition();
    d3.select("#T11i").transition();
    d3.select("#T11j").transition();
    d3.select("#T11k").transition();
    d3.select("#T11l").transition();
    d3.select("#T11m").transition();
    d3.select("#T11n").transition();
    d3.select("#T11o").transition();
    d3.select("#T11p").transition();
    */

  }

  rotationloop(){
    d3.select('#T11p').attr("transform", "rotate(10)");//
  }

  transition() {
    var oldText = [];
    oldText.push(d3.select('#T8').text());
    oldText.push(d3.select('#T9').text());
    oldText.push(d3.select('#T10').text());
    //oldText.push(d3.select('#T11').text());
    /*
    d3.select('#T11a').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11b').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11c').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11d').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11e').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11f').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11g').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11h').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11i').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11j').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11k').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11l').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11m').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11n').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11o').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    d3.select('#T11p').attr("transform", "translate(-15000,390)  rotate(10)").style('font-size', '4em');
    */
    /*
    if (!this.checkDeviceSize()){
      d3.select('#T12').attr("transform", "translate(-15000,390)").style('font-size', '4em');
    }
    else{ */
      d3.select('#T12').attr("transform", "translate(370,410)").style('font-size', '4em');
    //}
    
    //this.rotationloop();
    console.log("this old text: ");
    console.log(oldText);
    var elements = ["#T1","#T2","#T3","#T4","#T5"];
    var bsvg = document.getElementById("comp2");
    bsvg.style.width="100%";
    bsvg.style.height = "auto";
    if (this.checkDeviceSize()){
      bsvg.style.width="300%";
    }
    d3.select("#T8").transition()
        .duration(2000).delay(3000).ease(d3.easeLinear).tween("text", function () {
            console.log(oldText);
            var newText = oldText[0];
            console.log(newText);
            console.log(0);
            console.log(oldText[0]);
            var textLength = newText.length;
            return function (t) {
              d3.select("#T8").text(newText.slice(0, 
                                   Math.round( t * textLength) ));
            };
        });

        d3.select("#T9").transition()
        .duration(2000).delay(5000).ease(d3.easeLinear).tween("text", function () {
          
            var newText = oldText[1];
            console.log(newText);
            console.log(0);
            console.log(oldText[1]);
            var textLength = newText.length;
            return function (t) {
              d3.select("#T9").text(newText.slice(0, 
                                   Math.round( t * textLength) ));
            };
        });

        d3.select("#T10").transition()
        .duration(2000).delay(7000).ease(d3.easeLinear).tween("text", function () {
          
            var newText = oldText[2];
            console.log(newText);
            console.log(0);
            console.log(oldText[2]);
            var textLength = newText.length;
            return function (t) {
              d3.select("#T10").text(newText.slice(0, 
                                   Math.round( t * textLength) ));
            };
        });

      
        //d3.select("#T11").transition()
        //.duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(380,420)");
        if (!this.checkDeviceSize()){
        d3.select("#T11a").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(380,420)");//.on("end", repeat);
        d3.select("#T11b").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(423,420)").on("end", repeat2);
        d3.select("#T11c").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(469,420)").on("end", repeat3);
        d3.select("#T11d").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(512,420)").on("end", repeat4);
        d3.select("#T11e").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(571,420)").on("end", repeat5);
        d3.select("#T11f").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(619,420)").on("end", repeat6);
        d3.select("#T11g").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(642,420)").on("end", repeat7);
        d3.select("#T11h").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(684,420)").on("end", repeat8);
        d3.select("#T11i").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(745,420)").on("end", repeat9);
        d3.select("#T11j").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(789,420)").on("end", repeat10);
        d3.select("#T11k").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(833,420)").on("end", repeat11);
        d3.select("#T11l").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(869,420)").on("end", repeat12);
        d3.select("#T11m").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(912,420)").on("end", repeat13);
        d3.select("#T11n").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(946,420)").on("end", repeat14);
        d3.select("#T11o").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(990,420)").on("end", repeat15);
        d3.select("#T11p").transition()
        .duration(1500).delay(9000).ease(d3.easeCubic).attr("transform", "translate(1040,420)").on("end", repeat16);
        }
        //repeat();
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        var count4 = 0;
        var count5 = 0;
        var count6 = 0;
        var count7 = 0;
        var count8 = 0;
        var count9 = 0;
        var count10 = 0;
        var count11 = 0;
        var count12 = 0;
        var count13 = 0;
        var count14 = 0;
        var count15 = 0;
        var count16 = 0;
        var maxCount = 20;

        function repeat(){
          if (count1 < maxCount){
            count1 += 1;
            console.log(count1);
          }
          else{
            return;
          }
          d3.select("#T11a").transition()
          .duration(200).ease(d3.easeCubic).attr("transform", "translate(380,420) rotate(0)");//.transition()
         // .duration(200).ease(d3.easeCubic).attr("transform", "translate(380,420) rotate(-2)").transition()
         // .duration(200).ease(d3.easeCubic).attr("transform", "translate(380,420) rotate(0)").on("end", repeat); 
        };
        function repeat2(){
          if (count2 < maxCount){
            count2 += 1;
          }
          else{
            return;
          }
              d3.select("#T11b").transition()
              .duration(210).ease(d3.easeCubic).attr("transform", "translate(423,420) rotate(-2)").transition()
              .duration(210).ease(d3.easeCubic).attr("transform", "translate(423,420) rotate(0)").transition()
              .duration(210).ease(d3.easeCubic).attr("transform", "translate(423,420) rotate(2)").on("end", repeat2); 
        };

        function repeat3(){
          if (count3 < maxCount){
            count3 += 1;
          }
          else{
            return;
          }
          d3.select("#T11c").transition()
          .duration(330).ease(d3.easeCubic).attr("transform", "translate(469,420) rotate(-1)").transition()
          .duration(330).ease(d3.easeCubic).attr("transform", "translate(469,420) rotate(0)").transition()
          .duration(330).ease(d3.easeCubic).attr("transform", "translate(469,420) rotate(1)").on("end", repeat3); 
        };

        function repeat4(){
          if (count4 < maxCount){
            count4 += 1;
          }
          else{
            return;
          }
          d3.select("#T11d").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(512,420) rotate(-1)").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(512,420) rotate(0)").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(512,420) rotate(1)").on("end", repeat4); 
        };

        function repeat5(){
          if (count5 < maxCount){
            count5 += 1;
          }
          else{
            return;
          }
          d3.select("#T11e").transition()
          .duration(370).ease(d3.easeCubic).attr("transform", "translate(571,420) rotate(-1)").transition()
          .duration(370).ease(d3.easeCubic).attr("transform", "translate(571,420) rotate(0)").transition()
          .duration(370).ease(d3.easeCubic).attr("transform", "translate(571,420) rotate(1)").on("end", repeat5); 
        };

        function repeat6(){
          if (count6 < maxCount){
            count6 += 1;
          }
          else{
            return;
          }
          d3.select("#T11f").transition()
          .duration(330).ease(d3.easeCubic).attr("transform", "translate(619,420) rotate(-1)").transition()
          .duration(330).ease(d3.easeCubic).attr("transform", "translate(619,420) rotate(0)").transition()
          .duration(330).ease(d3.easeCubic).attr("transform", "translate(619,420) rotate(1)").on("end", repeat6); 
        };

        function repeat7(){
          if (count7 < maxCount){
            count7 += 1;
          }
          else{
            return;
          }
          d3.select("#T11g").transition()
          .duration(325).ease(d3.easeCubic).attr("transform", "translate(642,420) rotate(-1)").transition()
          .duration(325).ease(d3.easeCubic).attr("transform", "translate(642,420) rotate(0)").transition()
          .duration(325).ease(d3.easeCubic).attr("transform", "translate(642,420) rotate(1)").on("end", repeat7); 
        };

        function repeat8(){
          if (count8 < maxCount){
            count8 += 1;
          }
          else{
            return;
          }
          d3.select("#T11h").transition()
          .duration(335).ease(d3.easeCubic).attr("transform", "translate(684,420) rotate(-1)").transition()
          .duration(335).ease(d3.easeCubic).attr("transform", "translate(684,420) rotate(0)").transition()
          .duration(335).ease(d3.easeCubic).attr("transform", "translate(684,420) rotate(1)").on("end", repeat8); 
        };

        function repeat9(){
          if (count9 < maxCount){
            count9 += 1;
          }
          else{
            return;
          }
          d3.select("#T11i").transition()
          .duration(315).ease(d3.easeCubic).attr("transform", "translate(745,420) rotate(-1)").transition()
          .duration(315).ease(d3.easeCubic).attr("transform", "translate(745,420) rotate(0)").transition()
          .duration(315).ease(d3.easeCubic).attr("transform", "translate(745,420) rotate(1)").on("end", repeat9); 
        };

        function repeat10(){
          if (count10 < maxCount){
            count10 += 1;
          }
          else{
            return;
          }
          d3.select("#T11j").transition()
          .duration(345).ease(d3.easeCubic).attr("transform", "translate(789,420) rotate(-1)").transition()
          .duration(345).ease(d3.easeCubic).attr("transform", "translate(789,420) rotate(0)").transition()
          .duration(345).ease(d3.easeCubic).attr("transform", "translate(789,420) rotate(1)").on("end", repeat10); 
        };

        function repeat11(){
          if (count11 < maxCount){
            count11 += 1;
          }
          else{
            return;
          }
          d3.select("#T11k").transition()
          .duration(342).ease(d3.easeCubic).attr("transform", "translate(833,420) rotate(-1)").transition()
          .duration(342).ease(d3.easeCubic).attr("transform", "translate(833,420) rotate(0)").transition()
          .duration(342).ease(d3.easeCubic).attr("transform", "translate(833,420) rotate(1)").on("end", repeat11); 
        };

        function repeat12(){
          if (count12 < maxCount){
            count12 += 1;
          }
          else{
            return;
          }
          d3.select("#T11l").transition()
          .duration(352).ease(d3.easeCubic).attr("transform", "translate(869,420) rotate(-1)").transition()
          .duration(352).ease(d3.easeCubic).attr("transform", "translate(869,420) rotate(0)").transition()
          .duration(352).ease(d3.easeCubic).attr("transform", "translate(869,420) rotate(1)").on("end", repeat12); 
        };

        function repeat13(){
          if (count13 < maxCount){
            count13 += 1;
          }
          else{
            return;
          }
          d3.select("#T11m").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(912,420) rotate(-1)").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(912,420) rotate(0)").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(912,420) rotate(1)").on("end", repeat13); 
        };

        function repeat14(){
          if (count14 < maxCount){
            count14 += 1;
          }
          else{
            return;
          }
          d3.select("#T11n").transition()
          .duration(332).ease(d3.easeCubic).attr("transform", "translate(946,420) rotate(-1)").transition()
          .duration(332).ease(d3.easeCubic).attr("transform", "translate(946,420) rotate(0)").transition()
          .duration(332).ease(d3.easeCubic).attr("transform", "translate(946,420) rotate(1)").on("end", repeat14); 
        };

        function repeat15(){
          if (count15 < maxCount){
            count15 += 1;
          }
          else{
            return;
          }
          d3.select("#T11o").transition()
          .duration(343).ease(d3.easeCubic).attr("transform", "translate(990,420) rotate(-1)").transition()
          .duration(343).ease(d3.easeCubic).attr("transform", "translate(990,420) rotate(0)").transition()
          .duration(343).ease(d3.easeCubic).attr("transform", "translate(990,420) rotate(1)").on("end", repeat15); 
        };

        function repeat16(){
          if (count16 < maxCount){
            count16 += 1;
          }
          else{
            return;
          }
          d3.select("#T11p").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(1040,420) rotate(-1)").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(1040,420) rotate(0)").transition()
          .duration(350).ease(d3.easeCubic).attr("transform", "translate(1040,420) rotate(1)").on("end", repeat16); 
        };

        var width = 1200;
        var height = 500;
        var length = 100;
        /*
        var color = d3.scaleLinear().domain([1,length])
          .interpolate(d3.interpolateHcl)
          .range([d3.rgb("#007AFF"), d3.rgb('#FFF500')]);
          */
          var color = d3.scaleLinear()
          .domain([0, width/2])
          .range(['#d73027', '#1a9850'])
          .interpolate(d3.interpolateHcl); 
        //console.log(color(Math.floor(233.3)));
        //var color = d3.scaleOrdinal.range(['#f7a91e', '#d9f71e']);
        var rand = d3.randomNormal(width/2,100);
        var randomX = function(b){ return d3.randomNormal(b, 80)()};
        var randomY = d3.randomNormal(height/2, 80);

        var svg = d3.select("#fireworks");//d3.select("body").append("svg")
        var svg2 = d3.select("#fireworks2");
        //.attr("width", width)
        //.attr("height", height);

    var data = d3.range(100).map(function() { return {x: randomX(width/2), y: randomY()}; });
    var data2 = d3.range(100).map(function() { return {x: randomX(width/2), y: randomY()}; });

    var circles = svg.selectAll("circle").data(data).enter()
                    .append("circle");
    var circles2 = svg2.selectAll("circle").data(data2).enter()
                    .append("circle");                
    var fcount = 0;
    var fcount2 = 0;
    var maxFCount = 10;
    if (!this.checkDeviceSize()){
    var myVar1 = setInterval(function(){fireworks()},4000);
    var myVar2 = setInterval(function(){fireworks2()},3500);
    }      
    function fireworks(){
      if (fcount < maxFCount){
        fcount += 1;

      }
      else{
        clearInterval(myVar1);
      }
        var base = rand();

       // console.log(base);
        data = d3.range(100).map(function() { return {x: randomX(base), y: randomY()}; });
       
       //d3.select("circle").attr("fill-opacity",1).transition().ease(d3.easeCubic).duration(1000).attr("cy",height/2);

        circles.data(data).attr("r",1).attr("cx",base).attr("cy",height).attr("fill","gray").transition().ease(d3.easeCubic)
                .duration(1000)
                .attr("cy",height/2)
            .transition().delay(1200)
                .ease(d3.easeCubic)
                .duration(300)
                .attr("cx", function(d){ return d.x; })
                .attr("cy", function(d){ return d.y; })
                .attr("r", 5)
                .attr("fill", function(d){ return color(Math.floor(d.x)); }).attr("fill-opacity",1)
                .transition()
                .ease(d3.easeCubic)
                .duration(1000)
                .attr("fill-opacity",0)
                .attr("cx", function(d){ if(d.x > base){
                    return d.x + (d.x-base);
                }return d.x - (base - d.x);})
                .attr("cy", function(d){ if(d.y > height/2){
                    return d.y + (d.y-height/2);
                }return d.y - (height/2 - d.y);})
                .attr("r", 0);

    }

    function fireworks2(){
      //var base = rand();
      var base2 = rand();
      //console.log("fireworks2");
      //console.log(base2);
      if (fcount2 < maxFCount){
        fcount2 += 1;
      }
      else{
        console.log("clearing fireworks2");
        clearInterval(myVar2);
      }
      //data = d3.range(100).map(function() { return {x: randomX(base), y: randomY()}; });
      data2 = d3.range(100).map(function() { return {x: randomX(base2), y: randomY()}; });
     //d3.select("circle").attr("fill-opacity",1).transition().ease(d3.easeCubic).duration(1000).attr("cy",height/2);

      circles2.data(data2).attr("r",1).attr("cx",base2).attr("cy",height).attr("fill","gray").transition().ease(d3.easeCubic)
              .duration(1000)
              .attr("cy",height/2)
          .transition().delay(1200)
              .ease(d3.easeCubic)
              .duration(300)
              .attr("cx", function(d){ return d.x; })
              .attr("cy", function(d){ return d.y; })
              .attr("r", 5)
              .attr("fill", function(d){ return color(Math.floor(d.x)); }).attr("fill-opacity",1)
              .transition()
              .ease(d3.easeCubic)
              .duration(1000)
              .attr("fill-opacity",0)
              .attr("cx", function(d){ if(d.x > base2){
                  return d.x + (d.x-base2);
              }return d.x - (base2 - d.x);})
              .attr("cy", function(d){ if(d.y > height/2){
                  return d.y + (d.y-height/2);
              }return d.y - (height/2 - d.y);})
              .attr("r", 0);

  }

    //  <Backgroundart2comp/>
  }  

  loadConfetti(){
    console.log("load Confetti called!");
    var retina = (document.body.clientWidth)/window.screen.width;//(document.body.clientWidth+129.0)/1366.0;//window.devicePixelRatio,
    //if (this.checkDeviceSize()){
    //  retina *= 2.0;
    //}
    console.log("client width:");
    console.log(document.body.clientWidth);
    console.log(window.screen.width);
        // Math shorthands
        var PI = Math.PI,
        sqrt = Math.sqrt,
        round = Math.round,
        random = Math.random,
        cos = Math.cos,
        sin = Math.sin,
    
        // Local WindowAnimationTiming interface
        rAF = window.requestAnimationFrame,
        cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
        _now = Date.now || function () {return new Date().getTime();};
    var tcount = 0;
    var maxTCount = 1200;
    // Local WindowAnimationTiming interface polyfill
    (function (w) {
      /**
                    * Fallback implementation.
                    */
      var prev = _now();
      function fallback(fn) {
        var curr = _now();
        var ms = Math.max(0, 16 - (curr - prev));
        var req = setTimeout(fn, ms);
        prev = curr;
        return req;
      }
    
      /**
                    * Cancel.
                    */
      var cancel = w.cancelAnimationFrame
      || w.webkitCancelAnimationFrame
      || w.clearTimeout;
    
      rAF = w.requestAnimationFrame
      || w.webkitRequestAnimationFrame
      || fallback;
    
      cAF = function(id){
        cancel.call(w, id);
      };
    }(window));
    
    //document.addEventListener("DOMContentLoaded", function() {
      var speed = 50,
          duration = (1.0 / speed),
          confettiRibbonCount = 11,
          ribbonPaperCount = 30,
          ribbonPaperDist = 8.0,
          ribbonPaperThick = 8.0,
          confettiPaperCount = 35,
          DEG_TO_RAD = PI / 180,
          RAD_TO_DEG = 180 / PI,
          colors = [
            ["#df0049", "#660671"],
            ["#00e857", "#005291"],
            ["#2bebbc", "#05798a"],
            ["#ffd200", "#b06c00"]
          ];
    
      function Vector2(_x, _y) {
        this.x = _x, this.y = _y;
        this.Length = function() {
          return sqrt(this.SqrLength());
        }
        this.SqrLength = function() {
          return this.x * this.x + this.y * this.y;
        }
        this.Add = function(_vec) {
          this.x += _vec.x;
          this.y += _vec.y;
        }
        this.Sub = function(_vec) {
          this.x -= _vec.x;
          this.y -= _vec.y;
        }
        this.Div = function(_f) {
          this.x /= _f;
          this.y /= _f;
        }
        this.Mul = function(_f) {
          this.x *= _f;
          this.y *= _f;
        }
        this.Normalize = function() {
          var sqrLen = this.SqrLength();
          if (sqrLen != 0) {
            var factor = 1.0 / sqrt(sqrLen);
            this.x *= factor;
            this.y *= factor;
          }
        }
        this.Normalized = function() {
          var sqrLen = this.SqrLength();
          if (sqrLen != 0) {
            var factor = 1.0 / sqrt(sqrLen);
            return new Vector2(this.x * factor, this.y * factor);
          }
          return new Vector2(0, 0);
        }
      }
      Vector2.Lerp = function(_vec0, _vec1, _t) {
        return new Vector2((_vec1.x - _vec0.x) * _t + _vec0.x, (_vec1.y - _vec0.y) * _t + _vec0.y);
      }
      Vector2.Distance = function(_vec0, _vec1) {
        return sqrt(Vector2.SqrDistance(_vec0, _vec1));
      }
      Vector2.SqrDistance = function(_vec0, _vec1) {
        var x = _vec0.x - _vec1.x;
        var y = _vec0.y - _vec1.y;
        var z = _vec0.z - _vec1.z;
        return (x * x + y * y + z * z);
      }
      Vector2.Scale = function(_vec0, _vec1) {
        return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
      }
      Vector2.Min = function(_vec0, _vec1) {
        return new Vector2(Math.min(_vec0.x, _vec1.x), Math.min(_vec0.y, _vec1.y));
      }
      Vector2.Max = function(_vec0, _vec1) {
        return new Vector2(Math.max(_vec0.x, _vec1.x), Math.max(_vec0.y, _vec1.y));
      }
      Vector2.ClampMagnitude = function(_vec0, _len) {
        var vecNorm = _vec0.Normalized;
        return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
      }
      Vector2.Sub = function(_vec0, _vec1) {
        return new Vector2(_vec0.x - _vec1.x, _vec0.y - _vec1.y, _vec0.z - _vec1.z);
      }
    
      function EulerMass(_x, _y, _mass, _drag) {
        this.position = new Vector2(_x, _y);
        this.mass = _mass;
        this.drag = _drag;
        this.force = new Vector2(0, 0);
        this.velocity = new Vector2(0, 0);
        this.AddForce = function(_f) {
          this.force.Add(_f);
        }
        this.Integrate = function(_dt) {
          var acc = this.CurrentForce(this.position);
          acc.Div(this.mass);
          var posDelta = new Vector2(this.velocity.x, this.velocity.y);
          posDelta.Mul(_dt);
          this.position.Add(posDelta);
          acc.Mul(_dt);
          this.velocity.Add(acc);
          this.force = new Vector2(0, 0);
        }
        this.CurrentForce = function(_pos, _vel) {
          var totalForce = new Vector2(this.force.x, this.force.y);
          var speed = this.velocity.Length();
          var dragVel = new Vector2(this.velocity.x, this.velocity.y);
          dragVel.Mul(this.drag * this.mass * speed);
          totalForce.Sub(dragVel);
          return totalForce;
        }
      }
    
      function ConfettiPaper(_x, _y) {
        this.pos = new Vector2(_x, _y);
        this.rotationSpeed = (random() * 600 + 800);
        this.angle = DEG_TO_RAD * random() * 360;
        this.rotation = DEG_TO_RAD * random() * 360;
        this.cosA = 1.0;
        this.size = 5.0;
        this.oscillationSpeed = (random() * 1.5 + 0.5);
        this.xSpeed = 40.0;
        this.ySpeed = (random() * 60 + 50.0);
        this.corners = new Array();
        this.time = random();
        var ci = round(random() * (colors.length - 1));
        this.frontColor = colors[ci][0];
        this.backColor = colors[ci][1];
        for (var i = 0; i < 4; i++) {
          var dx = cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
          var dy = sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
          this.corners[i] = new Vector2(dx, dy);
        }
        this.Update = function(_dt) {
          this.time += _dt;
          this.rotation += this.rotationSpeed * _dt;
          this.cosA = cos(DEG_TO_RAD * this.rotation);
          this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt
          this.pos.y += this.ySpeed * _dt;
          if (this.pos.y > ConfettiPaper.bounds.y) {
            this.pos.x = random() * ConfettiPaper.bounds.x;
            this.pos.y = 0;
          }
        }
        this.Draw = function(_g) {
          if (this.cosA > 0) {
            _g.fillStyle = this.frontColor;
          } else {
            _g.fillStyle = this.backColor;
          }
          _g.beginPath();
          _g.moveTo((this.pos.x + this.corners[0].x * this.size) * retina, (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina);
          for (var i = 1; i < 4; i++) {
            _g.lineTo((this.pos.x + this.corners[i].x * this.size) * retina, (this.pos.y + this.corners[i].y * this.size * this.cosA) * retina);
          }
          _g.closePath();
          _g.fill();
        }
      }
      ConfettiPaper.bounds = new Vector2(0, 0);
    
      function ConfettiRibbon(_x, _y, _count, _dist, _thickness, _angle, _mass, _drag) {
        this.particleDist = _dist;
        this.particleCount = _count;
        this.particleMass = _mass;
        this.particleDrag = _drag;
        this.particles = new Array();
        var ci = round(random() * (colors.length - 1));
        this.frontColor = colors[ci][0];
        this.backColor = colors[ci][1];
        this.xOff = (cos(DEG_TO_RAD * _angle) * _thickness);
        this.yOff = (sin(DEG_TO_RAD * _angle) * _thickness);
        this.position = new Vector2(_x, _y);
        this.prevPosition = new Vector2(_x, _y);
        this.velocityInherit = (random() * 2 + 4);
        this.time = random() * 100;
        this.oscillationSpeed = (random() * 2 + 2);
        this.oscillationDistance = (random() * 40 + 40);
        this.ySpeed = (random() * 40 + 80);
        for (var i = 0; i < this.particleCount; i++) {
          this.particles[i] = new EulerMass(_x, _y - i * this.particleDist, this.particleMass, this.particleDrag);
        }
        this.Update = function(_dt) {
          var i = 0;
          this.time += _dt * this.oscillationSpeed;
          this.position.y += this.ySpeed * _dt;
          this.position.x += cos(this.time) * this.oscillationDistance * _dt;
          this.particles[0].position = this.position;
          var dX = this.prevPosition.x - this.position.x;
          var dY = this.prevPosition.y - this.position.y;
          var delta = sqrt(dX * dX + dY * dY);
          this.prevPosition = new Vector2(this.position.x, this.position.y);
          for (i = 1; i < this.particleCount; i++) {
            var dirP = Vector2.Sub(this.particles[i - 1].position, this.particles[i].position);
            dirP.Normalize();
            dirP.Mul((delta / _dt) * this.velocityInherit);
            this.particles[i].AddForce(dirP);
          }
          for (i = 1; i < this.particleCount; i++) {
            this.particles[i].Integrate(_dt);
          }
          for (i = 1; i < this.particleCount; i++) {
            var rp2 = new Vector2(this.particles[i].position.x, this.particles[i].position.y);
            rp2.Sub(this.particles[i - 1].position);
            rp2.Normalize();
            rp2.Mul(this.particleDist);
            rp2.Add(this.particles[i - 1].position);
            this.particles[i].position = rp2;
          }
          if (this.position.y > ConfettiRibbon.bounds.y + this.particleDist * this.particleCount) {
            this.Reset();
          }
        }
        this.Reset = function() {
          this.position.y = -random() * ConfettiRibbon.bounds.y;
          this.position.x = random() * ConfettiRibbon.bounds.x;
          this.prevPosition = new Vector2(this.position.x, this.position.y);
          this.velocityInherit = random() * 2 + 4;
          this.time = random() * 100;
          this.oscillationSpeed = random() * 2.0 + 1.5;
          this.oscillationDistance = (random() * 40 + 40);
          this.ySpeed = random() * 40 + 80;
          var ci = round(random() * (colors.length - 1));
          this.frontColor = colors[ci][0];
          this.backColor = colors[ci][1];
          this.particles = new Array();
          for (var i = 0; i < this.particleCount; i++) {
            this.particles[i] = new EulerMass(this.position.x, this.position.y - i * this.particleDist, this.particleMass, this.particleDrag);
          }
        }
        this.Draw = function(_g) {
          for (var i = 0; i < this.particleCount - 1; i++) {
            var p0 = new Vector2(this.particles[i].position.x + this.xOff, this.particles[i].position.y + this.yOff);
            var p1 = new Vector2(this.particles[i + 1].position.x + this.xOff, this.particles[i + 1].position.y + this.yOff);
            if (this.Side(this.particles[i].position.x, this.particles[i].position.y, this.particles[i + 1].position.x, this.particles[i + 1].position.y, p1.x, p1.y) < 0) {
              _g.fillStyle = this.frontColor;
              _g.strokeStyle = this.frontColor;
            } else {
              _g.fillStyle = this.backColor;
              _g.strokeStyle = this.backColor;
            }
            if (i == 0) {
              _g.beginPath();
              _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
              _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
              _g.lineTo(((this.particles[i + 1].position.x + p1.x) * 0.5) * retina, ((this.particles[i + 1].position.y + p1.y) * 0.5) * retina);
              _g.closePath();
              _g.stroke();
              _g.fill();
              _g.beginPath();
              _g.moveTo(p1.x * retina, p1.y * retina);
              _g.lineTo(p0.x * retina, p0.y * retina);
              _g.lineTo(((this.particles[i + 1].position.x + p1.x) * 0.5) * retina, ((this.particles[i + 1].position.y + p1.y) * 0.5) * retina);
              _g.closePath();
              _g.stroke();
              _g.fill();
            } else if (i == this.particleCount - 2) {
              _g.beginPath();
              _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
              _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
              _g.lineTo(((this.particles[i].position.x + p0.x) * 0.5) * retina, ((this.particles[i].position.y + p0.y) * 0.5) * retina);
              _g.closePath();
              _g.stroke();
              _g.fill();
              _g.beginPath();
              _g.moveTo(p1.x * retina, p1.y * retina);
              _g.lineTo(p0.x * retina, p0.y * retina);
              _g.lineTo(((this.particles[i].position.x + p0.x) * 0.5) * retina, ((this.particles[i].position.y + p0.y) * 0.5) * retina);
              _g.closePath();
              _g.stroke();
              _g.fill();
            } else {
              _g.beginPath();
              _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);
              _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);
              _g.lineTo(p1.x * retina, p1.y * retina);
              _g.lineTo(p0.x * retina, p0.y * retina);
              _g.closePath();
              _g.stroke();
              _g.fill();
            }
          }
        }
        this.Side = function(x1, y1, x2, y2, x3, y3) {
          return ((x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2));
        }
      }
      ConfettiRibbon.bounds = new Vector2(0, 0);
      confetti = {};
      confetti.Context = function(id) {
        var i = 0;
        var canvas = document.getElementById(id);
        var canvasParent = canvas.parentNode;
        console.log("C width: ");
        var canvasWidth = 1366.0;//document.body.clientWidth;//canvasParent.width;
        console.log(canvasWidth);
        var canvasHeight = window.innerHeight;//document.body.clientHeight;//canvasParent.height;
        console.log(canvasHeight);
        canvas.width = document.body.clientWidth;//* retina;
        
        if (document.body.clientWidth/1366.0 < .4){
          canvas.width = 2.0*document.body.clientWidth;
        }
        
        canvas.height = canvasHeight;// * retina;
        var context = canvas.getContext('2d');
        var interval = null;
        var confettiRibbons = new Array();
        ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
        for (i = 0; i < confettiRibbonCount; i++) {
          confettiRibbons[i] = new ConfettiRibbon(random() * canvasWidth, -random() * canvasHeight * 2, ribbonPaperCount, ribbonPaperDist, ribbonPaperThick, 45, 1, 0.05);
        }
        var confettiPapers = new Array();
        ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
        for (i = 0; i < confettiPaperCount; i++) {
          confettiPapers[i] = new ConfettiPaper(random() * canvasWidth, random() * canvasHeight);
        }
        this.resize = function() {
          canvasWidth = 1366.0;
          console.log("C Width: ");
          console.log(canvasWidth);
          
          canvasHeight = document.body.clientHeight;
          //canvas.width = canvasWidth * retina;
          //canvas.height = canvasHeight * retina;
          ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
          ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
        }
        this.start = function() {
          console.log("hitting start of confetti");
          this.stop()
          var context = this;
          this.update();
        }
        
        this.stop = function() {
          cAF(this.interval);
        }
        this.update = function() {
          if (tcount < maxTCount){
            tcount += 1;

          }
          else{
            return;
          }
          var i = 0;
          context.clearRect(0, 0, canvas.width, canvas.height);
          for (i = 0; i < confettiPaperCount; i++) {
            confettiPapers[i].Update(duration);
            confettiPapers[i].Draw(context);
          }
          for (i = 0; i < confettiRibbonCount; i++) {
            confettiRibbons[i].Update(duration);
            confettiRibbons[i].Draw(context);
          }
          this.interval = rAF(function() {
            confetti.update();
          });
        }
      }
      var confetti = new confetti.Context('confetti');
      confetti.start();
      window.addEventListener('resize', function(event){
        confetti.resize();
      });
    //});
}
  

  render() {
    //<canvas id="confetti"/>
    
    return (
        <div>
          
          <canvas id="confetti"/>
          <Backgroundart2comp id="comp2"/>
        </div>
    );
  }
}

export default Dashboard;