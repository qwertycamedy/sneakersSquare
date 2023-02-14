import React from 'react'
import cl from './MyBtnIcon.module.scss'

const MyBtnIcon = ({classNames, children, ...props}) => {
  return (
    <button className={cl.btn + ' ' + classNames} {...props}>
        {children}
    </button>
  )
}

export default MyBtnIcon