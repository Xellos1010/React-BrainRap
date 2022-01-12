import React from "react";
import loginImg from "../../login.svg";

import './style.scss';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {/* <div class="card-container"> */}
        {/* <div className="base-container" ref={this.props.containerRef}> */}
{/* <!-- Cards need to be refactored so we can swap between htmls --> */}
{/* <!-- Card Container --> */}
{/* <!-- Card Header --> */}

  {/* <!-- Card --> */}
<div class="Card">
<span class="card-title">
  Sign-in
</span>

<form class="sign-in" action="#">
<div class="col">
  <div class="col-100">
    <label for="email">Email</label>
  </div>
  <div class="col-100">
    <input type="text" id="email" name="email" placeholder="Enter email..."/>
  </div>
</div>
<div class="col">
  <div class="col-100">
    <label for="pass">Password</label>
  </div>
  <div class="col-100">
    <input type="password" id="pass" name="pass" placeholder="Enter password..."/>
  </div>
</div>
</form>
    <button class="btn-signin-form" >
  <span class="btn-signin-title">
    Sign In
  </span>
  </button>
  {/* <!-- Button Below Card --> */}
</div>
  <span class="card-footer">
  Don't have an account? <u> Sign-up and create your account</u>
  </span>
</div>
// </div>
    );
  }
}
