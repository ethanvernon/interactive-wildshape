import React, { Component } from 'react';
import './App.css';

export class Sibling extends Component {

  render() {

    const aMF = parseInt(this.props.amuletBonus);
    const strMod = Math.floor((this.props.modStrength-10)/2);
    const dexMod = Math.floor((this.props.modDex-10)/2) < 0 ? Math.floor((this.props.modDex-10)/2) : "+" + Math.floor((this.props.modDex-10)/2);

    const form = this.props.form;
    const strength = this.props.modStrength;
    const dexterity = this.props.modDex;
    const modAA = this.props.modAA < 0 ? this.props.modAA : "+" + this.props.modAA;
    const modCMBD = this.props.modCMBD;    
    const modMab = (this.props.modMab+aMF) < 0 ? (this.props.modMab+aMF) : "+" + (this.props.modMab+aMF);
    const secondaryMab = (parseInt(this.props.modMab+aMF)-5) < 0 ? parseInt(this.props.modMab+aMF)-5 : "+" + (parseInt(this.props.modMab+aMF)-5);
    const primDamage = (this.props.meleeDamage+aMF) < 0 ? (this.props.meleeDamage+aMF) : "+" + (this.props.meleeDamage+aMF);
    const secondDamage = (this.props.meleeDamageSecondary+aMF) < 0 ? (this.props.meleeDamageSecondary+aMF) : "+" + (this.props.meleeDamageSecondary+aMF);
    const CMB = this.props.CMB < 0 ? this.props.CMB : "+" + this.props.CMB;
    const CMBGrapple = (this.props.CMB+4) < 0 ? this.props.CMB+4 : "+" + (this.props.CMB+4);
    const CMD = this.props.CMD;
    const naturalArmor = "+" + this.props.naturalArmor;
    const AC = this.props.AC;
    const initiative = this.props.initiative < 0 ? this.props.initiative : "+" + this.props.initiative;
    const touchAC = this.props.touchAC;
    const ffAC = this.props.ffAC;
    
    const refSave = this.props.refSave < 0 ? this.props.refSave : "+" + this.props.refSave;
    const singleDamage = (strMod < (0-aMF)) ? (strMod + aMF) : "+" + (Math.floor(strMod*1.5)+aMF);
    const flyMod = this.props.skillsSizeMod < 0 ? this.props.skillsSizeMod : "+" + this.props.skillsSizeMod;
    const hideMod = (this.props.skillsSizeMod*2) < 0 ? (this.props.skillsSizeMod*2) : "+" + (this.props.skillsSizeMod*2);
    
    return (
      <div>
        <h1>You've selected: {form}</h1>
        <p>Unlisted stats default to your character's</p>
        <p>Relevant skills use new Strength and Dexterity modifiers.</p>
        <p>Further modify Fly and Stealth by new size modifiers if applicable.</p><br/>
        <p><b>Init:</b> {initiative}</p>
        <p><b>AC:</b> {AC}, touch {touchAC}, flat-footed {ffAC} ({dexMod} Dex, {naturalArmor} natural, {modAA} size)</p>        
        <p><b>Ref:</b> {refSave}</p>
        <p><b>Melee (multiple attacks):</b> {modMab} <i>primary</i> (<i>dice</i>{primDamage}), {secondaryMab} <i>secondary</i> (<i>dice</i>{secondDamage})</p>        
        <p><b>Melee (only 1 attack):</b> {modMab} <i>sole attack</i> (<i>dice</i>{singleDamage})</p>
        <p><b>Str:</b> {strength} ({strMod < 0 ? strMod : "+" + strMod}), <b>Dex:</b> {dexterity} ({dexMod})</p>        
        <p><b>CMB:</b> {CMB} ({CMBGrapple} grapple if it has <i>grab</i>)</p>
        <p><b>CMD:</b> {CMD}</p>
        <p><b>Size Modified Skills:</b> {hideMod} Stealth, {flyMod} Fly</p>
        <p><b>Applicable abilities (<i>Beast Shape III</i>):</b> burrow 30 feet, climb 90 feet, fly 90 feet (good maneuverability), 
        swim 90 feet, blindsense 30 feet, darkvision 60 feet, low-light vision, scent, constrict, ferocity, grab, jet, poison, 
        pounce, rake, trample, trip, and web.</p>
      </div>
    );
  }
}
