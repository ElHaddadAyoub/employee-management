import React, { Component } from 'react'
import {BrowserRouter as Link} from 'react-router-dom'
class HeaderComponents extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <div className="container-fluid">
        
            <Link className="navbar-brand" to="/employees"><h2>ProjetX</h2></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active"  to="/employees">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active"  to="/add-employee/_add">Create Employee</Link>
                </li>
                

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default HeaderComponents;
