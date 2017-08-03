import React, { Component } from 'react';
  
  

class MovesList extends Component {
  render() {
    const moves_json = require("./data/moves.json");
   // console.log(moves_json)
   
    let moove = moves_json.moves.map((value, i) =>
        <option value={value.name}>{value.name}</option>
    );

    return (
      <p> Liste des mouvements : &nbsp;
        <select id="ok">
          {moove}
        </select>
      </p>
    );
  }
}


export default MovesList;