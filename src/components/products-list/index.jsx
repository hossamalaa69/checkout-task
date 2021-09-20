import React, { Component } from 'react';
import ImageItem1 from "../../images/item1.png"
import ImageItem2 from "../../images/item2.png"
import Product from '../product';

class ProductsList extends Component {
    state = {
        products: [
            {name: "T-Shirt Summer Vibes", id: "#261311", size: "XL", image: ImageItem1, color: "White", price: "$89.99"},
            {name: "Basic Slim Fit T-Shirt",id: "#212315", size: "XL", image: ImageItem2, color: "Black", price: "$69.99"} 
        ]
    }   

    render() { 
        const products = this.state.products.map(product => {
            return(
                <Product 
                    key={product.id} 
                    product={product}
                />
            )
        });
    
        return (
            <div>
                {products}
            </div>
        );
    }
}
 
export default ProductsList;