import React, { Component } from 'react';
import './App.css';

export class MageArmorInput extends Component {
  constructor(props) {
    super(props);
    this.handleMageArmorChange = this.handleMageArmorChange.bind(this);
  }

  handleMageArmorChange(e) {
    this.props.onChange(parseInt(e.target.value));
  }




  render() {
    return (
      <div>
        <span>Mage Armor: </span>
        <select 
          id="mageArmor"
          onChange = {this.handleMageArmorChange}>
          <option value ="4">Yes</option>
          <option value ="0" selected>No</option>
        </select>
      </div>
    );
  }
}
