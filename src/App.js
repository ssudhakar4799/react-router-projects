
// // export default App;
import React, { Component, useState } from "react";
// import Home from "./home";
import Products from "./products.json";
import "./model.scss";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "sudhakar s",
      cardidems: [],
    };
  }

  addtocard(pro) {
    var prod = this.state.cardidems;
    var ss = pro == pro ? (pro.qty += 1) :"false";
    this.setState({ cardidems: [...prod, pro] });
    var sss = [...new Set(prod)];
    console.log(sss);
  }
  removeelement(prod) {
    var index = this.state.cardidems.findIndex((item) => prod == item);
    console.log(prod);
    this.state.cardidems.splice(index, 1);
    this.setState({ cardidems: [...this.state.cardidems] });
  }
  render() {
    return (
      <div>
        {/* {this.state.name}<Home name={this.state.name} /> */}
        {Products.map((products, index) => {
          return (
            <div key={index}>
              <h1>{products.name}</h1>
              <button onClick={() => this.addtocard(products)}>
                Add To Card
              </button>
            </div>
          );
        })}
        <h1>cardidems </h1>
        {this.state.cardidems.map((products, index) => {
          return (
            <div key={index} style={{}}>
              <div
                style={{
                  color: "red",
                  border: "solid black 2px",
                  width: "20%",
                  textAlign: "center",
                  backgroundColor: "lightgreen",
                  listStyle: "none",
                
                }}
              >
                <li>
                  <h3>{products.name}</h3>
                </li>
                <li style={{ color: "green" }}>Price : {products.price}</li>
                <li style={{ color: "red" }}>Qty : {products.qty}</li>
                <p>
                  <img src={products.img} width="40%"></img>
                </p>
                <button onClick={() => this.removeelement(products)}>
                  remove
                </button>
              </div>
            </div>
          );
        })}
        {/* <button onClick={()=>this.setState({name:'sudha'})}>change value</button> */}
      </div>
    );
  }
}



