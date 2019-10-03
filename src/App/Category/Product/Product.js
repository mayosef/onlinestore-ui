import React from 'react';
import ProductService from '../../services/product.service';
import './Product.scss'
import CartService from '../../services/cart.service';
import Categories from '../../Homepage/Categories/Categories';
import productService from '../../services/product.service';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }
  componentDidMount() {
    ProductService.getById(this.props.match.params.id)
      .then(res => res.json())
      .then(product => this.setState({product}))
  }
            
  addToCart() {
    CartService.add(this.state.product.id, 1)
  }
    render() {
    return (
      // <div className="container">
      //   <div className="header-product">
      //       <h2>product page</h2>
      //   </div>
      //   <div className="product-card">
      //       <div className="product-title">
      //         {this.state.product.title}
      //       </div>
      //       <div className="product-image">
      //           <img src={this.state.product.thumbnailUrl} />
      //       </div>
      //       <div className="description">
      //         {this.state.product.description}
      //       </div>
      //       <div className="produ">
      //         <button className="add-to-cart" onClick={this.addToCart.bind(this)}>Add to cart</button>
      //         <input type="number" />
      //       </div>
      //   </div>
      // </div>
      <div className="product-page">
         <div className="categories-sidebar">
            <Categories className="categories"/>
        </div>
      <div className="container">
       
        <div className="left-side-product">
          <img src={this.state.product.thumbnailUrl} />
        </div>
        <div className="right-side-product">
            <div className="product-description">
              <div className="product-category">Category title</div>
              <div className="product-title">{this.state.product.title}</div>
              <div className="description">{this.state.product.description}</div>
              {/* <div><img src={'http://localhost:4000/' + product.image} /></div> */}
            </div>
            <div className="product-price">
                <div className="price">{this.state.product.price}$</div>
                <button className="add-to-cart" onClick={this.addToCart.bind(this)}>Add to cart</button>
            </div>
        </div>
      </div>
      </div>
    )
    }
}
 export default Product;
