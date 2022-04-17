import React, { Component, Fragment } from 'react';
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";


class Header extends Component {

  render() {
    return (
      <div>
        <div className="wrapper">
          <header className={"main-header dashboard__header"}>
            <div className="header-content">
              <ul className="nav-left">
                <Fragment>
                  <li>
                    <NavLink to="/">
                      <img src={Logo} alt="logo" />
                    </NavLink>
                  </li>
                </Fragment>
              </ul>
            </div>
          </header>
        </div>
      </div>
    );
  }
}


export default Header;