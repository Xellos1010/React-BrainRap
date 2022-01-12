import React from "react";
import {Header,Footer, Login, Register, Start} from "./index";
import './style.scss';
// import './landing.scss';


export class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.loginRegisterWrapper = React.createRef()
    this.headerFunc = React.createRef()
    this.footerFunc = React.createRef()
    this.state = {
      isInitialState: true,
      isLoginActive: false
    }
  }



  toggleStateInitialize() {
    this.setState((state) => ({isInitialState: !this.state.isInitialState}));
  }

  toggleStateSignin() {
    //this.LoginRegisterWrapper.setState((state) => ({isLoginActive: true}));
    this.setState((state) => ({isLogginActive:!this.state.isLogginActive}));
    
  }

  getHeaderButtonTitle() {
    if(this.state.isInitialState)
      return "Join";
    else
    return this.state.isLoginActive ? "Register" : "Login";
  }

  getHeaderSubTitle() {
    if(this.state.isInitialState)
      return "Dont have an account?";
    else
      return this.state.isLoginActive ? "Dont have an account?" : "Already have an account?";
      }
   
  getFooterButtonTitle() {
    return this.state.isLoginActive ? "Sign up and create your account" : "Sign in and manage your account";
  }
  
  getFooterSubTitle() {
    return this.state.isLoginActive ? "Dont have an account?" : "Already have an account?";    
      }

  getPageLoaded(isInitialState, pageLoaded, isLoginActive) {
    if (isInitialState) {
      pageLoaded = <Start containerRef={ref => (this.current = ref)}/>;
    }
    else if (!isInitialState && !isLoginActive) {
      // Pass button onclicks to sub process
      pageLoaded = <Register containerRef={ref => (this.current = ref)} />;
    }
    else if (!isInitialState && isLoginActive) {
      pageLoaded = <Login containerRef={ref => (this.current = ref)} />;
    }
    return pageLoaded;
  }
  // syncs the animated card element with login and register class names
  syncAnimatedCardDisplay() {
    // Toggles the login state
    //this.setState(state => ({ isLogginActive: !state.isLogginActive}));
    // const { isLoginActive: isLogginActive } = this.state;
    const isLoginActive = this.state.isLoginActive;
    if (isLoginActive) {
      // Mounts the left or the right side button
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
  }
    //Always start on the start page - TODO in future track which page user left off on
  componentDidMount() {
    this.setState(state => ({isInitialState: true})) 
    this.headerFunc.current = this.toggleStateInitialize.bind(this);
    this.footerFunc.current = this.toggleStateSignin.bind(this);
  }

    render() {
      // const { isLogginActive } = this.state;
      const { isInitialState,isLoginActive } = this.state;
      let pageLoaded;
      let header;
      let footer;

      header = <Header
      current={this.getHeaderButtonTitle()}
      currentSub = {this.getHeaderSubTitle()}
     //  currentActive={currentActive}
      onClick={() => this.headerFunc.current()}//this.changeState.bind(this)}
     />
     footer = <Footer
     current={this.getFooterButtonTitle()}
     currentSub = {this.getFooterSubTitle()}
     onClick ={this.footerFunc.current}
     />
// Temporary page load manager TODO research optimized approach
    //  Initialize Page Loaded
      pageLoaded = this.getPageLoaded(isInitialState, pageLoaded, isLoginActive);
      return (
        <div className="Brainrap-V1">
          {header}
          <div className="landingPageContainer">
            {/* Show the Page*/}
            {pageLoaded}
          </div>
          {footer}
        </div>
        );
  }

  
}

// Custom Animated button showing login and register - Nod to the original tutorial
export const AnimatedButton = props => {
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