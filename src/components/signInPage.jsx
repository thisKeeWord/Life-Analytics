var React = require('react');
var ReactDOM = require('react-dom');
var SignUpForm = require('./signUpForm.jsx');
var LoginForm = require('./logInForm.jsx')
var Questionnaire = require('./questionnaire.jsx')

var SignInPage = React.createClass({
 

  render: function() {
  

    if(this.props.signUpStatus === true) {
      return (
        <div>
          <div className="form">
            <ul className="tab-group">
              <li onClick={this.props.clickSignUpButton} className={(this.props.signUpStatus) ? 'tab active':'tab'}><a href="#signup">Sign Up</a></li>
              <li onClick={this.props.clickLoginButton} className={(this.props.loginStatus) ? 'tab active':'tab'}><a href="#login">Log In</a></li>
            </ul>
            <div className="tab-content">
            
            </div>
             <SignUpForm  ref="signUp" signUpStatus={this.props.signUpStatus} createUser={this.props.createUser} />
            <script src="js/index.js"></script>
        </div>

      </div>
      )
    }
    if(this.props.loginStatus === true) {
      return (
        <div>
          <div className="form">
            <ul className="tab-group">
              <li onClick={this.props.clickSignUpButton} className={(this.props.signUpStatus) ? 'tab active':'tab'}><a href="#signup">Sign Up</a></li>
              <li onClick={this.props.clickLoginButton} className={(this.props.loginStatus) ? 'tab active':'tab'}><a href="#login">Log In</a></li>
            </ul>
            <div className="tab-content">
        
            </div>
              <LoginForm  loginStatus={this.props.loginStatus} />
            <script src="js/index.js"></script>
        </div>

      </div>
      ) 
    }

    else if (this.state.demo === true) {
      return (
        <div>
          <Questionnaire />
        </div>
      )
    }

  }
});

module.exports = SignInPage;