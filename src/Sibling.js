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
    const primDamage = this.props.meleeDamage;
    const secondDamage = this.props.meleeDamageSecondary;
    const CMB = this.props.CMB;
    const CMD = this.props.CMD;
    const naturalArmor = this.props.naturalArmor;
    const AC = this.props.AC;
    
    return (
      <div>
        <h1>You've selected: {form}</h1>
        <p>Your strength is now {strength}</p>        
        <p>Your dexterity is now {dexterity}</p>        
        <p>Your size modifier to attack and AC is {modAA}</p>
        <p>Your size modifier to CMB and CMD is {modCMBD}</p>
        <p>Your natural armor bonus is {naturalArmor}</p>
        <br />
        <p>Your new CMB is {CMB}</p>
        <p>Your new CMD is {CMD}</p>
        <p>Your melee attack bonus to primary attacks is {modMab}, and {primDamage} damage</p>
        <p>Your melee attack bonus to secondary attacks is {secondaryMab}, and {secondDamage} damage</p>
        <p>Your armor class is {AC}</p>
      </div>
    );
  }
}
