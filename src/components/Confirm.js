import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Button from '@mui/material/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values: { firstName,lastName,email, Occupation, city, DOB } } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title='Confirm User Data'/>
          <List>
            <ListItem primaryText='First Name' secondaryText={firstName}/>
            <ListItem primaryText='Last Name' secondaryText={lastName}/>
            <ListItem primaryText='Email' secondaryText={email}/>
            <ListItem primaryText='Occupation' secondaryText={Occupation}/>
            <ListItem primaryText='City' secondaryText={city}/>
            <ListItem primaryText='DOB' secondaryText={DOB}/>
          </List>
          <br></br>
          <Button variant="contained" primary={true} style={styles.button} onClick={this.continue}>Confirm & Continue</Button>
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
export default Confirm
