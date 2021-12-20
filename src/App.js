import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";


import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  apiKey= process.env.REACT_APP_NEWS_API_KEY;

  state={progress:0};

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>

        <Router>
          <Navbar />

          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />


          <Routes>
            <Route
              exact
              path="/"
              element={
                <News 
                setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"general"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News 
                setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"business"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News 
                setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"health"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News 
                setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"science"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News 
                setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"sports"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News 
                setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"technology"}
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News 
                setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"entertainment"}
                  apiKey={this.apiKey}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
