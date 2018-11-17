import React, { Component } from 'react';
import './App.css';

export class BigBroHideCo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.class == "hidden" ? "" : "hidden");
  }

  /*handleChange(e) {
    const form = e.target.value;
    const newStrength = this.props.checkStrength(form);
    const newDex = this.props.checkDex(form);
    const sizeModAA = this.props.checkSizeMod(form);
    const sizeModCMBD = this.props.checkSizeMod(form) * -1;
    const newMAB = this.props.checkMab(sizeModAA, newStrength);
    const naturalArmor = this.props.checkNA(form);
    const newSizeMod = this.props.checkSkillsMod(form);
    this.props.onChange(form, newStrength, newDex, sizeModAA, sizeModCMBD, newMAB, naturalArmor, newSizeMod);
  }*/


  render() {
    return (
      <div>        
        <p>
          More stats: <button 
            type="button"
            id="showHideButton"
            onClick={this.handleClick}>
            {this.props.buttonName}
          </button>
        </p>
        <div
          className={this.props.class}>
          {this.props.children}  
        </div>      
      </div>
    );
  }
}
