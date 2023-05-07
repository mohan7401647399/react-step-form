import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@mui/material/Button';

export class UserPersonal extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values,handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title='Enter User Details'/>
          <TextField hintText='Enter Your Occupation' floatingLabelFixed='Occupation' onChange={handleChange('Occupation')} defaultValue={values.Occupation} />
          <br></br>
          <TextField hintText='Enter Your City' floatingLabelFixed='City' onChange={handleChange('city')} defaultValue={values.city} />
          <br></br>
          <TextField hintText='Enter Your DOB' floatingLabelFixed='DOB' onChange={handleChange('DOB')} defaultValue={values.DOB} />
          <br></br>
          <Button variant="contained" primary={true} style={styles.button} onClick={this.continue}>Continue</Button>
          <Button variant="outlined" primary={false} style={styles.button} onClick={this.back}>Back</Button>
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
export default UserPersonal
