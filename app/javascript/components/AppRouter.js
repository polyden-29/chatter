import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from 'react-redux';

import HomePage from './HomePage';
import Register from './Register';

import configureStore from '../store';

const store = configureStore()

function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home/">Home Page</Link>
              </li>
              <li>
                <Link to="/register/">Register Page</Link>
              </li>
            </ul>
          </nav>

          <Route path="/home/" component={HomePage} />
          <Route path="/register/" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default AppRouter;