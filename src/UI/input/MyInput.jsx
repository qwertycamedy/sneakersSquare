import React from 'react'
import cl from './MyInput.module.scss'

const MyInput = ({classNames, ...props}) => {
  return (
    <input className={cl.input + ' ' + classNames} type="text" {...props} />
  )
}

export default MyInput