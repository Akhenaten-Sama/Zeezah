import './cart.types'
import CartActionTypes from './cart.types';
import { AddItem, RemoveItems} from './cart.utils';

const INITIAL_STATE = {
    cartItems:[],
    hidden:true

}


const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:AddItem(state.cartItems, action.payload)
            }
            case CartActionTypes.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems:RemoveItems(state.cartItems, action.payload)
                }
                case CartActionTypes.CLEAR_CART:
                    return{
                        ...state,
                        cartItems:[]
                    }
                    case CartActionTypes.TOGGLE_HIDDEN:
                        return{
                            ...state,
                            hidden:!state.hidden
                        }
    
        default:
           return state;
    }
}

export default cartReducer