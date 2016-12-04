import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, browserHistory} from "react-router"

import AppContainer from './containers/AppContainer'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
    </Route>
  </Router>
  , document.getElementById('app'))
