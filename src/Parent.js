import React, { Component } from 'react';
import './App.css';
import { Child } from './Child';
import { Sibling } from './Sibling';
import { StrInput } from './StrInput';

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {form: 'Medium', strength: 18};
    this.changeForm = this.changeForm.bind(this);
    this.checkStrength = this.checkStrength.bind(this);
    this.changeStrState = this.changeStrState.bind(this);
    this.changeStr = this.changeStr.bind(this);
  }

  changeForm(newForm, newStrength) {
    this.setState({
      form: newForm,
      strength: newStrength
    });
  }

  changeStrState(newStrength) {
    this.setState({      
      form: this.state.form,
      strength: newStrength
    });

    console.log("Strength is " + this.state.strength);
  }

  checkStrength(newSize) {
    console.log("checkStrength was called");
    console.log("form is: " + newSize);

    const str = parseInt(document.getElementById('score').value);

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
    }
  }

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
          strength ={this.state.strength}/>
      </div>
      );
  }
}
