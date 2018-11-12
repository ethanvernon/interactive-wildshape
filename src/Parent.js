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
    this.changeStr = this.changeStr.bind(this);
  }


  //gets called my Child
  //updates this.state.modStrength whenever size changes
  changeForm(newForm, newStrength) {
    this.setState({
      form: newForm,
      modStrength: newStrength
    });
  }


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


  //gets called by Child
  //calculates new modified strength score whenever size changes
  checkStrength(newSize) {
    console.log("checkStrength was called");
    console.log("form is: " + newSize);

    const str = this.state.strength;

    switch (newSize) {
      case 'Dimunitive': 
        return str-4;
        break;        
      case 'Tiny':
        return str-2;
        break;
      case 'Small':
        return str;
        break;
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

  //passed to StrInput as prop
  //checks this.state.form (size) and calculates modified strength
  changeStr(newStr) {
    const size = this.state.form;

    switch (size) {
      case 'Dimunitive': 
        return newStr-4;
        break;        
      case 'Tiny':
        return newStr-2;
        break;
      case 'Small':
        return newStr;
        break;
      case 'Medium':
        return newStr;
        break;
      case 'Large':
        return newStr+4;
        break;
      case 'Huge':
        return newStr+6;
        break;
      default:
        return newStr;
        break;
    }
  }

  render() {
    return (
      <div>
        <StrInput 
          onChange = {this.changeStrState}
          changeStr = {this.changeStr}
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
