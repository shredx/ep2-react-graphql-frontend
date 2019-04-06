import React, {Component} from 'react';
import './catalogDetails.css'
import { fetchCatalogDetails } from '../../../../services/fetchData';
import ProductMenuComponent from './productMenu/productMenu';
/**
 * This Component is the fixed catalogDetails component of shredCom App
 */
export default class CatalogDetailsComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            catalogDetails: {
                Id: '',
                name: '',
                productDetails: ['1','2','3','4'],
                imageUrl: './assets/e-commerce-3.jpg',
            }
        }
    }
    /**
     * THis function is called after component is mounted and here we would fetch the catalog Details
     */
    componentDidMount(){
        //calling the catalogDetails API
        let data = fetchCatalogDetails()
        //set the state accordingly
    }
    render(){
        return( <React.Fragment>
            <div className='catalogMainDiv'>
                    <div className='catalogImageDiv'>
                    <img src = {this.state.catalogDetails.imageUrl} alt={this.state.catalogDetails.name}/>
                    </div>
                <div className='productDiv'>
                    <ProductMenuComponent products={this.state.catalogDetails.productDetails}/>)
                </div>
            </div>
            </React.Fragment>
            ) 
    }
}
