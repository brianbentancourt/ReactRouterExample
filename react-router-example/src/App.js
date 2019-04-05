import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/">Example</Link>
              <Link to="/page1">Page 1</Link>
              <Link to="/page2">Page 2</Link>
              <Link to="/page3">Page 3</Link>
            </header>

            <main>
              {/* <Route exact path="/" component={Home} /> */}
              {/* <Route path="/recipe/:recipeId" component={Recipe} /> */}
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route path="/page3" component={Page3} />
            </main>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
