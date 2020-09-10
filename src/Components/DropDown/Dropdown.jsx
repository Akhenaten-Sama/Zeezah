import React from 'react';
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item'
import {withRouter, useHistory} from 'react-router-dom'
import {CartItems} from '../../Redux/cart/cart.selector.js'
import {Toggle_hidden} from '../../Redux/cart/cart.actions.js'
import Button from '../button/button'
import './Dropdown.scss'

const Dropdown=({CartItems, dispatch})=> {
    let history = useHistory()

 return(
    
    <div className='dropdown'>
     <div className='cartItems'>
     { CartItems.length?
        CartItems.map(Item=>(

            <CartItem key={Item.id} item={Item} />
        ))
        : <div className='empty-message'> Cart empty</div>

    }

    


     
     </div>
     <Button onClick={
        ()=> {history.push('/checkout')
        dispatch(Toggle_hidden())}
        }>CHECKOUT </Button>
    
        </div>
)


}
    


const mapStateToProps = (state)=>({
    CartItems:CartItems(state)
})

export default withRouter(connect (mapStateToProps)(Dropdown))