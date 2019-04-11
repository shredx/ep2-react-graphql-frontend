import React, {Component} from 'react';
import CatalogMenuItemComponent from './catalogMenuItem/catalogMenuItem';
import { fetchCatalogList } from '../../../services/graphqlAddSchema';
import { config } from '../../../assets/config';
/**
 * This Component is the fixed side component of shredCom App
 */
export default class CatalogMenuComponent extends React.Component {
    constructor(){
        super()
        this.state={
            categoryDetails: []
        }
    }
    //It would be called everyTime to call category API
    componentDidMount(){
        fetchCatalogList().then(data => {
             //update the state according to the result received
            this.setState({
                categoryDetails: data.data.data.Categories
        })
    })
       
    }
    /**
     * this function is use
     */
    render(){
        return( <React.Fragment>
            {this.state.categoryDetails.map(cat => <CatalogMenuItemComponent category={cat} updateId={Id => this.props.update(config.CATALOG_ROUTE,Id)} key={cat.ID}/>)}
            </React.Fragment>
            ) 
    }
}