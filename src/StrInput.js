import React, { Component } from 'react';
import './App.css';

export class StrInput extends Component {
  constructor(props) {
    super(props);
    this.handleStrChange = this.handleStrChange.bind(this);
  }

  handleStrChange(e) {
  	/*console.log(e.target.value);
    const newStrength = this.props.changeStr(parseInt(e.target.value));
    console.log("changeStr changed to "+ newStrength);
    this.props.onChange(newStrength);*/

    this.props.onChange(parseInt(e.target.value), this.props.changeStr(parseInt(e.target.value)));
  }




  render() {
    return (
      <div>
        <span>Strength: </span>
        <input 
        	id="score" 
        	type="number" 
        	min="6" 
        	max="22" 
        	defaultValue={this.props.strength} 
        	onInput = {this.handleStrChange}/>        
      </div>
    );
  }
}
