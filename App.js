import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './pages/container/home'
import './styles.css' 
/**
 * THis component is the main parent component of shredCom App
 */
export default class ShredComApp extends React.Component {
    constructor(){
        super();
    }
    render(){
       return(
       <div className="app-container"><HomeComponent/></div>
       )
    }
}

ReactDOM.render(<ShredComApp />, document.getElementById('app'));