import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from './Home';
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

              <nav>
                <Link  to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                <Link className="LinkTo" to="/">Home</Link>
                <Link className="LinkTo" to="/page1">Page 1</Link>
                <Link className="LinkTo" to="/page2/4043">Page 2 with id</Link>
                <Link className="LinkTo" to="/page3">Page 3</Link>
              </nav>

            </header>

            <main>
              {/* <Route path="/recipe/:recipeId" component={Recipe} /> */}
              <Route exact path="/" component={Home} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2/:id" component={Page2} />
              <Route path="/page3" component={Page3} />
            </main>

            <footer className="Footer">
              ReactRouterExample
            </footer>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
