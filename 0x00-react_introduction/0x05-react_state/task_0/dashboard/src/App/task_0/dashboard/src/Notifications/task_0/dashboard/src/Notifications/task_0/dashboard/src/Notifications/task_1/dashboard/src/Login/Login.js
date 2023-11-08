import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email, enableSubmit: email !== '' && this.state.password !== '' });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password, enableSubmit: password !== '' && this.state.email !== '' });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    // You can perform login actions here or send the data to an API
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <input
            type="submit"
            value="Submit"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;