import React from "react";
import {Header,Footer, Login,PricingPlans, RegisterPaid,RegisterFree, Start,AnnualBillingSignup} from "./index";
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
      currentState: 0
    }
  }

  setupPageLoaded()
  {
    console.log("setting up page loaded state = "+this.state.isInitialState+")");
    this.setHeaderFooterCurrentFunc();
    this.setPageLoaded();

  }

  setHeaderPageLoaded() {
  }

  setStateTo(stateTo){
    console.log("setting state to "+stateTo);
    this.setState((state) => ({currentState: stateTo}),this.setupPageLoaded);  
  }
  getHeaderButtonTitle() {
    if(this.state.currentState == 0)
      return "Join";
    else
    return this.state.currentState == 4 ? "Register" : "Login";
  }

  getHeaderSubTitle() {
    if(this.state.currentState == 0)
      return "Dont have an account?";
    else
      return this.state.currentState == 4 ? "Dont have an account?" : "Already have an account?";
      }
   
  getFooterButtonTitle() {
    return this.state.currentState == 4 ? "Sign up and create your account" : "Sign in and manage your account";
  }
  
  getFooterSubTitle() {
    return this.state.currentState == 4 ? "Dont have an account?" : "Already have an account?";    
      }

  getPageLoaded() {
    this.setPageLoaded();
    return this.pageLoaded;
  }

  setPageLoaded() {
    console.log(
      "this.state.currentState = " + this.state.currentState
    );
    if (this.state.currentState == 0) {
      console.log("Page loaded = start");
      this.pageLoaded = <Start containerRef={ref => (this.current = ref)} />;
    }
    else if (this.state.currentState == 1) {
      // Pass button onclicks to sub process
      console.log("Page loaded = Pricing Plans");
      this.pageLoaded = <PricingPlans
        containerRef={ref => (this.current = ref)}
        onClickFree={ () => this.setStateTo(2)}
        onClickPaid={() => this.setStateTo(3)} />;
    }
    else if (this.state.currentState == 2) {
      console.log("Page loaded = Register Free");
      // Pass button onclicks to sub process
      this.pageLoaded = <RegisterFree
        containerRef={ref => (this.current = ref)} 
        //TODO add sent you an email screen onClick
        />;
    }
    else if (this.state.currentState == 3) {
      console.log("Page loaded = Register Paid");
      // Pass button onclicks to sub process
      this.pageLoaded = <RegisterPaid
        containerRef={ref => (this.current = ref)} 
        onSignUpClick = {() => this.setStateTo(5)}
        />;
    }
    else if (this.state.currentState == 4) {
      console.log("Page Loaded = Login");
      this.pageLoaded = <Login containerRef={ref => (this.current = ref)} />;
    }
    else if (this.state.currentState == 5) {
      console.log("Page Loaded = Payment Processing");
      this.pageLoaded = <AnnualBillingSignup containerRef={ref => (this.current = ref)} />;
    }
  }

  // syncs the animated card element with login and register class names
  syncAnimatedCardDisplay() {
    // Toggles the login state animation tag
    //4 is default login screen - todo animate later
    if (this.state.current == 4) {
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
    if (this.state.currentState == 0)
      this.headerFunc.current = () => this.setStateTo(1);
    else if(this.state.currentState == 4) //TODO refactor to include multiple states  
      this.headerFunc.current = () => this.setStateTo(1);
    else
    //TODO refactor - can see the potential to break
      this.headerFunc.current = () => this.setStateTo(4);
    this.footerFunc.current = () => this.setStateTo(4);
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