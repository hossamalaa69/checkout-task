import "./styles.scss"
import React, { Component } from 'react';
import ImageCartWhite from "../../images/cart_white.png"
import ImageDelivery from "../../images/delivery.png"
import ProductsList from "../products-list";
import ImageBackArrow from "../../images/back.png"
import ImageSendArrow from "../../images/arrow.png"

class ShippingCart extends Component {

    openPayment = () => {
        this.props.openPayment();
    }
    render() { 
        return (
            <div className="shipping-cart-div">
                <div className="div-state-shipping">
                    <p className="ship-cart-p">Shopping Cart</p>
                    <div className="div-state-imgs">
                        <img src={ImageCartWhite} alt="cart" className = "img-orange"></img>
                        <div className="thin-line"/>
                        <img src={ImageDelivery} alt="delivery"></img>                        
                    </div>
                </div>
                <div className="details-columns">
                    <p style={{textAlign: "left"}}>Product</p>
                    <p >Color</p>
                    <p >Size</p>
                    <p >Amount</p>
                    <p >Price</p>
                </div>
                <ProductsList />
                <div className="footer-div">
                    <div className="back-div">
                        <img src={ImageBackArrow} alt="Back Arrow"></img>
                        <p>Continue Shopping</p>
                    </div>
                    <div className="promo-div">
                        <input placeholder="Promo Code"></input>
                        <img src={ImageSendArrow} alt="Send Arrow"></img>
                    </div>
                    <p className="total-cost-p">Total Cost</p>
                    <p className="cost-p">$159.98</p>
                    <button className="checkout-btn" onClick={this.openPayment}>CHECKOUT</button>
                </div>
            </div>
        );
    }
}
 
export default ShippingCart;

/*
style={{backgroundColor: 'green'}}
style={{backgroundColor: 'blue'}}
style={{backgroundColor: 'red'}}
style={{backgroundColor: 'orange'}}
style={{backgroundColor: 'yellow'}}
*/