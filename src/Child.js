import React, { Component } from 'react';
import './App.css';

export class Child extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const form = e.target.value;
    const newStrength = this.props.checkStrength(form);
    const newDex = this.props.checkDex(form);
    const sizeModAA = this.props.checkSizeMod(form);
    const sizeModCMBD = this.props.checkSizeMod(form) * -1;
    const newMAB = this.props.checkMab(sizeModAA, newStrength);
    this.props.onChange(form, newStrength, newDex, sizeModAA, sizeModCMBD, newMAB);
  }




  render() {
    return (
      <div>
        <span>Size: </span>
        <select
          id="forms"
          onChange = {this.handleChange}>
          <option value ="Dimunitive">Dimunitive</option>
          <option value ="Tiny">Tiny</option>
          <option value ="Small">Small</option>
          <option value ="Medium" selected>Medium</option>
          <option value ="Large">Large</option>
          <option value ="Huge">Huge</option>
        </select>
        
      </div>
    );
  }
}
