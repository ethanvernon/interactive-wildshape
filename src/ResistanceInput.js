import React, { Component } from 'react';
import './App.css';

export class ResistanceInput extends Component {
  constructor(props) {
    super(props);
    this.handleResChange = this.handleResChange.bind(this);
  }

  handleResChange(e) {
  	/*console.log(e.target.value);
    const newStrength = this.props.changeStr(parseInt(e.target.value));
    console.log("changeStr changed to "+ newStrength);
    this.props.onChange(newStrength);*/

    this.props.onChange(parseInt(e.target.value));
  }




  render() {
    return (
      <div>
        <span>Resistance Bonus: </span>
        <input 
        	id="resBonus"
        	type="number"
        	min="0"
        	max="5"
        	defaultValue={this.props.resBonus} 
        	onInput = {this.handleResChange}/>        
      </div>
    );
  }
}
