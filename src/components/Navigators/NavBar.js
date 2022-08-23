import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a> 
                <a class="nav-link" href="#">
                  Our Products
                </a>
                <a class="nav-link" href="#">
                  About US
                </a>
                <a class="nav-link disabled">User Profile</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
