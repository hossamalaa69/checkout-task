import React, { Component } from 'react';
import ShippingCart from '../../components/shipping-cart';

class Checkout1 extends Component {
    openPayment = ()=>{
        this.props.history.push("/payment");
    }
    render() { 
        return( 
            <div>
                <ShippingCart openPayment={this.openPayment} />
            </div>
        );
    }
}
 
export default Checkout1;