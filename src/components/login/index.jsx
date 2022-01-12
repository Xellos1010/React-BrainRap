import "./style.scss";
// import './debug.scss';

import React from "react";
export { Login } from "./login";
export { Register } from "./register";
export { Start } from "./start";
export { Landing } from "./landing";


export const Header = props => {
    return (
      <div
        className="Header---Controls backgroundblue"
      >
          <div className="controlsContainer backgroundaqua">
      <button className="btnHeader" onClick={props.onClick}>
            <span className="btnHeaderTitle">
            {props.current}
            </span>
            </button>
          <span className="contextText">
            {props.currentSub}
          </span>
          </div>
      </div>
    );
  };
  
  export const Footer = props => {
    return (
      <div className="footerContainer">
        {/* <!-- Button Below Card --> */}
        <span className="footerControls">
        <p>{props.currentSub}</p>
        <button className="footerButton" onClick={props.onClick}>
            <u>
            {props.current}
            </u>
        </button>
        </span>
    </div>
  );
  };

// export class Footer extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render(){    
//         return (
//             <div>
//             {/* <!-- Button Below Card --> */}
//             <span className="card-footer">
//             <p>{props.current}</p><button className="signin-btn" onClick={props.onClick}><u>{props.currentSub}</u></button>
//             </span>
//             </div>
//         )
//     }
// }