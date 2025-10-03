import React from 'react'

const ErrorMsg = ({items}) => {

  return (
    <div>
      {items.length === 0 ? <p>No food items available</p>:null}
    </div>
  )
}

export default ErrorMsg
