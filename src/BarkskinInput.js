import React, { Component } from 'react';
import './App.css';

export class BarkskinInput extends Component {
  constructor(props) {
    super(props);
    this.handleBarkskinChange = this.handleBarkskinChange.bind(this);
  }

  handleBarkskinChange(e) {
  	/*console.log(e.target.value);
    const newStrength = this.props.changeStr(parseInt(e.target.value));
    console.log("changeStr changed to "+ newStrength);
    this.props.onChange(newStrength);*/

    this.props.onChange(parseInt(e.target.value));
  }




  render() {
    return (
      <div>
        <span>Barkskin: </span>
        <input 
        	id="barkskinBonus"
        	type="number"
        	min="0"
        	max="5"
        	defaultValue={this.props.barkskin} 
        	onInput = {this.handleBarkskinChange}/>
      </div>
    );
  }
}
