import React from 'react'

import Row from '../components/Row'

const Rows = (props) => (
  <tbody>{props.data.map((pair, index) => <Row data={pair} key={index} />)}</tbody>
)


export default Rows
