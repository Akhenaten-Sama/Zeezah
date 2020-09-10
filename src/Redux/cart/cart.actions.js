import './cart.types'
import CartActionTypes from './cart.types'

export const ADD_ITEM =(item)=> ({
    type:CartActionTypes.ADD_ITEM,
    payload:item
})


export const REMOVE_ITEM =(item)=> ({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
})

export const CLEAR_CART =(item)=> ({
    type:CartActionTypes.CLEAR_CART,
    payload:item
})


export const Toggle_hidden = ()=>({
    type:CartActionTypes.TOGGLE_HIDDEN
})

