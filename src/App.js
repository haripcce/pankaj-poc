import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)
  const [authenticateResult, setAuthenticateResult] = useState(null)

  const DB_username = 'pankaj';
  const DB_password = 'pankaj';

  const authenticateUser = () => {
    if ((!userName) || (!password)) {
      setAuthenticateResult("EMPTY")
      return;
    }
    if (DB_username === userName && DB_password === password) {
      setAuthenticateResult("SUCCESS")
    } else {
      setAuthenticateResult("FAILURE")
    }
  }

  const clear = () => {
    setAuthenticateResult('')
    setUserName('')
    setPassword('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {authenticateResult === 'SUCCESS' && <div class="alert alert-success" role="alert">
              Authentication Success!
            </div>}
            {authenticateResult === 'FAILURE' && <div class="alert alert-danger" role="alert">
              Authentication Failure!
            </div>}
            {authenticateResult === 'EMPTY' && <div class="alert alert-warning" role="alert">
              Enter field data
            </div>}
          </div>
        </div>

        <div className="row">

          <div className="col-md-6">
            <div class="form-group">
              <label for="email">User Name:</label>
              <input type="text" value={userName} class="form-control" placeholder="Enter username" id="email" onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" value={password} class="form-control" placeholder="Enter password" id="pwd" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" onClick={authenticateUser} class="btn btn-primary">Submit</button>
            <button type="button" onClick={clear} class="btn btn-secondary">Clear</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
