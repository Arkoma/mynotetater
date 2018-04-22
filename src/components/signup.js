import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { register } from '../actions';
import { NavLink } from 'react-router-dom';
import tater from '../images/tater.png';

class SignUp extends Component {
  handleFormSubmit = ({ username, password, confirmPassword }) => {
    this.props.register(username, password, confirmPassword, this.props.history);
  }
  renderAlert = () => {
    if(!this.props.error) return null;
    return <h3>{this.props.error}</h3>;
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="popup">
				<img src={tater} className="splash-tater"/>
      <div className="popup__inner">
				<div className="auth__container">
					<div className="auth__title">
					 Welcome to My Note Tater
				 	</div>
				 	<div className="auth__sub-title">
					 you have to be a registered user to use the app
				 	</div>
					<form onSubmit={handleSubmit(this.handleFormSubmit)}>
						<fieldset>
							<Field placeholder="username" name="username" component="input" type="text" />
						</fieldset>
						<fieldset>
							<Field placeholder="password" name="password" component="input" type="password" />
						</fieldset>
						<fieldset>
							<Field placeholder="confirm password" name="confirmPassword" component="input" type="password" />
						</fieldset>
						<button action="submit">Sign Up</button>
						<div className="auth__help-text">
							If you're already registered, go ahead and <NavLink to="/signin">sign in</NavLink>
						</div>
						{this.renderAlert()}
					</form>
				</div>
			</div>
			</div>
    );
  }
};

  const mapStateToProps = state => {
    return {
      error: state.auth.error
    };
  };

  SignUp = connect(mapStateToProps, { register })(SignUp);

  export default reduxForm({
    form: 'signup',
    fields: ['username', 'password', 'confirmPassword']
  })(SignUp);
