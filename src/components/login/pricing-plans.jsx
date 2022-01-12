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
      <div className="cards-container-left">
<div className="card-container-row">
{/* <!-- Holds the list of services that are free --> */}
<div className="Card-left">
    <div className="card-left-contents">
    <div className="card-left-title-container">
<span className="card-title">
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
    <button className = "free-btn">
    <span className="free-btn-Title">
    Sign up for free
    </span>
    </button>
</div>
<div className="card-container-right">
<div className="Card-right">
<div className="card-left-contents">
    <div className="card-title-row-container">
<span className="card-title-row backgroundaquamarine">
  Paid Plans
</span>
<div className="Badge">
<span className="card-title-row-2 backgroundaqua">
  Recommended
</span>
</div>
</div>
<span className="card-right-subtitle">
Sign up for an annual subscription and save
</span>
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
</div>
{/* <!-- Hold the 2 buttons at bottom of right card --> */}
<div className="annual-btns-container">
<button className="annual-btn width-btn1" onClick={this.props.onClickPaid}>
<span className="Button-title">
  Sign up for annual subscription plan ($2,500)
</span>
</button>
{/* TODO Setup Paypal Button */}
<button className="annual-btn width-btn2" onClick={this.props.onClickPaid}>
<span className="Button-title">
  Pay with Zip
</span>
</button>
</div>
</div>
</div>
</div>  
</div>  
</div>  
    );
  }
}

