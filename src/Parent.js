import React, { Component } from 'react';
import './App.css';
import { Child } from './Child';
import { Sibling } from './Sibling';
import { StrInput } from './StrInput';
import { DexInput } from './DexInput';
import { BabInput } from './BabInput';
import { InitiativeInput } from './InitiativeInput';
import { ResistanceInput } from './ResistanceInput';

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'Medium', 
      strength: 18, 
      dex: 12, 
      modStrength: 20, 
      modDex: 12, 
      modAA: 0, 
      modCMBD: 0, 
      bab: 7, 
      modMAB: 12, 
      meleeDamage: 5, 
      meleeDamageSecondary: 2, 
      CMB: 12, 
      CMD: 23,
      naturalArmor: 2,
      armorClass: 13,
      touchAC: 11,
      flatfootAC: 12,
      initiative: 3,
      modInit: 3,
      initBonus: 2,
      resBonus: 3,
      refBase: 3,
      refSave: 7
    };
    this.changeForm = this.changeForm.bind(this);
    this.checkStrength = this.checkStrength.bind(this);
    this.changeStrState = this.changeStrState.bind(this);
    this.checkDex = this.checkDex.bind(this);
    this.changeDexState = this.changeDexState.bind(this);
    this.checkSizeMod = this.checkSizeMod.bind(this);
    this.checkMabOnBabChange = this.checkMabOnBabChange.bind(this);
    this.checkMabOnSizeChange = this.checkMabOnSizeChange.bind(this);
    this.changeBabState = this.changeBabState.bind(this);
    this.checkNaturalArmor = this.checkNaturalArmor.bind(this);
    this.changeInitState = this.changeInitState.bind(this);
  }


  //passed to Child as prop
  //updates this.state.modStrength, this.dexStrength, this.form whenever size changes
  changeForm(newForm, newStrength, newDex, newSizeModAA, newSizeModCMBD, newMAB, naturalArmor) {

    const dexMod = Math.floor((newDex-10)/2);
    const strMod = Math.floor((newStrength-10)/2);

    this.setState({
      form: newForm,
      modStrength: newStrength,
      modDex: newDex,
      modAA: newSizeModAA,
      modCMBD: newSizeModCMBD,
      modMAB: newMAB,
      meleeDamage: strMod,
      meleeDamageSecondary: strMod < 0 ? strMod : Math.floor(strMod/2),
      CMB: newSizeModCMBD + (newForm == "Tiny" || newForm == "Dimunitive" ? dexMod : strMod) + this.state.bab,
      CMD: 10 + newSizeModCMBD + strMod + dexMod + this.state.bab,
      naturalArmor: naturalArmor,      
      armorClass: 10 + newSizeModAA + dexMod + naturalArmor,
      touchAC: 10 + newSizeModAA + dexMod,
      flatfootAC: 10 + newSizeModAA + naturalArmor,
      modInit: newDex,      
      refSave: this.state.resBonus + this.state.refBase + dexMod
    });
  }


  //passed to StrInput as prop
  //reflects any changes to the character strength
  //recevies 2 arguments from StrInput.js, new strength and modified strength
  changeStrState(newStrength, mod) {
    const dexMod = Math.floor((this.state.modDex-10)/2);
    const strMod = Math.floor((mod-10)/2);

    this.setState({      
      strength: newStrength,
      modStrength: mod,
      modMAB: this.state.bab + this.state.modAA + strMod,
      meleeDamage: strMod,
      meleeDamageSecondary: strMod < 0 ? strMod : Math.floor(strMod/2),
      CMB: this.state.modCMBD + (this.state.form == "Tiny" || this.state.form == "Dimunitive" ? dexMod : strMod) + this.state.bab,
      CMD: 10 + this.state.modCMBD + strMod + dexMod + this.state.bab
    });

    console.log("Strength is " + this.state.strength);
  }

  //passed to DexInput as prop
  //reflects any changes to the character dex
  //recevies 2 arguments from DexInput.js, new dex and modified dex
  changeDexState(newDex, mod) {
    const dexMod = Math.floor((mod-10)/2);
    const strMod = Math.floor((this.state.modStrength-10)/2);

    this.setState({
      dex: newDex,
      modDex: mod,
      CMB: this.state.modCMBD + (this.state.form == "Tiny" || this.state.form == "Dimunitive" ? dexMod : strMod) + this.state.bab,
      CMD: 10 + this.state.modCMBD + strMod + dexMod + this.state.bab,
      armorClass: 10 + this.state.modAA + dexMod + this.state.naturalArmor,
      touchAC: 10 + this.state.modAA + dexMod,
      modInit: dexMod + this.state.initBonus,
      refSave: this.state.resBonus + this.state.refBase + dexMod
    });

    console.log("Dexterity is " + this.state.dex);
  }

  //passed to BabInput as prop
  //reflects any changes to the character bab
  //recevies 2 arguments from BabInput.js, new bab and modified bab
  changeBabState(newBab, mod) {
    const dexMod = Math.floor((this.state.modDex-10)/2);
    const strMod = Math.floor((this.state.modStrength-10)/2);

    this.setState({
      bab: newBab,
      modMAB: mod,
      CMB: this.state.modCMBD + (this.state.form == "Tiny" || this.state.form == "Dimunitive" ? dexMod : strMod) + this.state.bab,
      CMD: 10 + this.state.modCMBD + strMod + dexMod + this.state.bab

    });

    console.log("modified melee attack bonus is " + this.state.modMAB);
  }

  //passed to InitiativeInput as prop
  //reflects any changes to initiative bonus
  changeInitState(newInit) {
    this.setState({
      initBonus: newInit,
      modInit: parseInt(newInit) + Math.floor((this.state.modDex-10)/2)
    })
  }

  //passed to ResistanceInput as prop
  //reflects any changes to resistance bonus aka cloak of resistance
  changeResState(newRes) {
    this.setState({
      resBonus: newRes,
      refBase: Math.floor((this.state.modDex-10)/2),
      refSave: newRes + Math.floor((this.state.modDex-10)/2) + this.state.refBase
    })
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
  //calculates new modified dex score whenever size or dex changes
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

  //this is passed to Child.js as a prop
  //it takes argument of size and returns the size modifier to AC and attack
  //this is also called for modifier to CMB and CMD but the result is multiplied by negative 1
  checkSizeMod(size) {
    switch (size) {
      case 'Dimunitive': 
        return 4;
        break;        
      case 'Tiny':
        return 2;
        break;
      case 'Small':
        return 1;
        break;
      case 'Medium':
        return 0;
        break;
      case 'Large':
        return -1;
        break;
      case 'Huge':
        return -2;
        break;
      default:
        return 0;
        break;
    }
  }

  //passed to and gets called by BabInput (prop)
  //calculates new modified bab score whenever bab changes
  checkMabOnBabChange(argument) {
    console.log("checkMabOnBabChange was called");
    console.log("bab is: " + argument);
    return argument+this.state.modAA+Math.floor((this.state.modStrength-10)/2);
  }

  //passed to and gets called by Child (prop)
  //calculates new modified bab score whenever size changes
  //takes size modifier to attack and AC as argument and modified strength from size change
  checkMabOnSizeChange(argument, modStr) {
    console.log("checkMabOnSizeChange was called");
    console.log("modifier to attack and ac is: " + argument);
    return argument+this.state.bab+Math.floor((modStr-10)/2);
  }

  //this is passed to Child.js as a prop
  //it takes argument of size and returns the size modifier to AC and attack
  //this is also called for modifier to CMB and CMD but the result is multiplied by negative 1
  checkNaturalArmor(size) {
    switch (size) {
      case 'Dimunitive':      
      case 'Tiny':
      case 'Small':
        return 1;
        break;
      case 'Medium':
        return 2;
        break;
      case 'Large':
        return 4;
        break;
      case 'Huge':
        return 6;
        break;
      default:
        return 2;
        break;
    }
  }

  render() {
    return (
      <div>
      <ResistanceInput 
          onChange = {this.changeResState}
          resBonus = {this.state.resBonus} />
      <InitiativeInput 
          onChange = {this.changeInitState}
          initBonus = {this.state.initBonus} />
        <BabInput 
          onChange = {this.changeBabState}
          changeBab = {this.checkMabOnBabChange}
          bab = {this.state.bab} />
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
          checkDex = {this.checkDex}
          checkSizeMod = {this.checkSizeMod}
          checkMab = {this.checkMabOnSizeChange}
          checkNA = {this.checkNaturalArmor}/>
        <Sibling 
          form = {this.state.form} 
          modStrength ={this.state.modStrength}
          modDex = {this.state.modDex}
          modAA = {this.state.modAA}
          modCMBD = {this.state.modCMBD}          
          modMab = {this.state.modMAB}
          meleeDamage = {this.state.meleeDamage}
          meleeDamageSecondary = {this.state.meleeDamageSecondary}
          CMB = {this.state.CMB}
          CMD = {this.state.CMD}
          naturalArmor = {this.state.naturalArmor}
          AC = {this.state.armorClass}
          initiative = {this.state.modInit}
          ffAC = {this.state.flatfootAC}
          touchAC = {this.state.touchAC}
          refSave = {this.state.refSave}
          />
      </div>
      );
  }
}
