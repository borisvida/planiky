import React from 'react'

const Row = (props) =>
  <tr key={props.index}>
    <td>{props.data[0]}</td>
    <td>{props.data[1]}</td>
  </tr>

export default Row
