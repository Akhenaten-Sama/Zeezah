import React from 'react';
import CollectionItem from '../Collections-item/collection-item'
import './shopDisplay.scss'

const ShopDisplay = ({items, title})=> {
        
    return(<div className='collection-page'>
    <h2 className='title' >{title.toUpperCase()}</h2>
    <div className='items'>
    {items.map(item => (
        <CollectionItem id={item.id} item={item} />
    ))}
    </div>
        
    </div>)
}

 export default ShopDisplay