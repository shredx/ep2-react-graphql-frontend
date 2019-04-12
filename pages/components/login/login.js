import React, {Component} from 'react';
import './login.css'
import { label } from '../../../assets/config';
import ButtonComponent from '../../theme/button/button';
/**
 * This Component is the fixed Login component of shredCom App
 */
export default class LoginComponent extends React.Component {
    constructor() {
        super()
        this.state={
            label: label.LOGIN,
            formDetails: [{
                Name: label.NAME,
                Type: "text",
            },{
                Name: label.PASSWORD,
                Type: "password",
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
    /**
     * THis function is called once user chooses to signin
     */
    userLogin = () => {

    }    
    render(){
        var loginbtnstyle = {
            'backgroundColor': '#d4d1d1'
        }
        var signinbtnstyle= {
            'backgroundColor': 'transparent'
        }
        var loginStyle = {
            'backgroundColor': 'green',
            'width': '50%',
            'float': 'right',
        }
        return( <React.Fragment>
            <div className='l_m_d'>
                <div className="l_m_d_i">
                <div className='l_m_d_i_b'>
                <ButtonComponent callEvent={this.onLogin} label={label.LOGIN} style={loginbtnstyle}/>
                <ButtonComponent callEvent={this.onSign} label={label.SIGNUP} style={signinbtnstyle}/>
                </div>
                {this.state.formDetails.map(f => {
                    return (<div className='l_m_d_i_i'><div>
                        <label>{f.Name}*</label>
                        </div>
                        <div>
                        <input placeholder={f.Name} type={f.Type}/>
                        </div>
                        </div>)
                })}
                <div>
                <ButtonComponent callEvent={this.userLogin} label={this.state.label} style={loginStyle}/>
                    </div>
                </div>
                </div>
            </React.Fragment>
            ) 
    }
}
