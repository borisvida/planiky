import React from 'react'

import apiHelper from '../utils/apiHelper'
import Counts from '../components/Counts'

class CountsContainer extends React.Component {
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
    return <Counts text={this.state.text} />
  }
}

export default CountsContainer
