import React, { Component } from 'react';
import './App.css';

export class Sibling extends Component {

    checkStrength(form) {
      console.log("checkStrength was called");
      console.log("form is: " + form);

      switch (form) {
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

    const form = this.props.form;
    const strength = this.props.strength;
    



    return (
      <div>
        <h1>You've selected: {form}</h1>
        <h2>You're strength is now {strength}</h2>
      </div>
    );
  }
}
