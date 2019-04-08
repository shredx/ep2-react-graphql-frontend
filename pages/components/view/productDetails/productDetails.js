import React, {Component} from 'react';
import {updateCartDetails} from '../../../../services/updateData' 
import './productDetails.css'
/**
 * This Component is the fixed productCard component of shredCom App
 */
export default class ProductDetailsComponent extends React.Component {
    constructor() {
        super()
        this.state={
            statusMsg :false
        }
    }
    //adding product to carts after action
    addProduct = () => {
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
            <div className="card productCardDiv">
  <img className="card-img-top" src={this.props.product.Image} alt={this.props.product.Name}/>
  <div className="card-body">
  <h6>{this.props.product.Description.length > 100? this.props.product.Description.substring(0,100)+'...':this.props.product.Description}</h6>
    <h5 className="card-title">{this.props.product.Name}</h5>
    <div className='productCartDiv'>
    <h5 className="card-title">${this.props.product.Price}</h5>
    <div className='productbtnDiv'>
    <a href="#" className="btn btn-primary cartbtn"  onClick={this.addProduct}>{this.state.statusMsg?'Added to Cart':'Add to Cart'}</a>
  </div>
  </div>
  </div>
</div>
            </React.Fragment>
            ) 
    }
}
