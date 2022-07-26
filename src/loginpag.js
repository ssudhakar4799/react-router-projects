import Details from "./details.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import React from "react";

export default function Loginpag() {
  const navigat = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errMeg, setErrMsg] = useState("");
  function getingName(event) {
    setName(event.target.value);
  }
  function getingPassword(event) {
    setPassword(event.target.value);
  }
  function submit(event) {
    event.preventDefault();
    Details.forEach((datas) => {
      if (datas.userName == name && datas.password == password) {
        navigat("/App");
      } else {
        setErrMsg("invalid pasword");
      }
    });
  }

  return (
    <div style={{backgroundColor:"skyblue",width:"30%",marginLeft:"30%",height:"30vh"}}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form onSubmit={submit} style={{ textAlign: "center" }}>
        <label>USERNAME : </label>
        <input
          type="text"
          name="userName"
          placeholder="enter your username"
          onChange={getingName}
        ></input>
        <br></br>
        <label>PASSWORD : </label>
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={getingPassword}
          style={{ marginTop: "1%" }}
        ></input>
        <br></br>
        <input type="submit" style={{ marginTop: "1%" }}></input>
        <p>{errMeg}</p>
      </form>
    </div>
  );
}
