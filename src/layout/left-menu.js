import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

class LeftMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      moduleName: "General"
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div
          className="mainSide" id="sidebar" >
          <div className="header-logo-menu">
            <div className={"header-logocontent hover"}>
              <div className="content-collapse">
                <div className="Logo">
                  <NavLink to="/">
                    <img src={Logo} alt="Logo" title="Logo" />
                  </NavLink>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default LeftMenu;