import React, {Component} from 'react';
import ProductCardComponent from './productCard/productCard';
/**
 * This Component is the fixed productMenu component of shredCom App
 */
export default class ProductMenuComponent extends React.Component {
    constructor() {
        super()
    }
    render(){
        return( <React.Fragment>
            {this.props.products.map((p,index) => <ProductCardComponent productDetails={this.props.productDetails} key={p.ID?p.ID:index} product={p}/>)}
            </React.Fragment>
            ) 
    }
}
