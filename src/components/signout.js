import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import { NavLink } from 'react-router-dom';
import tater from '../images/tater.png';

class SignOut extends Component {
  componentWillMount() {
    this.props.logout();
  }
  getLinks() {
    if (this.props.authenticated) {
      return (
        <li>
          <NavLink to="/signout">Sign Out</NavLink>
        </li>
      );
    }
    return [
      <li key={1}>
				would you like to <NavLink to="/signin">sign in</NavLink> again?
      </li>,
    ];
  }
  render() {
    return (
      <div className="popup">
				<img src={tater} alt="tater" className="splash=tater"/>
				<div className="popup__inner">
					<div className="auth__container">
						<div className="auth__title">
							You have signed out
						</div>
						<div className="links">
							<ul>{this.getLinks()}</ul>
						</div>
					</div>
				</div>
			</div>
    );
  };
};

export default connect(null, { logout })(SignOut);
