import React from 'react'
import cl from './MyBtn.module.scss'

const MyBtn = ({classNames, children, ...props}) => {
  return (
    <button className={cl.btn + ' ' + classNames} {...props}>
        {children}
    </button>
  )
}

export default MyBtn