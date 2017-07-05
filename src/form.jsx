import React, { Component } from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import './form.css';

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    };
    
  }
  
  updateState (event, key){
    this.setState({[key]: event.target.value});
  }
  
  updateSelect = (event, index, value) => {
  this.setState({color: value});
  }
  
  handleSubmit(event){
    console.log('submitted: ', this.state);
    event.preventDefault();
  }
  
  render(){
    return (
      <div>
        <br/><br/>
        <form onSubmit={event => this.handleSubmit(event)}>
          <Card className="md-card">
            <CardTitle title="Add Contact"/>
            <CardText>
              <TextField floatingLabelText="Name" defaultValue={this.state.name} onChange={event => this.updateState(event, 'name')}/>
              <br/><br/>
              <TextField floatingLabelText="Email" defaultValue={this.state.email} onChange={event => this.updateState(event, 'email')}/>
              <br/><br/>
              <TextField floatingLabelText="Phone Number" defaultValue={this.state.phone} onChange={event => this.updateState(event, 'phone')}/>
              <br/><br/>
              <TextField floatingLabelText="Address" defaultValue={this.state.address} onChange={event => this.updateState(event, 'address')}/>
              <br/><br/>
              <TextField floatingLabelText="City" defaultValue={this.state.city} onChange={event => this.updateState(event, 'city')}/>
              <br/><br/>
              <TextField floatingLabelText="State" defaultValue={this.state.state} onChange={event => this.updateState(event, 'state')}/>
              <br/><br/>
              <TextField floatingLabelText="Zip Code" defaultValue={this.state.zip} onChange={event => this.updateState(event, 'zip')}/>
              <br/><br/>
            </CardText>
            <CardActions>
              <RaisedButton type="submit" label="Submit" primary={true}/>
            </CardActions>
          </Card>
        </form>
      </div>
    );
  }
}

export default ContactForm