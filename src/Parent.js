import React, { Component } from 'react';
import './App.css';
import { Child } from './Child';
import { Sibling } from './Sibling';
import { StrInput } from './StrInput';
import { DexInput } from './DexInput';
import { BabInput } from './BabInput';
import { InitiativeInput } from './InitiativeInput';
import { ResistanceInput } from './ResistanceInput';
import { AmuletInput } from './AmuletInput';
import { RingOfProtInput } from './RingOfProtInput';
import { BarkskinInput } from './BarkskinInput';
import { PrismInput } from './PrismInput';
import { MageArmorInput } from './MageArmorInput';

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
      armorClass: 15,
      touchAC: 13,
      flatfootAC: 14,
      initiative: 3,
      modInit: 3,
      initBonus: 2,
      resBonus: 3,
      refBase: 3,
      refSave: 7,
      skillsSizeMod: 0,
      amuletBonus: 2,
      ringBonus: 2,
      barkskin: 0,
      prismBonus: 1,
      mageArmor: 0
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
    this.changeSizeSkillMod = this.changeSizeSkillMod.bind(this);
    this.changeResState = this.changeResState.bind(this);
    this.changeAmuletState = this.changeAmuletState.bind(this);
    this.changeProtState = this.changeProtState.bind(this);
    this.changeBarkskinState = this.changeBarkskinState.bind(this);
    this.changePrismState = this.changePrismState.bind(this);
    this.changeMageArmor = this.changeMageArmor.bind(this);    
  }


  //passed to Child as prop
  //updates this.state.modStrength, this.dexStrength, this.form whenever size changes
  changeForm(newForm, newStrength, newDex, newSizeModAA, newSizeModCMBD, newMAB, naturalArmor, newSizeMod) {

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
      armorClass: 10 + newSizeModAA + dexMod + naturalArmor + this.state.ringBonus + this.state.barkskin + this.state.mageArmor,
      touchAC: 10 + newSizeModAA + dexMod + this.state.ringBonus,
      flatfootAC: 10 + newSizeModAA + naturalArmor + this.state.ringBonus + (dexMod < 0 ? dexMod : 0) + this.state.barkskin + this.state.mageArmor,
      modInit: dexMod + this.state.initBonus,      
      refSave: this.state.resBonus + this.state.refBase + dexMod,
      skillsSizeMod: newSizeMod
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
      armorClass: 10 + this.state.modAA + dexMod + this.state.naturalArmor + this.state.ringBonus + this.state.barkskin + this.state.mageArmor,
      touchAC: 10 + this.state.modAA + dexMod + this.state.ringBonus,
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
      refSave: newRes + Math.floor((this.state.modDex-10)/2) + this.state.refBase
    })
  }

  //passed to RingOfProtInput as prop
  //handles any changes to states affected by change to ring of protection bonus 
  changeProtState(newRing) {

    const dexMod = Math.floor((this.state.modDex-10)/2);

    this.setState({
      armorClass: 10 + this.state.modAA + dexMod + this.state.naturalArmor + newRing + this.state.barkskin + this.state.mageArmor,
      touchAC: 10 + this.state.modAA + dexMod + newRing,
      flatfootAC: 10 + this.state.modAA + this.state.naturalArmor + newRing + (dexMod < 0 ? dexMod : 0) + this.state.barkskin + this.state.mageArmor,
      ringBonus: newRing
    })
  }

  //passed to Child.js as prop
  //reflects any changes to speical size modifier to fly/stealth via size
  changeSizeSkillMod(newSize) {

    switch (newSize) {
      case 'Dimunitive': 
        return 6;
        break;        
      case 'Tiny':
        return 4;
        break;
      case 'Small':
        return 2;
        break;
      case 'Medium':
        return 0;
        break;
      case 'Large':
        return -2;
        break;
      case 'Huge':
        return -4;
        break;
      default:
        return 0;
        break;
    }
  }

  //passed to AmuletInput.js
  changeAmuletState(newVal) {
    this.setState({
      amuletBonus: newVal
    })
  }

  //passed to PrismInput.js
  changePrismState(newVal) {
    this.setState({
      prismBonus: newVal
    })
  }

  //passed to BarkskinInput.js
  changeBarkskinState(newVal) {

    const dexMod = Math.floor((this.state.modDex-10)/2);

    this.setState({
      barkskin: newVal,
      armorClass: 10 + this.state.modAA + dexMod + this.state.naturalArmor + this.state.ringBonus + newVal + this.state.mageArmor,
      flatfootAC: 10 + this.state.modAA + this.state.naturalArmor + this.state.ringBonus + (dexMod < 0 ? dexMod : 0) + newVal + this.state.mageArmor,
    })
  }

  //passed to MageArmorInput.js
  changeMageArmor(newVal) {

    const dexMod = Math.floor((this.state.modDex-10)/2);

    this.setState({
      mageArmor: newVal,
      armorClass: 10 + this.state.modAA + dexMod + this.state.naturalArmor + this.state.ringBonus + this.state.barkskin + newVal,
      flatfootAC: 10 + this.state.modAA + this.state.naturalArmor + this.state.ringBonus + (dexMod < 0 ? dexMod : 0) + this.state.barkskin + newVal,
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
  //it takes argument of size and returns the spell's modifier to natural armor
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
      <div id="main">      
        <Child
          onChange = {this.changeForm}
          checkStrength = {this.checkStrength}
          checkDex = {this.checkDex}
          checkSizeMod = {this.checkSizeMod}
          checkMab = {this.checkMabOnSizeChange}
          checkNA = {this.checkNaturalArmor}
          checkSkillsMod = {this.changeSizeSkillMod}/>
        <RingOfProtInput 
          onChange = {this.changeProtState}
          ringBonus = {this.state.ringBonus} />
        <ResistanceInput 
          onChange = {this.changeResState}
          resBonus = {this.state.resBonus} />
        <BarkskinInput 
          onChange = {this.changeBarkskinState}
          barkskin = {this.state.barkskin} />
        <MageArmorInput 
          onChange = {this.changeMageArmor} />
        <PrismInput 
          onChange = {this.changePrismState}
          prismBonus = {this.state.prismBonus} />
        <AmuletInput 
          onChange = {this.changeAmuletState}
          amuletBonus = {this.state.amuletBonus} />
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
          skillsSizeMod = {this.state.skillsSizeMod}
          amuletBonus = {this.state.amuletBonus}
          ringBonus = {this.state.ringBonus}
          barkskin = {this.state.barkskin}
          prism = {this.state.prismBonus}
          mageArmor = {this.state.mageArmor}
          />
      </div>
      );
  }
}
