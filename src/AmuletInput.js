import React, { Component } from 'react';
import './App.css';

export class AmuletInput extends Component {
  constructor(props) {
    super(props);
    this.handleAmuletChange = this.handleAmuletChange.bind(this);
  }

  handleAmuletChange(e) {
  	/*console.log(e.target.value);
    const newStrength = this.props.changeStr(parseInt(e.target.value));
    console.log("changeStr changed to "+ newStrength);
    this.props.onChange(newStrength);*/

    this.props.onChange(e.target.value);
  }




  render() {
    return (
      <div>
        <span>Amulet of Mighty Fists: </span>
        <input 
        	id="initBonus"
        	type="number"
        	min="0"
        	max="5"
        	defaultValue={this.props.amuletBonus} 
        	onInput = {this.handleAmuletChange}/>        
      </div>
    );
  }
}
