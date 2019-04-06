import React, {Component} from 'react';
import './catalogDetails.css'
import { fetchCatalogDetails } from '../../../../services/fetchData';
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
                Id: 1,
                name: 'Food',
                productDetails: [{
                    imageUrl: 'https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078',
                    title: 'Apple',
                    price: '$4',
                    Id: 2,
                },{
                    imageUrl: 'https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078',
                    title: 'Apple',
                    price: '$5',
                    Id: 1
                },{
                    imageUrl: 'https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078',
                    title: 'Apple',
                    price: '$6',
                    Id: 3,
                },{
                    imageUrl: 'https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078',
                    title: 'Apple',
                    price: '$7',
                    Id: 4,

                },{
                    imageUrl: 'https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078',
                    title: 'Apple',
                    price: '$8',
                    Id: 5,
                },{
                    imageUrl: 'https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078',
                    title: 'Apple',
                    price: '$7',
                    Id: 6,
                }],
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
    componentDidUpdate(){
        console.log(this.state.showProduct)
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
           return  <img src = {this.state.catalogDetails.imageUrl} alt={this.state.catalogDetails.name}/>
        }
    }
    render(){
        return( <React.Fragment>
            <div className='catalogMainDiv'>
                    <div className='catalogImageDiv'>
                    {this.viewDetails()}
                    </div>
                <div className='productDiv'>
                    <ProductMenuComponent productDetails={(product) => this.productDetails(product)} products={this.state.catalogDetails.productDetails}/>)
                </div>
            </div>
            </React.Fragment>
            ) 
    }
}
