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
    this.props.onChange(form, newStrength);
  }



  render() {
    return (
      <div>
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
