import React from "react";
import {Header,Footer, Login,PricingPlans, Register, Start} from "./index";
import './style.scss';
// import './landing.scss';


export class Landing extends React.Component {
  constructor(props) {
    const pageLoaded = null;
    super(props);
    this.loginRegisterWrapper = React.createRef()
    this.headerFunc = React.createRef()
    this.footerFunc = React.createRef()
    this.state = {
      currentState:"initial",
      isInitialState: true,
      isLoginActive: false,
      isRegisterFree: false,
      isRegisterPaid: false
    }
  }

  setHeaderPageLoaded() {
    console.log("state isInitialState("+this.state.isInitialState+")");
    this.setHeaderFooterCurrentFunc();
    this.setPageLoaded();
  }

  toggleStateInitialize() {
    console.log("toggling state isInitialState("+this.state.isInitialState+")");
    this.setState((state) => ({isInitialState: !this.state.isInitialState}),this.setHeaderPageLoaded);
  }

  toggleStateSignin() {
    console.log("toggling state isLogginActive("+this.state.isLogginActive+")");
    //this.LoginRegisterWrapper.setState((state) => ({isLoginActive: true}));
    this.setState((state) => ({isLogginActive:!this.state.isLogginActive}),this.setPageLoaded);
  }
  
    toggleRegisterFree(){
      this.setState((state) => ({isRegisterFree:!this.state.isRegisterFree}));  
    }

    toggleRegisterPaid(){
      this.setState((state) => ({isRegisterPaid:!this.state.isRegisterPaid})); 
      console.log("is register paid = " + this.state.isRegisterPaid)
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

  getPageLoaded() {
    this.setPageLoaded();
    return this.pageLoaded;
  }

  setPageLoaded() {
    console.log(
      "this.state.isInitialState = " + this.state.isInitialState +
      "this.state.isLoginActive = " + this.state.isLoginActive +
      "this.state.isRegisterFree = " + this.state.isRegisterFree +
      "this.state.isRegisterPaid = " + this.state.isRegisterPaid
    );
    if (this.state.isInitialState) {
      console.log("Page loaded = start");
      this.pageLoaded = <Start containerRef={ref => (this.current = ref)} />;
    }
    else if ((!this.state.isInitialState && !this.state.isLoginActive) && !(this.state.isRegisterPaid || this.state.isRegisterFree)) {
      // Pass button onclicks to sub process
      console.log("Page loaded = Pricing Plans");
      this.pageLoaded = <PricingPlans
        containerRef={ref => (this.current = ref)}
        onClickFree={this.toggleRegisterFree.bind(this)}
        onClickPaid={this.toggleRegisterPaid.bind(this)} />;
    }
    else if ((!this.state.isInitialState && !this.state.isLoginActive) && this.state.isRegisterPaid) {
      console.log("Page loaded = Register Paid");
      // Pass button onclicks to sub process
      this.pageLoaded = <Register
        containerRef={ref => (this.current = ref)} />;
    }
    else if (!this.state.isInitialState && this.state.isLoginActive) {
      console.log("Page Loaded = Login");
      this.pageLoaded = <Login containerRef={ref => (this.current = ref)} />;
    }
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
    console.log("Landing Page mounted");
    this.setState(state => ({isInitialState: true}),this.setHeaderFooterCurrentFunc)
  }

  setHeaderFooterCurrentFunc() {
    console.log("Setting Header Footer current Functions");
    if (this.state.isInitialState)
      this.headerFunc.current = this.toggleStateInitialize.bind(this);
    else //TODO refactor to include multiple states  
      this.headerFunc.current = this.toggleStateSignin.bind(this);
    this.footerFunc.current = this.toggleStateSignin.bind(this);
  }

    render() {
      // const { isInitialState,isLoginActive,isRegisterFree,isRegisterPaid } = this.state;
      let pageLoaded;
      let header;
      let footer;
      pageLoaded = this.getPageLoaded();
      header = <Header
      current={this.getHeaderButtonTitle()}
      currentSub = {this.getHeaderSubTitle()}
     //  currentActive={currentActive}
      onClick={() => this.headerFunc.current()}//this.changeState.bind(this)}
     />
     footer = <Footer
     current={this.getFooterButtonTitle()}
     currentSub = {this.getFooterSubTitle()}
     onClick ={() => this.footerFunc.current()}
     />
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