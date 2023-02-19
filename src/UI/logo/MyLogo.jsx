import React from 'react'
import { Link, } from "react-router-dom";
import logoImg from "../../assets/img/logo.svg";
import cl from './MyLogo.module.scss'

const MyLogo = () => {
  return (
    <Link to="/" className={cl.logo + " logo"}>
      <img src={logoImg} alt="img" />
      <span className="flex flex-col">
        <span className="font-bold uppercase">sneakers square</span>
        <span>Store better sneakers</span>
      </span>
    </Link>
  )
}

export default MyLogo