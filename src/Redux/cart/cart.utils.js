

export const AddItem = (cartItems, itemToadd)=> {
const existingCartItem = cartItems.find(item => item.id === itemToadd.id)

if(existingCartItem){
    return cartItems.map(
        item=> 
        item.id===itemToadd.id? {...item, quantity:item.quantity + 1}: item
        )
}
 return [ ...cartItems, { ...itemToadd, quantity: 1 } ];
}


export const RemoveItems =(cartItems, itemToremove) =>{
    const existingCartItem = cartItems.find(item =>(item.id===itemToremove.id))
    if(existingCartItem.quantity === 1) {
 return cartItems.filter(item => item!==itemToremove)
    } return cartItems.map(item=> item.id===itemToremove.id? {...item, quantity:item.quantity -1}: item)


}