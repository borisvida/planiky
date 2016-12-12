import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, browserHistory, IndexRoute} from "react-router"

import AppContainer from './containers/AppContainer'
import CountsContainer from './containers/CountsContainer'
import Welcome from './components/Welcome'
import NotFound from './components/NotFound'

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Welcome} />
        <Route path="counts" component={CountsContainer}/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>, document.getElementById('app'))
