import React from "react";
import loginImg from "../../login.svg";
import logoImg from "../../img/brainrap-logo.svg";
import {Header} from "./index";

import './start.scss';
// import './debug.scss';

export class Start extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-container backgroundgray"ref={this.props.containerRef}>
<div className="card-header">
{/* <div className="card-header-list backgroundcadetblue"> */}
<div className="service-container">
  <div className="service">
<span className="card-header-label backgroundaquamarine">
  Artists
</span>
<span className="card-header-text backgroundaquamarine">
  #####
</span>
</div>
{/* </div> */}
{/* <div className="card-header-list"> */}
<div className="service">
<span className="card-header-label backgroundaquamarine">
  Albums
</span>
<span className="card-header-text backgroundaquamarine">
  #####
</span>
</div>
{/* </div> */}
{/* <div className="card-header-list"> */}
<div className="service">
<span className="card-header-label backgroundaquamarine">
  Songs
</span>
<span className="card-header-text backgroundaquamarine">
  #####
</span>
</div>
{/* </div> */}
{/* <div className="card-header-list"> */}
<div className="service">
<span className="card-header-label backgroundaquamarine">
  Impressions
</span>
<span className="card-header-text backgroundaquamarine">
  #####
</span>
</div>
{/* </div> */}
{/* <div className="card-header-list"> */}
<div className="service">
<span className="card-header-label backgroundaquamarine">
  Gross$
</span>
<span className="card-header-text backgroundaquamarine">
  #####
</span>
</div>
{/* </div> */}
{/* <div className="card-header-list"> */}
<div className="service">
<span className="card-header-label backgroundaquamarine">
  Top$
</span>
<span className="card-header-text backgroundaquamarine">
  #####
</span>
</div>
</div>
</div>

{/* </div> */}
  {/* <!-- Card --> */}
<div className="Card">
<div className="card-left">
  <div className="card-title-container">
<span className="card-title">
  Join
</span>
<span className="card-subtitle">
  Start creating right now
</span>
</div>
<div className="card-list-container">
{/* <!-- Unordered list services left side card -->  */}
<ul className="card-list">
   <li>
     Create music
  </li>
  <li>
    Imporve craft
  </li>
  <li>
    Make money
  </li>
 </ul>
 </div>
</div>
 {/* <!-- Frame right side of card --> */}
<div className="card-right">
 <div className="Frame">
<img className="frame-img" src={logoImg} alt="BrainRap"/>
</div>
</div>
  {/* <!-- Button Below Card --> */}
 </div>
 </div>
    );
  }
}
