import React from 'react'

const Button = ({log}) => {
  return (
      <a href="/signup" className="mx-3"><button className="btn btn-primary">{log ? "Log Out":"LogIn"}</button></a>
  )
}

export default Button
