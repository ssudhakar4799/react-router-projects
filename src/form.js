
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import App from "./App"

// const withNav=(Component)=>{
// const navigate=useNavigate()
//   return <Component navigate={navigate}></Component>

// }
 export default class Form extends Component {
  
    constructor (){        
        super();
        this.state={
            userName:"",
            age:"",
            error:"",
            
        }
    }

    inputName=(event)=>{
        if(event.target.name==="age"){
            if(isNaN(event.target.value)){
                this.setState({error:"it is wrong inputs"})

            }
            else{
            this.setState({error:""})
            }
        }
        this.setState({[event.target.name]:event.target.value})
    }
  
    submit=(event)=>{
        event.preventDefault()
       console.log(this.state);

    }
  render() {
    return (
      <>
        <form onSubmit={this.submit}>
        <input name='userName' onChange={this.inputName}></input>
        <input name='age' onChange={this.inputName}></input>
        <input type="submit"></input>
        </form>
        {/* <button  onClick={()=>this.props.navigate(<App/>)}>click</button> */}
        <p>{this.state.error}</p>
      </>
    )
  }
}

// import React from 'react'
// import { useState } from 'react';

// export default function Form() {
//   var userName=""
//   var age=""

// function inputName(event) {
//   console.log(event.target.value);
//   userName=event.target.value
// }
// function submit(event) {
//   event.preventDefault();
//   console.log(event.target.value);
  
// }
//   return (
//     <div>
//       <form onSubmit={submit}>
//         <input name='userName' onChange={inputName} ></input>
//         <input name='age' onChange={inputName}></input>
//         <input type="submit" ></input>
//       </form>
//     </div>
//   )
// }


// import React, { Component } from 'react'
// import { useNavigate } from 'react-router-dom';

// export default class Form extends Component {
//   constructor(){
//     super()
//     this.state={
//       userName:"",
//       age:null,
//       error:"",
//       nav:useNavigate()
//     }
//   }
//   userInput=(event)=>{
//   let userinput=event.target.name
//     let uservalue=event.target.value
//     let err=""
   
//     if(event.target.name==="age"){
//       if(event.target.value!="" && !Number(event.target.value)){
//         err="this is wrong input and not a number "
//       }
//       else{
//         console.log("success");
//       }
//     }
//     this.setState({[userinput]: uservalue})
    
//   }
//   submit=(event)=>{
//     event.preventDefault();
//     console.log(this.state);
//     this.state.nav(<App/>)

//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submit}>
//           <h1>{this.state.userName}</h1>
//           <input name='userName' onChange={this.userInput}></input>
//           <h1>{this.state.age}</h1>
//           <input name='age' onChange={this.userInput}></input>
//           <input type="submit"></input>
//           <h1>{this.state.error}</h1>
          
//         </form>
      
//       </div>
//     )
//   }
// }
