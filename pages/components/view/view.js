import React, {Component} from 'react';
import CatalogDetailsComponent from './catalogDetails/catalogDetails';
import MyOrderComponent from './myOrders/myOrders';
import MyCartComponent from './myCarts/myCarts';
import { config } from '../../../assets/config';

/**
 * This Component is the view component of shredCom App
 */
export default class ViewComponent extends React.Component {
    constructor() {
        super()
    }
/**this function will render the respective component called after routing**/
   componentRendered = ()=> {
	    if(this.props.url == config.ORDER_ROUTE){
		return <MyOrderComponent/>
	    }
	    if(this.props.url == config.CART_ROUTE){
		return <MyCartComponent/>
	    }
	    if(this.props.url == config.CATALOG_ROUTE){
		return <CatalogDetailsComponent Id = {this.props.Id}/>
	    }
    }

    render(){
        return( <React.Fragment>
	{this.componentRendered()}
            </React.Fragment>
            ) 
    }
}

