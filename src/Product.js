import React from 'react';
import ProductService from './services/product.service';

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
            
    render() {
    return (
        <div>
          {this.state.product.title}
          {this.state.product.price}

        </div>
    )
    }
}
 export default Product;
