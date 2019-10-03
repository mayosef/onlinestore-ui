import React from 'react';
import CartService from '../services/cart.service'
import ProductService from '../services/product.service';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[]
        }
    }
    componentDidMount() {
        this.loadCart();
    }
    loadCart() {
        const cartProducts = CartService.getAll();
        const ids = cartProducts.map(product => product.id)
          ProductService.getByIds(ids)
            .then(res => res.json())
            .then(products => {
                products = this.addQuantities(products, cartProducts)
                this.setState({products})
            })
                .catch(err => console.log(err));
    }
    addQuantities(products, cartProducts) {
        let cartObj = {};
        cartProducts.forEach(product => cartObj[product.id] = product.qty)
        products.forEach(product =>  product.qty = cartObj[product.id])
        return products;
    }
    calcTotal(products) {
        let total = 0;
        products.forEach(product => {
            total += product.qty * product.price;
        })
        return total;
    }
    remove2(productId) {
        CartService.remove(productId)
        this.loadCart();
    }
    render() {
    return (
            <div>
                <h2>CART PAGE</h2>
                <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Sub-total
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) => { 
                            return <tr key={index}>
                                <td><strong>
                                    {product.title}
                                    </strong>
                                </td>
                                <td>$
                                    {product.price.toFixed(2)}
                                </td>
                                <td><sub>x</sub>
                                    {product.qty}
                                </td>
                                <td>
                                    {(product.qty * product.price).toFixed(2)}
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={this.remove2.bind(this, product.id)}>X</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3"></td>
                            <td><strong>Total:</strong> ${this.calcTotal(this.state.products).toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
                </div>
            </div>
            )
        }
    }
    export default Cart;
