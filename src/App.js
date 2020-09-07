import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage/homepage'
import Contacts from './Pages/Contact/contact'
import Header from './Components/LayOut/header'
import './App.css';
import { auth, CreateUserProfileDocument } from './Firebase/Firebase.utils';
import SignUpPage from './Pages/SignUp page/signup';
import SignInPage from './Pages/SignUp page/signin'
import StickyFooter from './Components/LayOut/Footer';
import CheckoutPage from './Pages/Checkout/checkout';
import shoppage from './Pages/ShopPage/shoppage';

function App() {
  
  const [state, setState] = useState('')

  let unsubscribefromAuth = null
  useEffect(()=>{
     unsubscribefromAuth = auth.onAuthStateChanged(async (Auth)=>{
      if(Auth){
        const userRef = await CreateUserProfileDocument(Auth);

        userRef.onSnapshot(snapShot => {
          setState({id: snapShot.id,
            ...snapShot.data()})

        })
        
      }
      setState(Auth)
    })


    return ()=> {
 unsubscribefromAuth()
    }
  },[state])
  return (
    <div>
  
    <Header />
     <Router>
     <Switch>
     
     <Route exact path ='/'  component ={Homepage}/>
     <Route exact path ='/contacts'  component ={Contacts}/>
     <Route  exact path ='/checkout'  component ={CheckoutPage}/>
     <Route  exact path ='/login'  component ={SignInPage}/>
     <Route  exact path ='/signup'  component ={SignUpPage}/>
     <Route  exact path ='/shop'  component ={shoppage}/>
     
     
      </Switch>
      </Router>
      <StickyFooter />
     
  </div>
  );
}





export default App;
