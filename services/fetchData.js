/**
 * this file is used to make any service call to fetch data
 */
import axios from 'axios';
import {config} from './../assets/config'
const FETCH_CATALOGS_PARAM=''
const FETCH_CATALOG_DETAILS = ""
const FETCH_PRODUCT_DETAILS = ""
const FETCH_ORDER_DETAILS = ""
const FETCH_CART_DETAILS = ""
let data = new FormData();

/**
 * function call to fetch catalog items
 */
export const fetchCatalogList = () => {
    data = new FormData()
    data.append('query','{Categories{ID,Name,Description}}')
    return ""
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