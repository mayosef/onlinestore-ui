import Network from './network.service';
import cookie from 'react-cookies';

const CART_COOKIE_NAME = 'cart';
const CART_COOKIE_MAX_AGE =  60 * 60 * 24 * 14;


class CartService extends Network {

    add(productId, quantity) {
        let products = this.getAll();
        products.push({
            id:productId,
            qty:quantity
        })
        cookie.save(CART_COOKIE_NAME, products, {maxAge: CART_COOKIE_MAX_AGE});
    }
    remove(productId) {

    }
    clearAll() {
        cookie.save(CART_COOKIE_NAME, [] , {maxAge:CART_COOKIE_MAX_AGE})
    }
    getAll() {
        return cookie.load(CART_COOKIE_NAME) || [];
    }
}

export default new CartService();
