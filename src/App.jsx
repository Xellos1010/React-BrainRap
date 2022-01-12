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
      count:0,
      activeState:"start"
    };
  }
  
  render() {
   

    return (
      <div>
        {/* Application main router */}
        <BrowserRouter>
          <Routes >
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/preferences" element={<Preferences/>} />
            <Route path="/" element={<Landing/>}/>
          </Routes >
        </BrowserRouter>
      </div>
    );
        {/* 
    ); */}
  }
}

export default App;
