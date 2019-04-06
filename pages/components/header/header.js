import React, {Component} from 'react';
import './header.css'
import MyOrderComponent from '../view/myOrders/myOrders';
import MyCartComponent from '../view/myCarts/myCarts';
import HomeComponent from '../../container/home';
/**
 * This Component is the fixed header component of shredCom App
 */
export default class HeaderComponent extends React.Component {
    constructor(){
        super();
    }
    /**
     * this function is used to specify which content to show in body
     */
    contentChange = ($event) => {
      this.props.update($event.target.text)
    }
    render(){
        return( <React.Fragment>
        
        
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top navDiv">
        <a className="navbar-brand" to="/">ShredCom</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtarget" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navtarget">
          <ul className="navbar-nav mr-auto" onClick={this.contentChange}>
           
            <li className="nav-item">
              <a className="nav-link" to="#">My Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">My Orders</a>
            </li>
          </ul>        
        </div>
        </nav>
       </React.Fragment>
            ) 
    }
}