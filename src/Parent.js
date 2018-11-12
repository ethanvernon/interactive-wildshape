import React, { Component } from 'react';
import './App.css';
import { Child } from './Child';
import { Sibling } from './Sibling';
import { StrInput } from './StrInput';
import { DexInput } from './DexInput';

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {form: 'Medium', strength: 18, dex: 18, modStrength: 20, modDex: 18};
    this.changeForm = this.changeForm.bind(this);
    this.checkStrength = this.checkStrength.bind(this);
    this.changeStrState = this.changeStrState.bind(this);
    this.checkDex = this.checkDex.bind(this);
    this.changeDexState = this.changeDexState.bind(this);
  }


  //passed to Child as prop
  //updates this.state.modStrength, this.dexStrength, this.form whenever size changes
  changeForm(newForm, newStrength, newDex) {
    this.setState({
      form: newForm,
      modStrength: newStrength,
      modDex: newDex
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

  //passed to DexInput as prop
  //reflects any changes to the character dex
  //recevies 2 arguments from DexInput.js, new dex and modified dex
  changeDexState(newDex, mod) {
    this.setState({      
      form: this.state.form,
      dex: newDex,
      modDex: mod
    });

    console.log("Dexterity is " + this.state.dex);
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
        return str;
        break;
      case 'Medium':
        return str+2;
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

  //passed to and gets called by Child and dexInput (prop)
  //checks argument typeof via conditional statement
  //calculates new modified dex score whenever size or dex changs
  checkDex(argument) {
    console.log("checkDex was called");
    console.log("form is: " + argument);
    //console.log(typeof newSize == 'string');
    
    var dex = null;
    var size = null;
    
    if (typeof argument == 'string') {
      dex = this.state.dex;
      size = argument;
      console.log("size changed");
    } else {
      dex = argument;
      size = this.state.form;
      console.log("dex changed");
    }

    switch (size) {
      case 'Dimunitive': 
        return dex+6;
        break;        
      case 'Tiny':
        return dex+4;
        break;
      case 'Small':
        return dex+2;
        break;
      case 'Medium':
        return dex;
        break;
      case 'Large':
        return dex-2;
        break;
      case 'Huge':
        return dex-4;
        break;
      default:
        return dex;
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
        <DexInput 
          onChange = {this.changeDexState}
          changeDex = {this.checkDex}
          dex = {this.state.dex} />
        <Child
          onChange = {this.changeForm}
          checkStrength = {this.checkStrength}
          checkDex = {this.checkDex}/>
        <Sibling 
          form = {this.state.form} 
          modStrength ={this.state.modStrength}
          modDex = {this.state.modDex}/>
      </div>
      );
  }
}
