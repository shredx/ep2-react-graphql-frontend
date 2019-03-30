import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ShredComApp extends React.Component {
    constructor(){
        super();
    }
    render(){
        return (<div>
            Catalogues
        </div>) 
    }
}

ReactDOM.render(<ShredComApp />, document.getElementById('app'));