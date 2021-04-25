import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {makeStyles, FormControlLabel} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('todos')



  const handleSubmit = (e) => {
    e.preventDefault()

    if(title && content){
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({title, content, category})
      }).then(() => {history.push('/')})
    } 
  }

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

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField 
        className={classes.field}    
        onChange={(event) => {setTitle(event.target.value)}}    
          label='Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
        />
         <TextField 
        className={classes.field}
        onChange={(event) => {setContent(event.target.value)}}          
          label='Note'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
        />


        <FormControl className={classes.field}>
        <FormLabel>Note category</FormLabel>
        <RadioGroup value={category} onChange={(e) => {setCategory(e.target.value)}}>
          <FormControlLabel control={<Radio />} value='Money' label='Money' />
          <FormControlLabel control={<Radio />} value='todo' label='todo' />
          <FormControlLabel control={<Radio />} value='reminders' label='reminders' />
          <FormControlLabel control={<Radio />} value='work' label='work' />
        </RadioGroup>
        </FormControl>

      <Button 
      type='submit' 
      color='secondary' 
      variant='contained' 
      endIcon={<KeyboardArrowRightIcon />}
      >Submit</Button>
      </form>

    </Container>
  )
}
