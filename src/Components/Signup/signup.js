import React, {useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import FormInput from '../Form-input/Form-Input';
import {auth, CreateUserProfileDocument} from '../../Firebase/Firebase.utils'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  


  const handleSubmit = async (event) =>{
    event.preventDefault()
      if(password!==confirmPassword){
          alert('password do not match')
      }
try {
    const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await CreateUserProfileDocument(user, {displayName})
      setEmail('')
      setDisplayName('')
      setPassword('')
      setConfirmPassword('')
    
} catch (error) {
    setError(error.message)
    
}
      
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
         
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
          
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormInput 
              name='displayName'
              value ={displayName}
              onChange= {(event) => {
                const {value } = event.target;
                setDisplayName(value);   
            }}
              id='displayName'
            label='Display Name'
            autoComplete= 'Display Name'
            
              />

            </Grid>
            <Grid item xs={12} sm={6}>
            <FormInput
            id='email'
            label='Email Address'
            autoComplete= 'Email Address'
            name='email'
            value={email}
            onChange={(event) => {
                const {value } = event.target;
                setEmail(value);   
            }} />
            </Grid>
            <Grid item xs={12}>
            <FormInput
            id='password'
            label='Password'
            autoComplete= 'Password'
            name='password'
            onChange={(event) => {
                const {value } = event.target;
                setPassword(value);   
            }} 
            value={password}/>
            </Grid>
            <Grid item xs={12}>
            <FormInput 
            id='confirm-password'
            label='Confirm Password'
            autoComplete= 'Confirm Password'
            name='email'
            value={confirmPassword}
            onChange={(event) => {
                const {value } = event.target;
                setConfirmPassword(value);   
            }}/>
            </Grid>
            <Grid>
            {error?<Box color='red' xs={12} sm={6}>
          {error}!!!
        </Box>:null}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
                
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
          
            Sign Up
  
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


