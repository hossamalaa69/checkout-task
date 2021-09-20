import React, { Component } from 'react';
import "./styles.scss"
import LogoImage from "../../images/logo.png"
import CartImage from "../../images/cart.png"
import ProfileImage from "../../images/profile.png"
import SearchImage from "../../images/search.png"



class Navbar extends Component {
    render() { 
        return(            
            <div className="navbar">
                <div className="title">
                    <img src={LogoImage} alt="Logo" className="logo-img"></img>
                    <div className="name-div">
                        <a className="orange-text" href="/">E-</a>
                        <a className="black-text" href="/">Shop</a>
                    </div>
                </div>
                <div className="links">
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">Kids</a>
                </div>
                <div className="icons">
                    <img src={SearchImage} alt="search"></img>
                    <img src={CartImage} alt="cart"></img>
                    <img src={ProfileImage} alt="profile"></img>
                </div>
            </div>);
    }
}
 
export default Navbar;