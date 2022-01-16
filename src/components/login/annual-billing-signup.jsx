import React from "react";
import loginImg from "../../login.svg";
import './style.scss';

export class AnnualBillingSignup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
//       <div className="card-container">
// <!-- Card Header -->

// <!-- Card -->
<div className="Card">
<div className="card-title-container">
  
<span className="card-title">
Annual Plan - Billing (2500)
</span>
</div>
{/* <!-- Sign-in Form Card --> */}

<div className="container">
  <form className="sign-up-free" action="#">
  <div className="col">
    <div className="col-100">
    {/* for="ccnum */}
      <label >Credit Card Number</label>
    </div>
    <div className="col-100">
      <input type="password" id="ccnum" name="ccnum" placeholder="Enter Credit Card Number"/>
    </div>
  </div>
  <div className="col">
    <div className="col-100">
    {/* for="expdate" */}
      <label >Expiration Date</label>
    </div>
    <div className="col-100">
      <input type="text" id="expdate" name="expdate" placeholder="Select a date"/>
    </div>
  </div>
  <div className="col">
    <div className="col-100">
    {/* for="ccv" */}
      <label >CCV</label>
    </div>
    <div className="col-100">
      <input type="password" id="ccv" name="ccv" placeholder="Enter CCV number"/>
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
  </form>
</div>
{/* TODO add submit payment process */}
  <button className="btn-signin-form" >
<span className="Button-title">
  Sign up
</span>
</button>
</div>
    );
  }
}
