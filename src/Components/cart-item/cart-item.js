import React from 'react';
import './cart-item.scss'

const CartItem = ({item:{imgUrl,price,name, quantity}}) => (
     <div className='cart-item'>
     <img src={imgUrl} alt='item'/>
     <div className='item-details'>
     <span className='name'>{name.toUpperCase()}</span>
     <span className='price'>{quantity} x ${price}</span>
     </div>
    </div>
)

export default CartItem