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
            {this.props.products.map(p => <ProductCardComponent product={p}/>)}
            </React.Fragment>
            ) 
    }
}
