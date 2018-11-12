import React, { Component } from 'react';
import './App.css';

export class Sibling extends Component {

  render() {

    const form = this.props.form;
    const strength = this.props.modStrength;
    const dexterity = this.props.modDex;
    
    return (
      <div>
        <h1>You've selected: {form}</h1>
        <h2>You're strength is now {strength}</h2>        
        <h2>You're dexterity is now {dexterity}</h2>
      </div>
    );
  }
}
