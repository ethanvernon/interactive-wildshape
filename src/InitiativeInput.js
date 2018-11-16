import React, { Component } from 'react';
import './App.css';

export class InitiativeInput extends Component {
  constructor(props) {
    super(props);
    this.handleInitChange = this.handleInitChange.bind(this);
  }

  handleInitChange(e) {
  	/*console.log(e.target.value);
    const newStrength = this.props.changeStr(parseInt(e.target.value));
    console.log("changeStr changed to "+ newStrength);
    this.props.onChange(newStrength);*/

    this.props.onChange(e.target.value);
  }




  render() {
    return (
      <div>
        <span>Initiative Bonuses: </span>
        <input 
        	id="initBonus"
        	type="number"
        	min="-2"
        	max="6"
        	defaultValue={this.props.initBonus} 
        	onInput = {this.handleInitChange}/>        
      </div>
    );
  }
}
