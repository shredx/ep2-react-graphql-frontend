import React, {Component} from 'react';
/**
 * This Component is the fixed side component of shredCom App
 */
export default class CatalogMenuItemComponent extends React.Component {
    constructor(){
        super()
 
    }
    /**
     * this function is called when any category is clicked 
     */
    updateCategoryId= () => {
        this.props.updateId(this.props.category.ID)
    }

    render(){
        return( <React.Fragment>
          <span onClick={this.updateCategoryId}>
              <a className ='nav-link' to="#" value={this.props.category.ID}>{this.props.category.Name}</a>
              </span>              
            </React.Fragment>
            ) 
    }
}