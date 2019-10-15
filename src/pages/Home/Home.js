import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/albums">
              Albums
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              About Us
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
