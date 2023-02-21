import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs'
import MyBtn from '../../UI/btn/MyBtn'

const Info = ({classNames, img, title, subtitle, onHide}) => {
  return (
    <div className={`empty ${classNames}`}>
      <img className="empty__img mb-5" src={img} alt="empty" />
      <div className="empty__title mb-2">{title}</div>
      <div className="empty__subtitle mb-10">
        {subtitle}
      </div>
      <Link to="/" className="w-full">
        <MyBtn classNames="empty__btn w-10" onClick={onHide}>
          <BsArrowLeftShort />
          Go back
        </MyBtn>
      </Link>
    </div>
  )
}

export default Info