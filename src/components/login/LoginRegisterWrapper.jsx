import React from "react";
import { Login, Register } from "./index";
import { AnimatedButton } from "./landing";





export class LoginRegisterWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: this.props.isLoginActive
    };
  }

  componentDidMount() {
    this.syncAnimatedCardDisplay();
  }

  componentWillUnmount() {
    // this.props.onRef(undefined)
  }

  componentDidUpdate() {
    this.syncAnimatedCardDisplay();
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

  render() {
    const isLoginActive = this.loginActive;
    // const { isLoginActive: isLogginActive } = this.loginActive;//this.state;
    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "login" : "register";
    const currentSub = !isLoginActive ? "Register" : "Login";


    return (
      <div className="Brainrap-V1">
        <div className="landing-wrapper">
          {/* <Header
                 current={current}
                 currentSub = {currentSub}
                 currentActive={currentActive}
                 onClick={this.props.toggleLogin}//changeState.bind(this)}
                /> */}
          {/* Show the Start Page */}
          {/* Here is where card animation is drawn can switch to button being selected*/}
          <div className="login">
            <div className="container" ref={ref => (this.container = ref)}>
              {isLoginActive && (
                <Login containerRef={ref => (this.current = ref)} />
              )}
              {!isLoginActive && (
                <Register containerRef={ref => (this.current = ref)} />
              )}
            </div>
            {/* <Footer
                 current={currentFooter}
                 currentSub = {currentSubFooter}
                //  TODO open Register of signin
                 onClick={this.changeState.bind(this)}
                /> */}
            <AnimatedButton
              current={current}
              currentActive={currentActive}
              containerRef={ref => (this.rightSide = ref)}
              onClick={this.props.toggleLogin} />
          </div>
        </div>
      </div>
    );
  }
}
