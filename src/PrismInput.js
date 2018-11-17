import React, { Component } from 'react';
import './App.css';

export class PrismInput extends Component {
  constructor(props) {
    super(props);
    this.handlePrismChange = this.handlePrismChange.bind(this);
  }

  handlePrismChange(e) {
    this.props.onChange(parseInt(e.target.value));
  }




  render() {
    return (
      <div>
        <span>Pale Green Prism, cracked: </span>
        <input 
        	id="barkskinBonus"
        	type="number"
        	min="0"
        	max="1"
        	defaultValue={this.props.prismBonus} 
        	onInput = {this.handlePrismChange}/>
      </div>
    );
  }
}
