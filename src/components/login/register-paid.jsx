import React from "react";
import loginImg from "../../login.svg";
import './style.scss';

export class RegisterPaid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-container">
{/* <!-- Card Header --> */}

  {/* <!-- Card --> */}
<div className="Card">
<div className="card-title-container">

<span className="card-title">
  Paid Plan
</span>
</div>
{/* <!-- Sign-in Form Card --> */}

<div className="container">
    <form className="sign-up-free" action="#">
    <div className="col">
      <div className="col-100">
      {/* for="name" */}
        <label >Full Legal Name</label>
      </div>
      <div className="col-100">
        <input type="text" id="name" name="name" placeholder="Enter your name"/>
      </div>
    </div>
    <div className="col">
      <div className="col-100">
      {/* for="handle" */}
        <label >Handle</label>
      </div>
      <div className="col-100">
        <input type="text" id="handle" name="handle" placeholder="Enter your handle"/>
      </div>
    </div>
    <div className="col">
      <div className="col-100">
      {/* for="email" */}
        <label >Email</label>
      </div>
      <div className="col-100">
        <input type="text" id="email" name="email" placeholder="Enter your email"/>
      </div>
    </div>
    <div className="col">
      <div className="col-100">
      {/* for="pass" */}
        <label >Password</label>
      </div>
      <div className="col-100">
        <input type="password" id="pass" name="pass" placeholder="Enter password"/>
      </div>
    </div>
    <div className="col">
      <div className="col-100">
      {/* for="phone" */}
        <label >Phone Number</label>
      </div>
      <div className="col-100">
        <input type="text" id="phone" name="phone" placeholder="Enter your phone number"/>
      </div>
    </div>
    <div className="col">
      <div className="col-100">
      {/* for="address" */}
        <label >Physical Address</label>
      </div>
      <div className="col-100">
        <input type="text" id="address" name="address" placeholder="Enter your address"/>
      </div>
    </div>
    <div className="col">
      <div className="col-100">
      {/* for="name" */}
        <label >Visual Assets</label>
      </div>
      <button className="upload-visual-btn" >
        <span className="upload-visual-btn-title">
            Upload Visal Assets
        </span>
        </button>
    </div>
    </form>
</div>
    <button className="btn-signin-form" onClick={this.props.onSignUpClick} >
  <span className="Button-title">
    Sign up
  </span>
  </button>
  </div>
</div>

    );
  }
}
