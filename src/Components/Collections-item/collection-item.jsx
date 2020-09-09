import React from 'react';
import './collection-item.scss'
import {connect} from 'react-redux'
import {ADD_ITEM} from '../../Redux/cart/cart.actions.js'
import Button from '../button/button'


const CollectionItem = ({item, id, addItem })=>{


  const { name, price,imgUrl} = item
  return(
      <div className='collection-item'>
      <div className='image'
      style={{backgroundImage: `url(${imgUrl})`}}
      />
      <div className='collection-footer'>
      <span className='name'> {name}</span>
      <span className='price'> #{price}</span>
      
      </div>
      <Button className='custom-button' inverted onClick={() => addItem(item)}> Add To Cart</Button>
      </div>)
}



const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(ADD_ITEM(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);