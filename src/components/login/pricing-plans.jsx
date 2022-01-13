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
      <span className="splash-title">
        Transparent Pricing
      </span>
      <span className="splash-subtitle">
        Lorem Ipsum Dolar
      </span>
      {/* TODO Add an image */}
      {/* <div className="image">
      <img src={logoImg} alt="BrainRap"/>
      </div> */}
      </div>
      {/* <div className="cards-container-left"> */}
<div className="card-container-row">
{/* <!-- Holds the list of services that are free --> */}
<div className="Card-left">
    <div className="card-left-contents">
    <div className="card-left-title-container">
<span className="card-title-left">
  Free Plans
</span>
<span className="card-left-subtitle">
  Try it as long as you like
</span>
</div>
{/* <!-- Unordered list services left side card -->  */}
<div className="service-list-container">

<ul className="service-list">
   <li>
   Lorem ipsum dolar
  </li>
  <li>
  Lorem ipsum dolar
  </li>
  <li>
  Lorem ipsum dolar
  </li>
 </ul>
</div>
</div>
    <button className = "free-btn" onClick={this.props.onClickFree}>
    <span className="free-btn-Title">
    Sign up for free
    </span>
    </button>
</div>
{/* <div className="card-container-right"> */}
<div className="Card-right">

<div className="card-right-content">
    <div className="card-title-row-container">
      <div className="card-right-title-container">
<span className="card-title-row backgroundaquamarine">
  Paid Plans
</span>
<span className="card-right-subtitle">
  {"Save money with annual subscription"}
</span>
</div>
<div className="Badge-container">
<div className="Badge">
<span className="card-title-row-2 backgroundaqua">
  Recommended
</span>
</div>



</div>
</div>
<div className="service-lists-container">
{/* <!-- Unordered list services -->  */}
<ul className="service-list-row-item">
   <li>
   Lorem ipsum dolar
  </li>
  <li>
  Lorem ipsum dolar
  </li>
  <li>
  Lorem ipsum dolar
  </li> 
  <li>
  Lorem ipsum dolar
  </li>
 </ul>
 {/* <!-- Unordered list services -->  */}
<ul className="service-list-row-item">
   <li>
   Lorem ipsum dolar
  </li>
  <li>
  Lorem ipsum dolar
  </li>
  <li>
  Lorem ipsum dolar
  </li>
 </ul>
</div>
{/* </div> */}
{/* <!-- Hold the 2 buttons at bottom of right card --> */}
</div>
<div className="annual-btns-container">
<button className="annual-btn width-btn1" onClick={this.props.onClickPaid}>
<span className="Button-title">
  Annual Subscription
</span>
</button>
{/* TODO Setup Paypal Button */}
<button className="annual-btn-context width-btn2" onClick={this.props.onClickPaid}>
<span className="payment-context">
  Pay with Paypal!
</span>
</button>
</div>
</div>
{/* </div>   */}
</div>
</div>  
</div>  
    );
  }
}

