import React from 'react'
import { Grid,TextField,Button} from '@mui/material'

export const Form= ()=> {
  return (
    <div className='id'>
      <h1>Form</h1>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <TextField  label="Name:-"/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="Last Name:-"/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label= "Fathers Name:-"/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="Time:-" type={"time"}/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="Date:-" type={"date"}/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="Mobile No:-" type={"number"}/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="Email:-" type={"email"}/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="Password:-" type={"password"}/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="Address:-"/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="City:-"/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="Pincode:-" type={"numbers"}/>
          </Grid>
          <Grid item xs={4}>
            <TextField  label="State:-"/>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Button variant='contained'color='primary'>Sumbit</Button>
          </Grid>
        </Grid>
    </div>
  )
}
