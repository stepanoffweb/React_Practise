import React, {Fragment} from 'react'
import './style.css'

const styles = {fontSize: '28px', color: 'red', textTransform: 'uppercase', textDecoration: 'line-through dotted green'}

const Columns = () => ([
  <td key={1} style={styles}>Inline | </td>,
  <td key={2} className="title">Simple class</td>
  ])

export const Table = () => (
  <Fragment>
    <table>
      <tbody>
        <tr>
        <Columns />
        </tr>
      </tbody>
    </table>

  </Fragment>
   )
