import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {makeStyles} from '@material-ui/core';

export default function Create() {
  return (
    <Container>
      <Typography 
      variant='h6'
      color='textSecondary'
      component='h2'
      gutterBottom
      >
        Create a new note!
      </Typography>
      <Button 
      type='submit' 
      color='secondary' 
      variant='contained' 
      onClick={() => console.log('you clicked')}
      endIcon={<KeyboardArrowRightIcon />}
      >Submit</Button>


    </Container>
  )
}
