import React from 'react'

import apiHelper from '../utils/apiHelper'
class App  extends React.Component {
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
    return <div>{this.state.text}</div>
  }
}

export default App
