import React, { Component } from 'react';
import UserDetails from './UserDetails';
import UserPersonal from './UserPersonal';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    //              first step
    state = 
    {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        Occupation: '',
        city: '',
        DOB: ''
    }
//          Next step
nextStep = () => {
    const {step} = this.state;
    this.setState({
        step: step + 1
    });
}
//          Prev step
prevStep = () => {
    const {step} = this.state;
    this.setState({
        step: step - 1
    });
}
//  handle fields change
handleChange = input => e => {
    this.setState({[input]: e.target.value})
}
  render() {
    const {step} = this.state;
    const { firstName,lastName,email,Occupation, city,DOB} = this.state;
    const values = {firstName,lastName,email,Occupation, city,DOB}
    switch(step) {
        case 1:
            return (
                <UserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>
                )
        case 2:
            return (
                <UserPersonal nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values}/>
            )
        case 3:
            return (
                <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values}/>
            )
        case 4:
            return <Success/>
    }


  }
}

export default UserForm
