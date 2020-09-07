import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Layout.css'







const Header = () => {
    

   return (<div>
    <div className='barnav'>

    <Navbar collapseOnSelect expand="lg" bg="light" fixed='top' variant="light">
  <Navbar.Brand href="/">Zeez-Tha-Plug</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="/shop">Shop</Nav.Link>
      <Nav.Link href="/login">Login </Nav.Link>
      <Nav.Link href='/contacts'>Contact Us</Nav.Link>
    </Nav>
    <Nav.Link href="/cart"><ShoppingCartOutlinedIcon style={{color:'white'}} /></Nav.Link>
    
  </Navbar.Collapse>
</Navbar>
</div>
 
    </div>
    )
}


export default Header