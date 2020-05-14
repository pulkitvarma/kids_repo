/*global chrome*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    // chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    //   const url = new URL(tabs[0].url);
    //   const domain = url.hostname;
    //   this.setState({
    //     domain: domain,
    //   });
    //   this.getHeadlines(domain);
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.isExt ?
            <img src={chrome.runtime.getURL("static/media/logo.svg")} className="App-logo" alt="logo" />
            :
            <img src={logo} className="App-logo" alt="logo" />
          }

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
