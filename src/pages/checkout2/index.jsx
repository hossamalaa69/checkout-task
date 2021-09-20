import React, { Component } from 'react';
import PaymentCart from '../../components/payment-cart';
class Checkout2 extends Component {
    
    handleBackPress = ()=> {
        this.props.history.push('/');      
    }
    
    render() { 
        return (
            <div>
                <PaymentCart handleBackPress={this.handleBackPress}/>
            </div>
        );
    }
}
 
export default Checkout2;