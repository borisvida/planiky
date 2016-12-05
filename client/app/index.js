import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, browserHistory} from "react-router"

import AppContainer from './containers/AppContainer'
import CountsContainer from './containers/CountsContainer'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="counts" component={CountsContainer} />
    </Route>
  </Router>
  , document.getElementById('app'))
