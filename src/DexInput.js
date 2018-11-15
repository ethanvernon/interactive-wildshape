import React, { Component } from 'react';
import './App.css';

export class DexInput extends Component {
  constructor(props) {
    super(props);
    this.handleDexChange = this.handleDexChange.bind(this);
  }

  handleDexChange(e) {
    this.props.onChange(parseInt(e.target.value), this.props.changeDex(parseInt(e.target.value)));
  }




  render() {
    return (
      <div>
        <span>Dexterity: </span>
        <input 
        	id="dexScore"
        	type="number"
        	min="6"
        	max="22"
        	defaultValue={this.props.dex} 
        	onInput = {this.handleDexChange}/>        
      </div>
    );
  }
}
