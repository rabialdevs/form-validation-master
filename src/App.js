import React,{useState} from 'react';
import './App.css';
import graphic from './graphic.svg'
import google from './google.svg'
import facebook from  './facebook.svg'

const App = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState([]);
  let [successMessage, setSuccessMessage] = useState("");

  function handelError(event) {
    event.preventDefault();
    setErrorMessage([])
      setSuccessMessage("")
    const newError = [];
    if (!name) {
      newError.push("Name must be provided");
      console.log("Name must be provided");
    }
    if (!email) {
      newError.push("Email must be provided");
      console.log("Email must be provided");
    }
    if (!password) {
      newError.push("Password must be provided");
      console.log("Password must be provided");
    }
    if (!confirmPassword) {
      newError.push("Confirm password must be provided");
      console.log("Confirm password must be provided");
    }
    if (password !== confirmPassword) {
      newError.push("Passwords do not match");
      console.log("Passwords do not match");
    }
    if (newError.length > 0) setErrorMessage(newError)
    else {
      setErrorMessage([])
      setSuccessMessage("Registration Successful")
    }
    
  }
  return (
    <div className="App">
      <div className="leftside">
        <h2 id="left-side-font">Find 3D Objects, Mockups and Ilustration here</h2>
        <img src={graphic} alt="graphic" id='graphic'/>
      </div>
      <div className="rightside">
        <h1 id="right-side-font">Create your account</h1>
        <div className="row-1">
          <div className="signup-div">
            <img src={google} alt="google" />
            Sign up with Google
          </div>
          <div className="signup-div">
            <img src={facebook} alt="Facebook" />
            Sign up with Facebook
          </div>
        </div>
        <h4 id='or'>-OR-</h4>
        <form onSubmit={handelError} className='form'>
          <div>
            <input
              type="name"
              placeholder="Enter your username"
              onChange={(event) => setName(event.target.value)}
            />
            <hr/>
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <hr/>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <hr/>
          <div>
            <input
              type="password"
              placeholder="Confirm your password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <hr/>
          <button type="submit">Create Account</button>
        </form>
        <div>
          {errorMessage.length > 0 ? (
            <div>
              <ul id='ul'>Error :-
                {errorMessage.map((error) => (
                  <li id='li'>{error}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {successMessage ? <p id='succesMessage'>{successMessage}</p> : null}
        </div>
      </div>
    </div>
  );



}








export default App;