import cartService from '../services/cart.service';

const initialState = {
    cartItemsCount: cartService.getAll().length
}

function reducers(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            state.cartItemsCount = cartService.getAll().length;
            break;
        default: 
            return state;
    }
    return state;
}

export default reducers;