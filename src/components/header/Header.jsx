import React from "react";
import MyBtnIcon from "../../UI/btn-icon/MyBtnIcon";
import MyLogo from "../../UI/logo/MyLogo";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ onCart, searchValueClear }) => {
  return (
    <header className="header">
      <div className="container__inner">
        <div className="header__inner flex items-center justify-between">
          <MyLogo />
          <div className="actions flex items-center gap-7">
            <MyBtnIcon classNames="flex gap-2.5" onClick={onCart}>
              <AiOutlineShoppingCart />
              205 $
            </MyBtnIcon>
            <Link to="favorites" onClick={searchValueClear}>
              <MyBtnIcon>
                <AiOutlineHeart />
              </MyBtnIcon>
            </Link>
            <MyBtnIcon>
              <AiOutlineUser />
            </MyBtnIcon>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
