import React from 'react'
import {Link} from 'react-router'

import apiHelper from '../utils/apiHelper'
import App from '../components/App'

const AppContainer = (props) => <App>Vitajte v aplikácii Plániky! <Link to="/counts">Counts</Link> {props.children}</App>

export default AppContainer
