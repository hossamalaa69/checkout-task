import "./styles.scss"
import React, { Component } from 'react';
import ImageCartOrange from '../../images/cart_orange.png'
import ImageShipWhite from '../../images/shipping_white.png'
import ImagePay1 from '../../images/pay1.png'
import ImagePay2 from '../../images/pay2.png'
import ImagePay3 from '../../images/pay3.png'
import ImagePay4 from '../../images/pay4.png'
import ImagePay5 from '../../images/pay5.png'
import ImagePay6 from '../../images/pay6.png'

import ImageDelivery1 from '../../images/del1.png'
import ImageDelivery2 from '../../images/del2.png'
import ImageDelivery3 from '../../images/del3.png'
import ImageDelivery4 from '../../images/del4.png'
import ProductsPreviewGrid from "../product-preview-grid";

import ImageShipping from '../../images/shipping_black.png'
import ImageBackArrow from "../../images/back.png"


class PaymentCart extends Component {
    render() { 
        return (
            <div className="payment-cart-div">
                <div className="state-payment-div">
                    <p className="pay-cart-p">Shipping and Payment</p>
                    <div className="div-state-pay-imgs">
                        <img src={ImageCartOrange} alt="cart" className = "img-orange-border"></img>
                        <div className="thin-line"/>
                        <img src={ImageShipWhite} alt="delivery" className="img-orange-white" ></img>
                    </div>
                </div>
                <div className="grid-shipping">
                    <div className="column1">
                        <div className="user-managment-div">
                            <button className="btn-login">LOG IN</button>
                            <button className="btn-signup">SIGN UP</button>
                        </div>
                        <div className="inputs-div">
                            <p className="header-inputs">Shipping information</p>
                            <div className="buttons-grid">
                                <div className="rounded-input"><input placeholder="Email"></input></div>
                                <div className="rounded-input"><input placeholder="Address"></input></div>
                                <div className="rounded-input"><input placeholder="Full Name"></input></div>
                                <div className="rounded-input"><input placeholder="City"></input></div>
                                <div className="rounded-input"><input placeholder="Last Name"></input></div>
                                <div className="rounded-input"><input placeholder="Postal Code / ZIP"></input></div>
                                <div className="rounded-input"><input placeholder="Phone Number"></input></div>
                                <div className="rounded-input"><input placeholder="Poland"></input></div>
                            </div>
                        </div>
                    </div>
                    <div className="column2">
                        <p className="header-inputs">Payment method</p>
                        <div className="grid-payment-method">
                            <div className="rounded-div-payment"><img src={ImagePay1} alt="Pay1"></img></div>
                            <div className="rounded-div-payment"><img src={ImagePay2} alt="Pay2"></img></div>
                            <div className="rounded-div-payment"><img src={ImagePay3} alt="Pay3"></img></div>
                            <div className="rounded-div-payment"><img src={ImagePay4} alt="Pay4"></img></div>
                            <div className="rounded-div-payment"><img src={ImagePay5} alt="Pay5"></img></div>
                            <div className="rounded-div-payment"><img src={ImagePay6} alt="Pay6"></img></div>
                        </div>
                        <p className="header-delivery-methods">Delivery method</p>
                        <div className="grid-delivery-method">
                            <div className="rounded-div-delivery">
                                <img src={ImageDelivery1} alt="Pay1"></img>
                                <p>$20.00</p>
                            </div>
                            <div className="rounded-div-delivery">
                                <img src={ImageDelivery2} alt="Pay2"></img>
                                <p>$12.00</p>
                            </div>
                            <div className="rounded-div-delivery">
                                <img src={ImageDelivery3} alt="Pay3"></img>
                                <p>$15.00</p>
                            </div>
                            <div className="rounded-div-delivery">
                                <img src={ImageDelivery4} alt="Pay4"></img>
                                <p>$10.00</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="column3">
                        <p className="header-your-cart">Your cart</p>
                        <ProductsPreviewGrid />
                        <div className="cost-order-div">
                            <div className="rounded-cost-div">
                                <p className="total-cost-order-p">Total Cost</p>
                                <p className="cost-order-p">$159.98</p>
                            </div>
                            <div className="delivery-cost-div">
                                <img src={ImageShipping} alt="Shipping"></img>
                                <p>You are <b>$30,02</b> away from free shipping!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-payment-cart">
                    <div className="back-div">
                        <img src={ImageBackArrow} alt="Back Arrow"></img>
                        <p>Back</p>
                    </div>
                    <div className="btns-footer">
                        <button className="continue-shopping-btn">Continue shopping</button>
                        <button className="proceed-btn">Proceed to payment</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PaymentCart;