import React from "react";
import "./App.scss";

// Handles loading and unloading pages given token state
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// States to load within the app
import {Dashboard,Preferences} from './components/dashboard/index';

import {Landing, Login, Register } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }
  
  
  
  render() {
   

    return (
      <div className="App">
         <div className="wrapper">
        {/* <h1>Application</h1> */}
        <BrowserRouter>
          <Routes >
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/preferences" element={<Preferences/>} />
            <Route path="/" element={<Landing/>}/>
              
            {/* <div className="login">
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
            </div> */}
          </Routes >
        </BrowserRouter>
      </div>
      </div>
    );
        {/* 
    ); */}
  }
}

export default App;
