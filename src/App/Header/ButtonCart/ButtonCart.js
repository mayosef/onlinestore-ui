import React from 'react';
import CartService from '../../services/cart.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,  } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ButtonCart.scss'
class ButtonCart extends React.Component {
    productCount() {
        return CartService.getAll().length;
    }
    render() {
        return(
            <div className="CartButton badge badge-light">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" className="icon"/>
                 {this.productCount()}
                <div>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon" />
                </div>
            </div>
        ) 
    }
}


export default ButtonCart;