import React, { Component } from 'react';
import ImageItem1 from "../../images/item1.png"
import ImageItem2 from "../../images/item2.png"
import ProductPreview from '../product-preview';

class ProductsPreviewGrid extends Component {
    state = {
        products: [
            {name: "T-Shirt Summer Vibes", id: "#261311", image: ImageItem1, price: "$89.99"},
            {name: "Basic Slim Fit T-Shirt",id: "#212315", image: ImageItem2, price: "$69.99"} 
        ]
    }   

    render() { 
        const products = this.state.products.map(product => {
            return(
                <ProductPreview 
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
 
export default ProductsPreviewGrid;
