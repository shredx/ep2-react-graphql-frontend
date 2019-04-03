import React, {Component} from 'react';
import {CatalogDetailsComponent} from './catalogDetails/catalogDetails'
import {MyOrderComponent} from './myOrders/myOrders'
import {MyCartComponent} from './myCarts/myCarts'

/**
 * This Component is the fixeimporc {CatalogDetailsComponent} from './catalogDetails/catalogDetails'
d view component of shredCom App
 */
class ViewComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            viewUrl: 'catalog',
            catalogDetails: {
                Id: '',
                name: '',
                productDetails: [],
                imageUrl: '',
            }
        }
    }
/**this function will render the respective component called after routing**/
   componentRendered = ()=> {
	    if(this.state.viewUrl == "myorder"){
		return <MyOrderComponent/>
	    }
	    if(this.state.viewUrl == "mycart"){
		return <MyCartComponent/>
	    }
	    if(this.state.viewUrl == "catalog"){
		return <CatalogDetailsComponent/>
	    }

    }
/** this will be called when component is mounted*/
    ComponentWillMount(){
	if(this.props.match && this.props.match.params.url)
	    this.setState({
			viewUrl: this.props.match.params.url
			    })
    }
    render(){
        return( <React.Fragment>View component
	{this.componentRendered}
            </React.Fragment>
            ) 
    }
}
export default ViewComponent
