import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from 'react-redux';

import HomePage from './HomePage';
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
            </ul>
          </nav>

          <Route path="/home/" component={HomePage} />
        </div>
      </Router>
    </Provider>
  );
}

export default AppRouter;