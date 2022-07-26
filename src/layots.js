import './App.css';
import "./model.scss"
import { useNavigate } from 'react-router-dom';
export default function Layouts() {
  var navi=useNavigate();
  return (
    <>
    <div className="container">
      <button onClick={()=>navi('/App')}>go header</button>
      <div className="nav">

        {<img src="logo192.png" width={"100px"} className="logo"></img>}
        <a href="">Home</a>
        <a href="">ABOUT</a>
        <a href="">SERVICES</a>
        <a href="">FEEDBACK</a>

        <div className="social">
          <a href="">facbook</a>
          <a href="">insta</a>
          <a href="">twitter</a>

        </div>

      </div>
      <div className="container2">
        <div className="left">

        </div>
        <div className="right">
          {<img src="logo192.png" width={"100px"}></img>}

          </div>
      </div>
      <div className="thirdsec">
      </div>

    </div>
    </>
  )
}