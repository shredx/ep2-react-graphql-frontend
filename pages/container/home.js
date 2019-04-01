import React, {Component} from 'react';
import HeaderComponent from '../components/header/header';
import './home.css'
import CatalogMenuComponent from '../components/catalogMenu/catalogMenu';
import ViewComponent from '../components/view/view';
/**
 * This component is the home page of shredCom App
 */
export default class HomeComponent extends React.Component {
    constructor(){
        super()
    }
    render(){
        return( <React.Fragment>
            <div className="header-container"><HeaderComponent/>
            </div>
            <div className="side-container"><CatalogMenuComponent/>
            </div>
            <div className="view-container"><ViewComponent/>
            </div>
            </React.Fragment>
            ) 
    }
}