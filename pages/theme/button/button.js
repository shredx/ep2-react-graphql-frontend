/**
 * This file is used for theme based button component
 */
import React, {Component} from 'react';
import './button.css'
/**
 * This Component is the Button component of shredCom App
 */
export default class ButtonComponent extends React.Component {
    constructor() {
        super()
    }
 /**
  * This is a generic function which calls the parent event
  */
 triggerEvent = () => {
     //caling the paent function
     this.props.callEvent()
 }
    render(){
        return( <React.Fragment>
            <button className='btn' onClick={this.triggerEvent} style={this.props.style} >{this.props.label}</button>
            </React.Fragment>
            ) 
    }
}
