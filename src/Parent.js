import React, { Component } from 'react';
import './App.css';
import { Child } from './Child';
import { Sibling } from './Sibling';
import { StrInput } from './StrInput';

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {form: 'Medium', strength: 18, modStrength: 18};
    this.changeForm = this.changeForm.bind(this);
    this.checkStrength = this.checkStrength.bind(this);
    this.changeStrState = this.changeStrState.bind(this);
  }


  //passed to Child as prop
  //updates this.state.modStrength whenever size changes
  changeForm(newForm, newStrength) {
    this.setState({
      form: newForm,
      modStrength: newStrength
    });
  }


  //passed to StrInput as prop
  //reflects any changes to the character strength
  //recevies 2 arguments from StrInput.js, new strength and modified strength
  changeStrState(newStrength, mod) {
    this.setState({      
      form: this.state.form,
      strength: newStrength,
      modStrength: mod
    });

    console.log("Strength is " + this.state.strength);
  }


  //passed to and gets called by Child and strInput (prop)
  //checks argument typeof via conditional statement
  //calculates new modified strength score whenever size or strength changs
  checkStrength(argument) {
    console.log("checkStrength was called");
    console.log("form is: " + argument);
    //console.log(typeof newSize == 'string');
    
    var str = null;
    var size = null;
    
    if (typeof argument == 'string') {
      str = this.state.strength;
      size = argument;
      console.log("size changed");
    } else {
      str = argument;
      size = this.state.form;
      console.log("strength changed");
    }

    switch (size) {
      case 'Dimunitive': 
        return str-4;
        break;        
      case 'Tiny':
        return str-2;
        break;
      case 'Small':
      case 'Medium':
        return str;
        break;
      case 'Large':
        return str+4;
        break;
      case 'Huge':
        return str+6;
        break;
      default:
        return str;
        break;
    }
  }

  render() {
    return (
      <div>
        <StrInput 
          onChange = {this.changeStrState}
          changeStr = {this.checkStrength}
          strength = {this.state.strength} />
        <Child
          onChange = {this.changeForm}
          checkStrength = {this.checkStrength}/>
        <Sibling 
          form = {this.state.form} 
          modStrength ={this.state.modStrength}/>
      </div>
      );
  }
}
