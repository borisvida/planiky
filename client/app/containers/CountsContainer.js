import React from 'react'

import apiHelper from '../utils/apiHelper'
import Counts from '../components/Counts'

class CountsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      data: "Loading..."
    }
  }
  componentDidMount() {
    apiHelper.getCounts().then((response) => { this.setState({
        isLoading: false,
        data: response.data
      })
    })
  }
  render() {
    if (this.state.isLoading)
      return <div>Loading...</div>
    else
      return <Counts data={JSON.parse(this.state.data)} />
  }
}

export default CountsContainer
