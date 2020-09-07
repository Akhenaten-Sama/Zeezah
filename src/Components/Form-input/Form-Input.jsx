import React from 'react';
import {TextField} from '@material-ui/core'


const FormInput = ({onChange, value, name, label, id, autoComplete}) => (
    <div>
    
    <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={onChange}
              value={value}
              id={id}
              label={label}
              name= {name}
              autoComplete={autoComplete}
              autoFocus
            />
           
    </div>
)

export default FormInput