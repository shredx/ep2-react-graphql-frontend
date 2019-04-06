import React, {Component} from 'react';
import './productCard.css';
import {updateCartDetails} from '../../../../../../services/updateData' 
/**
 * This Component is the fixed productCard component of shredCom App
 */
export default class ProductCardComponent extends React.Component {
    constructor() {
        super()
        this.state={
            statusMsg :false
        }
    }
    /**
     * this function is called when user clicks on any product for details
     */
    productDetails = () => {
        console.log(this.props)
        //call the parent function to update product Details
        this.props.productDetails(this.props.product)
    }
    //adding product to carts after action
    addProduct = () => {
        console.log(this)
       //call the update cart service if status is false
        if(!this.state.statusMsg){
            updateCartDetails()
        }
         //toggle the msg status
         this.setState(
             {statusMsg :!this.state.statusMsg}
             )
    }

    render(){
        return( <React.Fragment>
            <div className="card cardDiv" onClick={this.productDetails}>
  <img className="card-img-top" src={this.props.product.imageUrl} alt={this.props.product.title}/>
  <div className="card-body">
    <h5 className="card-title">{this.props.product.title}</h5>
    <h5 className="card-title">{this.props.product.price}</h5>
  </div>
</div>
            </React.Fragment>
            ) 
    }
}
