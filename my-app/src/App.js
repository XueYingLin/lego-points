import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


  const legoCalendar = [
    {id: 1, title: "create a roller coaster"},
    {id: 2, title: "build a new rocket"},
    {is: 3, title: "build a new home"},
    {id: 4, title: "build a new Star War movie set"},
    {id: 5, title: "build a tallest tower"},
    {id: 6, title: "build a new space ship"},
    {id: 7, title: "build a coolest pick up truck"}
    
  ]

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      {legoCalendar.map((item) => <p>Day {item.id} :  Title: {item.title}</p>)}
      
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
    </div>
  )
}
function App() {
  return (
    <div className="App">
     <h1>Lego-Points</h1>
     <Router>
       <div className="links">
          <Link className="link" exact to="/">Home</Link>
          <Link className="link" to="/Login">Login</Link>
       </div>
       <Route exact path="/" component={Home} />
       <Route path="/login" component={Login} /> 
     </Router>
    </div>
  );
}

export default App;
