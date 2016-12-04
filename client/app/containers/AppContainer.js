import React from 'react'

import apiHelper from '../utils/apiHelper'
import App from '../components/App'

class AppContainer  extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "Loading..."
    }
  }
  componentDidMount() {
    apiHelper.getCounts().then((response) => { this.setState({
        text: response.data
      })
    })
  }
  render() {
    return <App>{this.state.text}</App>
  }
}

export default AppContainer
