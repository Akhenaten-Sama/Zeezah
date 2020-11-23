import React from 'react';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link';






function CopyRight() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Efunkunle Olalekan
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default CopyRight