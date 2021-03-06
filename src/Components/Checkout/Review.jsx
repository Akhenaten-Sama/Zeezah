
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CartItems, selectCartTotal, Details}from '../../Redux/cart/cart.selector'
import {createStructuredSelector}  from 'reselect'
import {ADD_ITEM, REMOVE_ITEM} from "../../Redux/cart/cart.actions"
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { ListItemAvatar, Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: "2rem",
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },

  arrow:{
    cursor:"pointer",
    paddingLeft:"16px",
    paddingRight:"16px",
  }
}));

 function Review({items, Total, Details, Plus, Minus}) {
  const classes = useStyles();
  const {firstName,lastName, city, states, zip,address1, address2} = Details
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {items.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
           <ListItemAvatar>
           <Avatar src = {`${product.imgUrl}`} className={classes.large} />
           </ListItemAvatar>
            <ListItemText primary={product.name} secondary={product.desc} />
            <ListItemText primary="&#10094;" className={classes.arrow} secondary={product.desc} onClick={()=>Minus(product)}/>
            <ListItemText primary={product.quantity} secondary={product.desc} />
            <ListItemText primary="&#10095;" className={classes.arrow} secondary={product.desc} onClick={()=>Plus(product)} />

            <Typography variant="body2"> #{product.price}</Typography>
          
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            #{Total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
          <Typography gutterBottom>{`${address1} ${address2}, ${city} ${states}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  items:CartItems,
  Total: selectCartTotal,
  Details:Details,
  
})

const mapDispatchToProps = dispatch => ({
  Plus: item => dispatch(ADD_ITEM(item)),
  Minus: item => dispatch(REMOVE_ITEM(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)