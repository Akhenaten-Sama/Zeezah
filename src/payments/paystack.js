import React from 'react';
import { PaystackConsumer} from 'react-paystack';
import Button from '../../components/button/button'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Clear_Cart} from '../../Redux/cart/cart.actions'
import '../../Redux/cart/cart.selectors'



 const Paystack = ({Total, history, dispatch, clearCart}) => {
   const Amount = Total * 100
   const  config = {
        reference: (new Date()).getTime(),
        email: "efunkunleolalekan@gmail.com",
        amount: Amount,
        publicKey: 'pk_test_3377c06ccf888dcadc484592f28e72cd8eaa57a9',
         onSuccess:()=> {history.push('/')
        }
    
        
        

    };

    
    
    return (
        <div>
        <PaystackConsumer {...config} >
        {({initializePayment}) => <Button onClick={() => {initializePayment()
            clearCart()}
       } >Pay Now</Button>}
    </PaystackConsumer>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    clearCart: () => dispatch(Clear_Cart())
})

export default  withRouter(connect(null, mapDispatchToProps)(Paystack))
 