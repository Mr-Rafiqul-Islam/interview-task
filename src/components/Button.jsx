import React from 'react'
import cn from '../lib/cn'
function Button({className, text, ...restprops}) {
  return (
    <button className={cn(`bg-btn hover:bg-btn-hover text-white px-6 py-3 uppercase transition-all duration-500` , className)} {...restprops}>{text}</button>
  )
}

export default Button