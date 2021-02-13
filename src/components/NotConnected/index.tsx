import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotConnected = () => {
  return (
    <div style={{ fontSize: 17, color: 'white' }}>
      <p className="p-notfound ">Wallet is not Connected</p>
      <Link to="/" className="button1">
        <i className="icon-home"></i>
      </Link>
    </div>
  )
}
export default NotConnected
