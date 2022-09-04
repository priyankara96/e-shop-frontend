import React, { Component } from "react";
import { AiOutlineLogin } from "react-icons/ai";

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
                <a class="nav-link active" aria-current="page" href="/">
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
            <form class="form-inline my-2 my-lg-0">
            <a class="nav-link" href="/login">
              <button type="button" className="btn btn-light"  style={{ textDecoration: 'none', color: 'Info' }}><AiOutlineLogin />&nbsp; Sign in</button>
            </a>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
