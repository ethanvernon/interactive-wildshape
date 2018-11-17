import React, { Component } from 'react';
import './App.css';

export class Sibling extends Component {

  render() {


    const aMF = parseInt(this.props.amuletBonus);

    //calculating modifiers to dex and str
    const strMod = Math.floor((this.props.modStrength-10)/2);
    const dexMod = Math.floor((this.props.modDex-10)/2);

    //const from props
    const form = this.props.form;
    const strength = this.props.modStrength;
    const dexterity = this.props.modDex;
    const modCMBD = this.props.modCMBD;  
    const CMD = this.props.CMD;
    const AC = this.props.AC;
    const naturalArmor = this.props.naturalArmor;
    const touchAC = this.props.touchAC;
    const ffAC = this.props.ffAC;
    const modAA = this.props.modAA;
    const CMB = this.props.CMB;
    const initiative = this.props.initiative;
    const refSave = this.props.refSave;
    const flyMod = this.props.skillsSizeMod;
    const ringBonus = this.props.ringBonus; 
    const barkskin = this.props.barkskin;
    const prism = this.props.prism;
    const mageArmor = this.props.mageArmor;

    //adding amulet of MF & prism
    const modMab = this.props.modMab+aMF+prism;
    const secondaryMab = this.props.modMab+aMF-5+prism;
    const primDamage = this.props.meleeDamage+aMF;
    const secondDamage = this.props.meleeDamageSecondary+aMF;

    //add +4 bonus to grapple for creatures with grab    
    const CMBGrapple = this.props.CMB+4;

    //calculate 1.5x Str bonus to damage with only 1 natural weapon
    const singleDamage = (strMod < 0) ? (strMod + aMF) : (Math.floor(strMod*1.5)+aMF);
    
    //doubling bonus to stealth
    const hideMod = this.props.skillsSizeMod*2;

    //function to add plus sign to positive modifiers
    function plusAdder (val) {
      if ( val < 0 ) {
        return val;
      } else {
        return "+" + val;
      }
    }


    
    
    return (
      <div>
        <h1>You've selected: {form}</h1>
        <p><b>Init:</b> {plusAdder(initiative)}</p>
        <p><b>AC:</b> {AC}, touch {touchAC}, flat-footed {ffAC} ({plusAdder(dexMod)} Dex, {plusAdder(naturalArmor)} natural armor, {plusAdder(mageArmor)} armor, {plusAdder(modAA)} size, {plusAdder(ringBonus)} deflection, {plusAdder(barkskin)} natural armor enhancement)</p>        
        <p><b>Ref:</b> {plusAdder(refSave)}</p>
        <p><b>Melee (multiple attacks):</b> {plusAdder(modMab)} <i>primary</i> (<i>dice</i>{plusAdder(primDamage)}), {plusAdder(secondaryMab)} <i>secondary</i> (<i>dice</i>{plusAdder(secondDamage)})</p>        
        <p><b>Melee (only 1 attack):</b> {plusAdder(modMab)} <i>sole attack</i> (<i>dice</i>{plusAdder(singleDamage)})</p>
        <p><b>Str:</b> {strength} ({strMod < 0 ? strMod : "+" + strMod}), <b>Dex:</b> {dexterity} ({plusAdder(dexMod)})</p>        
        <p><b>CMB:</b> {plusAdder(CMB)} ({plusAdder(CMBGrapple)} grapple if it has <i>grab</i>)</p>
        <p><b>CMD:</b> {CMD}</p>
        <p><b>Size modified skills:</b> {plusAdder(hideMod)} Stealth, {plusAdder(flyMod)} Fly</p>
        <p><b>Applicable abilities (<i>Beast Shape III</i>):</b> burrow 30 feet, climb 90 feet, fly 90 feet (good maneuverability), 
        swim 90 feet, blindsense 30 feet, darkvision 60 feet, low-light vision, scent, constrict, ferocity, grab, jet, poison, 
        pounce, rake, trample, trip, and web.</p><br/>
        <p>Unlisted stats default to your character's</p>
        <p>Relevant skills use new Strength and Dexterity modifiers.</p>
        <p>Further modify Fly and Stealth by new size modifiers if applicable.</p>
      </div>
    );
  }
}
