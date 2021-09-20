import React, { Component } from 'react';
import "./styles.scss"

class ProductPreview extends Component {
    render() { 
        const product = this.props.product;
        return (
                <div className="product-cart-preview">
                    <div className="avatar-item-div"> 
                        <img src={product.image} alt="item1"></img>
                        <div className="item-name-div">
                            <p className="name-p">{product.name}</p>
                            <p className="color-p">{product.id}</p>
                        </div>
                    </div>
                    <p className="item-price-p">{product.price}</p>
                </div>
        );
    }
}
 
export default ProductPreview;