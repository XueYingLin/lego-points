import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './component/Home';

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
