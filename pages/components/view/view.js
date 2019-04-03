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
        this.state = {
            viewUrl : 'catalog'
        }
 
    }
/**this function will render the respective component called after routing**/
   componentRendered = ()=> {
       console.log("i am here ",this.state)
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
    componentDidMount(){
    
	if(this.props.match && this.props.match.params.url)
	    this.setState({
			viewUrl: this.props.match.params.url
			    })
    }
    render(){
        return( <React.Fragment>
	{this.componentRendered()}
            </React.Fragment>
            ) 
    }
}

