import "./styles.scss"
import React, { Component } from 'react';

class Product extends Component {
    render() { 
        const product = this.props.product;
        return (
            <div className="item-product">
                <div className="item-info-div">
                    <img src={product.image} alt="item1"></img>
                    <div className="item-name-div">
                        <p className="name-p">{product.name}</p>
                        <p className="color-p">{product.id}</p>
                    </div>
                </div>
                <p className="color-size-p">{product.color}</p>
                <p className="color-size-p">{product.size}</p>
                <div className="amount-div">
                    <p className="minus-btn">-</p>
                    <p>1</p>
                    <p className="add-btn">+</p>
                </div>
                <p className="price-p">{product.price}</p>
                <p className="cancel-btn">X</p>
            </div>
        );
    }
}
 
export default Product;