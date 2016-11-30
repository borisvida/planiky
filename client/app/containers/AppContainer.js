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
    return <App text={this.state.text} />
  }
}

export default AppContainer
