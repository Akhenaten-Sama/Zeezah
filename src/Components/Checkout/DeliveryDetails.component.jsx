import React from 'react';
import {useState} from '@hookstate/core'
import FormInput from '../Form-input/Form-Input'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { DetailState } from '../MyContext/hookState';



const AddressForm = ()=> {
  const state = useState(DetailState)

  const {firstName, lastName, city, states, zip,address1, address2} = state.get()
  console.log(state.firstName.get())
      



  const handleChange = event => {
    const { name, value } = event.target;
        state.set(p=>({[name]: value }));
        console.log(state[name].get())
    }

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
            onChange={handleChange}
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
            onChange={handleChange}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInput
            required
            id="address1"
            name="address1"
            value={address1}
            onChange={handleChange|| ''}
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
            onChange={handleChange}
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
            onChange={handleChange}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormInput id="state" name="state" onChange={handleChange}  value={states|| ''} label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            onChange={handleChange}
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
  );
}


export default AddressForm
