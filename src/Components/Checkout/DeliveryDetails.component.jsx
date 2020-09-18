import React from 'react';
import FormInput from '../Form-input/Form-Input'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {Details} from '../../Redux/cart/cart.selector'
import {ADD_DETAILS} from '../../Redux/cart/cart.actions'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {createStructuredSelector} from 'reselect'




class AddressForm extends React.Component {


  

  state ={ firstName: ' ',
  lastName: ' ',
  address1: ' ',
  address2: ' ',
  city:' ',
  states:' ',
  zip:' '}
   
  



   handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target;
        this.setState({[name]: value} );
    }



  render(){
   const {SaveDetails, Details} = this.props
    const {firstName, lastName, city, states, zip,address1, address2} = this.state
      SaveDetails(this.state)
  return (


    <React.Fragment>
    <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormInput
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            value={firstName || ''}
            onChange={this.handleChange}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={lastName || ''}
            onChange={this.handleChange}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            required
            id="address1"
            name="address1"
            value={address1}
            onChange={this.handleChange|| ''}
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            value={address2 || ''}
            onChange={this.handleChange}
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput
            required
            id="city"
            name="city"
            label="City"
            value={city|| ''}
            onChange={this.handleChange}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput id="state" name="states" onChange={this.handleChange}  value={states|| ''} label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            onChange={this.handleChange}
            value={zip|| ''}
            
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12}>
        
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    
  
    
    
   
      
    </React.Fragment>
  )
    }
}

const mapDispatchToProps = dispatch => ({
  SaveDetails:item => dispatch(ADD_DETAILS(item))
})

const mapStateToProps = createStructuredSelector({
  Details: Details
})


export default connect(mapStateToProps, mapDispatchToProps)(AddressForm)
