import React from 'react';
import CartService from '../../services/cart.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,  } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ButtonCart.scss'
import { connect } from 'react-redux';

class ButtonCart extends React.Component {
    render() {
        return(
            <div className="CartButton badge badge-light">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" className="icon"/>
                 {this.props.itemsCount}
                <div>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon" />
                </div>
            </div>
        ) 
    }
}
const mapStateToProps = (state) => {
    return {
        itemsCount:state.cartItemsCount
    }
}

export default connect(mapStateToProps)(ButtonCart);