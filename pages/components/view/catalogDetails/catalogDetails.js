import React, {Component} from 'react';
import './catalogDetails.css'
import { fetchCatalogDetails } from '../../../../services/graphqlAddSchema';
import ProductMenuComponent from './productMenu/productMenu';
import ProductDetailsComponent from '../productDetails/productDetails';
/**
 * This Component is the fixed catalogDetails component of shredCom App
 */
export default class CatalogDetailsComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            showProduct: false,
            product: [],
            catalogDetails: {
                Products: [],
            }
    }
}

    /**
    * This lifeCycle is called to control rendering if same category is hit again
    */
    shouldComponentUpdate(nextState,nextProps){
        //return boolean on the basis of Id
        return nextProps.Id != this.props.Id
    }
    /**
     * this function would be used to fetch category details
     */
    fetchCategory(){
        //calling the catalogDetails API
        fetchCatalogDetails(this.props.Id).then( data => {
        //set the state accordingly
        this.setState({
                catalogDetails: {...data.data.data.Category},
                })
            })
    }
    /**
     * THis function is called after component is mounted and here we would fetch the catalog Details
     */
    componentDidMount(){
        this.fetchCategory();
    }
    /**
     * This lifecycle would be used if some other category is clicked
     */
    componentDidUpdate(){
        if(this.props.Id != this.state.catalogDetails.ID){
            this.fetchCategory();
        }
    }
    /**
     * this function is called to set up the product details choosen
     */
    productDetails = (product) => {
        //set the show product function to true
        console.log(this.state.showProduct,"there")
        this.setState({
            showProduct: true,
            product: product,
        })
    }
    /**
     * this function will return according the view desired
     */ 
    viewDetails = () => {
        if(this.state.showProduct){
            return <ProductDetailsComponent product={this.state.product}/>
        }else{
           return  <img src = {this.state.catalogDetails.Image} alt={this.state.catalogDetails.Name}/>
        }
    }
    render(){
        return( <React.Fragment>
            <div className='catalogMainDiv'>
                    <div className='catalogImageDiv'>
                    {this.viewDetails()}
                    </div>
                <div className='productDiv'>
                    <ProductMenuComponent productDetails={(product) => this.productDetails(product)} products={this.state.catalogDetails.Products}/>)
                </div>
            </div>
            </React.Fragment>
            ) 
    }
}
