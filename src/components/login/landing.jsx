import React from "react";
import {Login, Register } from "./index";
import './style.scss';

export class Landing extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // TODO when loggin is active = false there is bug where button doesn't appear in correct place
        isLogginActive: false,
      }
    }

    componentDidMount() {
      this.changeState();
    }
    
    changeState() {
      // Sets the login state
      const { isLogginActive } = this.state;
      
      if (isLogginActive) {
        // Mounts the left or the right side button
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
      } else {
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
      }
      this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    }
  
    render() {
      const { isLogginActive } = this.state;
      const current = isLogginActive ? "Register" : "Login";
      const currentActive = isLogginActive ? "login" : "register";
      
      return (
        <div className="landing-wrapper">
          <Header
           current={current}
           currentActive={currentActive}
           onClick={this.changeState.bind(this)}
          />
          <div className="login">
            <div className="container" ref={ref => (this.container = ref)}>
              {isLogginActive && (
                <Login containerRef={ref => (this.current = ref)} />
              )}
              {!isLogginActive && (
                <Register containerRef={ref => (this.current = ref)} />
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={ref => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
        );
  }
  
}

const Header = props => {
  return (
    <div
      className="Header---Controls"
      
    >
    <button class="btn btn-signin" onClick={props.onClick}>
          <span class="btn-signin-title">
            Sign In
          </span>
          </button>
        <span class="Already-have-an-account">
          Already have an account?
        </span>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
