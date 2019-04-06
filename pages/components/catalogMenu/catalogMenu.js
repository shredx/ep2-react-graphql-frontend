import React, {Component} from 'react';
import CatalogMenuItemComponent from './catalogMenuItem/catalogMenuItem';
import { fetchCatalogList } from '../../../services/fetchData';
/**
 * This Component is the fixed side component of shredCom App
 */
export default class CatalogMenuComponent extends React.Component {
    constructor(){
        super()
        this.state={
            categoryDetails: [{
                name: 'Food',
                Id: 1,
            },{
                name:'Games',
                Id: 2,
            },{
                name:'Clothes',
                Id: 3,
            },{
                name:'Shoes',
                Id: 4,
            }]
        }
    }
    //It would be called everyTime to call category API
    componentDidMount(){
        fetchCatalogList()
        //update the state according to the result received
    }
    /**
     * this function is use
     */
    render(){
        return( <React.Fragment>
            {this.state.categoryDetails.map(cat => <CatalogMenuItemComponent category={cat} updateId={Id => this.props.update('Catalog',Id)} key={cat.Id}/>)}
            </React.Fragment>
            ) 
    }
}