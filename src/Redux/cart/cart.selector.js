import {createSelector} from 'reselect'


const selectCart = state => state.cart
export const CartItems = createSelector([selectCart], cart => cart.cartItems)
export const Hidden = createSelector([selectCart], cart => cart.hidden)


export const selectCartTotal = createSelector(
    [CartItems],
    (cartItems) =>
    cartItems.reduce((acc, cartItem) => acc +  cartItem.quantity * cartItem.price,  0)


)