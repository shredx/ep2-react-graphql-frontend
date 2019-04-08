/**
 * This file is used to make service request
 */
import {config} from '../assets/config'
import axios from'axios'
//base url formation as endpoint is always the same in case of graphql
const graphQLBaseUrl = axios.create({
    baseURL: config.BASE_URL,
})
//making an axios call
export var makeHttpRequest = (data) => {
    return graphQLBaseUrl.post('',{query: data})
}