import logo from './logo.svg';
import './App.css';
import React from "react";
import image from "./profile.jpg"

class App extends React.Component {
   constructor() {
    super ()
    this.state={
      FamilyName: "Al-Hazemi",
      Name:"Sami",
      Age:39,
      Gender:"Male",
      Profession:"Technical Engineer",
      imgsrc:image,
      showstate:false,

      }
   }
  
  render(){
       var handlechange = e => 
       {
         this.setState({showstate:!this.state.showstate})
       }
       const x=this.state.showstate;
    return ( 
        <div>

      <center>
        <h3>How to hide & show the user profile</h3>
        <h1>you should click on the button to show and hide your profile</h1>      
        <button onClick={handlechange}> {x?'hide':'show'} </button> 
      {         
        x &&
        (
         <div>
       <h1>hello I m  {this.state.FamilyName} {this.state.Name}</h1> 
       <h1>My Age {this.state.Age} My Gender {this.state.Gender}</h1>
       <h1>My Profession {this.state.Profession}</h1> 
       <div>
        <img src={this.state.imgsrc} width="500" alt="sami al hazemi"/>
      </div>        
         </div>
        )
      }      
    </center>  
    </div>  
   )    
  };  
};
export default App;
