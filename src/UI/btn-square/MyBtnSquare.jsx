import React from 'react'
import cl from './MyBtnSquare.module.scss'

const MyBtnSquare = ({classNames, children, ...props}) => {
  return (
    <button className={cl.btn + ' ' + classNames} {...props}>
        {children}
    </button>
  )
}

export default MyBtnSquare