import React from 'react';
import siteLogo from '../../../assets/e-commerce-3.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={siteLogo} alt={shredComm}></img>
    </div>
);

export default logo;
