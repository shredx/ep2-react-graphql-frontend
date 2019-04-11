import React, {Component} from 'react';
import './login.css'
import { label } from '../../../assets/config';
/**
 * This Component is the fixed Login component of shredCom App
 */
export default class LoginComponent extends React.Component {
    constructor() {
        super()
        this.state={
            formDetails: [{
                Name: label.NAME,
                Type: "Text",
            },{
                Name: label.PASSWORD,
                Type: "Password",
            }],
        }
    }
    /**
     * this function would update the state when login clicked 
     */
    onLogin = () => {
        //update the state
    }
    /**
     * this function would update the state when signin clicked 
     */
    onSign = () => {
        //update the state
    }    
    render(){
        return( <React.Fragment>
            <div>
                <div className='loginBtnDiv'>
                <a to="#" onClick={this.onLogin}>{label.LOGIN}</a>
                <a to="#" onClick={this.onSign}>{label.SIGNUP}</a>
                </div>
                {this.state.formDetails.map(f => {
                    return (<div>
                        cghfhgf
                        </div>)
                })}
                </div>
            </React.Fragment>
            ) 
    }
}
