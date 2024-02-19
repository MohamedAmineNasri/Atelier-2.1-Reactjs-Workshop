import React from "react";

class Welcome extends React.Component {
  state = {
    txt: "montxt",
    count: 1,
    departs: [
      { id: 1, nom: "informatique" },
      { id: 2, nom: "Génie Civil" },
      { id: 3, nom: "Génie Mécanique" },
    ],
  };
     changeState  = () => 
    {
 this.setState({
    txt : "Bonjour tout le monde" , 
    //count + 1 
    // ajout d'un nouveau departement 
    count : this.state.count + 1 , 
departs : [ ...this.state.departs , {id : 4 , nom : "mécanique"}]
 })

    }
  render() {
    return <>
    
   
    {this.state.txt}
    <br></br>
     {this.state.count}
     {this.state.departs.map((elt)=>
      <li key={elt.id}>{elt.nom}</li>)}
      <button onClick={this.changeState}> Cliquer</button>
    </>;
  }
}

export default Welcome;
