import React, {Component} from 'react';
import CatalogDetailsComponent from './catalogDetails/catalogDetails';
import MyOrderComponent from './myOrders/myOrders';
import MyCartComponent from './myCarts/myCarts';
import '../../../services/fetchData'

/**
 * This Component is the view component of shredCom App
 */
export default class ViewComponent extends React.Component {
    constructor() {
        super()
    }
/**this function will render the respective component called after routing**/
   componentRendered = ()=> {
	    if(this.props.url == "My Orders"){
		return <MyOrderComponent/>
	    }
	    if(this.props.url == "My Cart"){
		return <MyCartComponent/>
	    }
	    if(this.props.url == "Catalog"){
		return <CatalogDetailsComponent/>
	    }
    }

    render(){
        return( <React.Fragment>
	{this.componentRendered()}
            </React.Fragment>
            ) 
    }
}

