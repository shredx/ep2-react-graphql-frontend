/**
 * this file is used to create graphqlSchema Structure
 */
import { makeHttpRequest} from './httpService'
import {config} from '../assets/config'
const FETCH_CATALOGS = `{ 
    Categories
        {
            ID,
            Name,
            Description
        }
    }`;
const FETCH_CATALOG_DETAILS =  `{ 
    Category(ID:%s)
        {
            ID,
            Name,
            Description,
          Products{
            Description,
            ID,
            Image,
            Name,
            Price
          },
        }
    }`;
const FETCH_PRODUCT_DETAILS = ''
const FETCH_ORDER_DETAILS = ''
const FETCH_CART_DETAILS = ''
/**
 * Adding generic format specifier for String
 */
String.prototype.format = function() {
    return [...arguments].reduce((a,c) => a.replace('%s',c),this)
}
/**
 * function call to fetch catalog items
 */
export const fetchCatalogList = () => {
   //returning the schema as no dynamic param is there
    return makeHttpRequest(FETCH_CATALOGS)
}
/**
 * function Call to fetch catalog details of a category
 * @param Id it is the category Id
 */
export const fetchCatalogDetails = (Id) => {
    return makeHttpRequest(FETCH_CATALOG_DETAILS.format(Id))
}
/**
 * function call to fetch Orders
 */
export const fetchOrderDetails = () => {
    return "fetchOrddrs"
}
/**
 * function call to fetch cart details
 */
export const fetchCartDetails = () => {
    return "fetchCart"
}
/**
 * function call to fetch product details
 */
export const fetchProductDetails = () => {
    return "fetchProducts"
}
