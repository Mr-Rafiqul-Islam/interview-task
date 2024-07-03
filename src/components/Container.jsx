import React from 'react'

function Container({children, className}) {
  return (
    <div className={`container mx-auto px-2 sm:px-0 ${className}`}>{children}</div>
  )
}

export default Container