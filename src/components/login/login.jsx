import React from "react";
import loginImg from "../../login.svg";

import './style.scss';
import './login.scss';

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {/* <div className="card-container"> */}
        {/* <div className="base-container" ref={this.props.containerRef}> */}
{/* <!-- Cards need to be refactored so we can swap between htmls --> */}
{/* <!-- Card Container --> */}
{/* <!-- Card Header --> */}

  {/* <!-- Card --> */}
<div className="Card">
  <div className="card-title-container">
<span className="card-title">
  Sign-in
</span>
</div>
<div className="signin-container">
<form className="sign-in" action="#">
<div className="col">
  <div className="col-100">
  {/* for="email" */}
    <label >Email</label>
  </div>
  <div className="col-100">
    <input type="text" id="email" name="email" placeholder="Enter email..."/>
  </div>
</div>
<div className="col">
  <div className="col-100">
  {/* for="pass" */}
    <label >Password</label>
  </div>
  <div className="col-100">
    <input type="password" id="pass" name="pass" placeholder="Enter password..."/>
  </div>
</div>
</form>
    <button className="btn-signin-form" >
  <span className="Button-title">
    Sign In
  </span>
  </button>
  </div>
  {/* <!-- Button Below Card --> */}
</div>
</div>
// </div>
    );
  }
}
