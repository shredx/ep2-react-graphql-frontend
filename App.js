import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class shredComApp extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(<div>It works</div>)
    }
}

ReactDOM.render(<shredComApp />, document.getElementById('app'));