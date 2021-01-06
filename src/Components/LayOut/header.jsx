import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from '../DropDown/Dropdown'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {connect}  from 'react-redux'
import {Toggle_hidden} from '../../Redux/cart/cart.actions.js'

import './layout.scss'







const Header = ({ToggleHidden, hidden}) => {
    

   return (<div>
    <div className='barnav'>

    <Navbar collapseOnSelect expand="lg" bg="light" sticky='top' variant="light">
  <Navbar.Brand href="/">Zeez-Tha-Plug</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav " />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="/shop">Shop</Nav.Link>
      <Nav.Link href='/contacts'>Contact Us</Nav.Link>
    </Nav>
    <ShoppingCartOutlinedIcon  onClick={ToggleHidden} style={{color:'grey'}} />
    
  </Navbar.Collapse>
</Navbar>
{ hidden? null :<Dropdown /> }
{console.log(hidden)}

</div>

  
 
    </div>
    )
}


const mapDispatchToProps = (dispatch)=> ({
  ToggleHidden:()=> dispatch(Toggle_hidden())
})

const mapStatetoProps = ({cart:{hidden}}) => ({

  hidden
})

export default connect(mapStatetoProps, mapDispatchToProps)(Header)