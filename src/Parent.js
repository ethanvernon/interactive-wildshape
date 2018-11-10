import React, { Component } from 'react';
import './App.css';
import { Child } from './Child';
import { Sibling } from './Sibling';

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {form: 'Medium', strength: 18};
    this.changeForm = this.changeForm.bind(this);
    this.checkStrength = this.checkStrength.bind(this);
  }

  changeForm(newForm, newStrength) {
    this.setState({
      form: newForm,
      strength: newStrength
    });
  }

    checkStrength(newSize) {
      console.log("checkStrength was called");
      console.log("form is: " + newSize);

      switch (newSize) {
        case 'Dimunitive': 
          return 18-4;
          break;        
        case 'Tiny':
          return 18-2;
          break;
        case 'Small':
          return 18;
          break;
        case 'Medium':
          return 18;
          break;
        case 'Large':
          return 18+4;
          break;
        case 'Huge':
          return 18+6;
          break;
      }
    }

  render() {
    return (
      <div>
        <p>Your strength score is 18.</p>
        <Child
          onChange = {this.changeForm}
          checkStrength= {this.checkStrength} />
        <Sibling 
          form = {this.state.form} 
          strength ={this.state.strength}/>
      </div>
      );
  }
}
