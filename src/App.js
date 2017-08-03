import React, { Component } from 'react';


const moves = ["shi", "fu", "mi"];
const dictionnaire = [
  {
    mot : "shi",
    def : "mettre les bras devant"
  },
  {
    mot : "fu",
    def : "mettre les bras en l'airt"
  },
  {
    mot : "mi",
    def : "mettre les bras dans le cul"
  }
  ];

class App extends Component {
  render() {
    

    let word = moves.map((value, i) =>
      <li id={i}>{value} : {dictionnaire[i].def}</li>
    );
    
    
    
   /* for (let j=0; word[j] !== this.dictionnaire[j].mot; j++){
            console.log(dictionnaire[j].mot);
      if (word[j] === dictionnaire[j].mot){
        <li id={j}>{word[j]} : {dictionnaire[j].def}</li>
      }
    }
    */
   /* let j=0;
     while (word[j] != dictionnaire[j].mot){
        j++;
        console.log(dictionnaire[j].mot);
      }
      
    */
    
    

    return (
      <div className="App">
        <p className="App-intro">
         liste des mots {word} 
        </p>
      </div>
    );
  }
}

export default App;
