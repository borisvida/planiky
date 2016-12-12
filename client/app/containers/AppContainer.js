import React from 'react'
import {Link} from 'react-router'

import App from '../components/App'

const AppContainer = (props) =>
  <App>
    <div>
      <Link to="/">Home</Link> |&nbsp;
      <Link to="/counts">Counts</Link>
    </div>
    {props.children}
  </App>

export default AppContainer
