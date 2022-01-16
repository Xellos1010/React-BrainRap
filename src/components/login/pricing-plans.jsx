import React from "react";
import loginImg from "../../login.svg";
import logoImg from "../../img/brainrap-logo.svg";

import './style.scss';
// import './debug.scss';
import './pricing-plans.scss';

export class PricingPlans extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="base-container" ref={this.props.containerRef}>
      <div className="card-container">
      <div className="splash-container">
{/* <!-- Splash Container --> */}
  <div className="splash-title-container">
      <span className="splash-title">
        Transparent Pricing
      </span>
      <span className="splash-subtitle">
        No Bullshit
      </span>
      </div>
      </div>
    
<div className="cards-container">
<div className="card-reccomended-badge">
<div className="Badge">
<span className="card-title-row-2 backgroundaqua">
  Recommended
</span>
</div>
</div>
<div className="card-container-row">
{/* <!-- Holds the list of services that are free --> */}
<div className="Card-left">
    <div className="card-left-contents">
    <div className="card-left-title-container">
<span className="card-left-title">
  Free
</span>
<span className="card-left-subtitle">
  As long as you like
</span>
</div>
{/* <!-- Unordered list services left side card -->  */}
<div className="service-list-container">

<ul className="service-list">
   <li>
      Real-time Colaboration
  </li>
  <li>
      Direct to Market 
  </li>
  <li>
      AI-Assistance
  </li>
  <li>
      Content Management
  </li>
 </ul>
</div>
</div>
<div className="free-btn-container">
    <button className = "free-btn" onClick={this.props.onClickFree}>
    <span className="free-btn-Title">
    Sign up today
    </span>
    </button>
  </div>
</div>
<div className="Card-right">
<div className="card-right-content">
<div className="card-right-title-container">
  <span className="card-right-title backgroundaquamarine">
    Paid Plans
  </span>
  <span className="card-right-subtitle">
    {"Save money with annual subscription"}
  </span>
</div>
<div className="service-lists-container">
{/* <!-- Unordered list services -->  */}
<ul className="service-list-row-item">
   <li>
   Studio sessions with Platinum rappers
  </li>
  <li>
    Live Stream/Performance Analytics
  </li> 
  <li>
  Social Media Management
  </li>
  <li>
  Content Distribution
  </li>
  <li>
  Neuro-Link Brain Bit
  </li>
 </ul>

</div>
{/* <!-- Hold the 2 buttons at bottom of right card --> */}
</div>
<div className="annual-btns-container">
<button className="annual-btn width-btn1" onClick={this.props.onClickPaid}>
<span className="Button-title">
  Annual Subscription
</span>
</button>
{/* TODO Setup Paypal Button */}
{/* <button className="annual-btn-context width-btn2" onClick={this.props.onClickPaid}>
<span className="payment-context">
  Pay with Paypal!
</span>
</button> */}
</div>
</div>
</div>
{/* </div>   */}
</div>
</div>  
</div>  
    );
  }
}

