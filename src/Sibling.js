import React, { Component } from 'react';
import './App.css';

export class Sibling extends Component {

  render() {

    const form = this.props.form;
    const strength = this.props.modStrength;
    const dexterity = this.props.modDex;
    const modAA = this.props.modAA;
    const modCMBD = this.props.modCMBD;    
    const modMab = this.props.modMab;
    const secondaryMab = parseInt(this.props.modMab)-5;
    
    return (
      <div>
        <h1>You've selected: {form}</h1>
        <p>You're strength is now {strength}</p>        
        <p>You're dexterity is now {dexterity}</p>        
        <p>You're size modifier to attack and AC is {modAA}</p>
        <p>You're size modifier to CMB and CMD is {modCMBD}</p>        
        <p>You're melee attack bonus to primary attacks is {modMab}</p>
        <p>You're melee attack bonus to secondary attacks is {secondaryMab}</p>
      </div>
    );
  }
}
