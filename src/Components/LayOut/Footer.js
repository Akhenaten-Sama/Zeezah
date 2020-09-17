import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CopyRight from './CopyRight'




export default function StickyFooter() {

  return (
    <div className={classes.root}>
        <Container maxWidth="sm">
        <Navbar sticky="bottom" >
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <CopyRight />
          </Navbar>
        </Container>
    </div>
  );
}