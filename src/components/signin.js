import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { login } from '../actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import tater from '../images/tater.png';

class SignIn extends Component {
  handleFormSubmit({ username, password }) {
    this.props.login(username.toLowerCase(), password, this.props.history);
  }

  renderAlert() {
    if (!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      !this.props.authenticated ?
			<div className="popup">
				<img src={tater} className="splash-tater"/>
				<div className="popup__inner">
					<div className="auth__title">
						Welcome to My Note Tater
					</div>
					<div className="auth__sub-title">
						you have to be a registered user to use the app
					</div>
					<h3>Please sign in </h3>
					<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<fieldset>
							<Field placeholder="username" name="username" component="input" type="text" />
						</fieldset>
						<fieldset>
							<Field placeholder="password" name="password" component="input" type="password" />
						</fieldset>
						<button action="submit">Sign In</button>
						<div className="auth__help-text">
							Not yet registered?  Sign up for a free account!
						</div>
						<NavLink to="/signup"> <button>Sign Up</button> </NavLink>
						{this.renderAlert()}
					</form>
				</div>
			</div> : null
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    authenticated: state.auth.authenticated
  };
};

SignIn = connect(mapStateToProps, { login })(SignIn);

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
})(SignIn);
