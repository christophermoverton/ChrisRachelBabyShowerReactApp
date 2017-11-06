import React from 'react';
import ReactDOM from 'react-dom';
import SVGInline from 'react-svg-inline';
import SVGback from './Backgroundart.svg';
class Backgroundartcomp extends React.Component {
    render() {
      return (
        <SVGInline svg={ SVGback } />
        
      );
    }
  }

  export default () => (
    <div>
      <SVGInline svg={ SVGback } />
    </div>
  )