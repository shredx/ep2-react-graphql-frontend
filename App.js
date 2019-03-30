import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class shredComApp extends React.Component {
    constructor(){
        super();
    }
    render(){
        return ( 
        <div>
          <div>  <h1>It works</h1></div>
        </div>
        );
    }
}

ReactDOM.render(<shredComApp />, document.getElementById('app'));