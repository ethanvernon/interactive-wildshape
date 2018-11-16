import React, { Component } from 'react';
import './App.css';

export class RingOfProtInput extends Component {
  constructor(props) {
    super(props);
    this.handleProtChange = this.handleProtChange.bind(this);
  }

  handleProtChange(e) {
  	/*console.log(e.target.value);
    const newStrength = this.props.changeStr(parseInt(e.target.value));
    console.log("changeStr changed to "+ newStrength);
    this.props.onChange(newStrength);*/

    this.props.onChange(parseInt(e.target.value));
  }




  render() {
    return (
      <div>
        <span>Ring of Protection: </span>
        <input 
        	id="protBonus"
        	type="number"
        	min="0"
        	max="5"
        	defaultValue={this.props.ringBonus} 
        	onInput = {this.handleProtChange}/>        
      </div>
    );
  }
}
