import React from 'react'
import cl from './MyBtnEllipse.module.scss'

const MyBtnEllipse = ({classNames, children, ...props}) => {
  return (
    <button className={cl.btn + ' ' + classNames} {...props}>
        {children}
    </button>
  )
}

export default MyBtnEllipse