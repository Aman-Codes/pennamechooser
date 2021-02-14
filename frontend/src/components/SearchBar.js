import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Container >
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="PenName" variant="outlined" />
      </form>
    </Container>
  );
}