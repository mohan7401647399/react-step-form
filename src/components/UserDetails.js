import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@mui/material/Button';

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const {values,handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title='Enter User Details'/>
          <TextField hintText='Enter Your First Name' floatingLabelFixed='First Name' onChange={handleChange('firstName')} defaultValue={values.firstName} />
          <br></br>
          <TextField hintText='Enter Your Last Name' floatingLabelFixed='Last Name' onChange={handleChange('lastName')} defaultValue={values.lastName} />
          <br></br>
          <TextField hintText='Enter Your Email' floatingLabelFixed='Email' onChange={handleChange('email')} defaultValue={values.email} />
          <br></br>
          <Button variant="contained" primary={true} style={styles.button} onClick={this.continue}>Continue</Button>
        </>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin:15
  }
}
export default UserDetails
