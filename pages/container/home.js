import React, {Component} from 'react';
import HeaderComponent from '../components/header/header';
import './home.css';
import CatalogMenuComponent from '../components/catalogMenu/catalogMenu';
import ViewComponent from '../components/view/view';
import MyOrderComponent from '../components/view/myOrders/myOrders';
import MyCartComponent from '../components/view/myCarts/myCarts';
/**
 * This component is the home page of shredCom App
 */
export default class HomeComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            viewPage: ''
        }
    }
    /**
     * update the view Component to be rendered
     * @param val is the path where to render
     * @param id is the categoryId
     */
    updateContent = (val,id) => {
        this.setState({
            viewPage:val
        })
    }

    render(){
        return( <React.Fragment>
            
       
            <div className="header-container" ><HeaderComponent update={(val)=>this.updateContent(val)}/>
            </div>
            <div className="side-container"><CatalogMenuComponent update={(val,id)=>this.updateContent(val,id)}/>
            </div>
            <div className="view-container" ><ViewComponent url={this.state.viewPage} />
            </div>
           
            </React.Fragment>
            ) 
    }
}