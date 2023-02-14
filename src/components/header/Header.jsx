import React from "react";
import MyBtnIcon from "../../UI/btn-icon/MyBtnIcon";
import MyLogo from "../../UI/logo/MyLogo";
import {AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser} from 'react-icons/ai';

const Header = () => {
  return (
    <header className="header">
        <div className="container__inner">
        <div className="header__inner flex items-center justify-between">
            <MyLogo />
            <div className="actions flex items-center gap-7">
              <MyBtnIcon classNames='gap-2.5'>
                <AiOutlineShoppingCart />
                1205 руб.
              </MyBtnIcon>
              <MyBtnIcon>
                <AiOutlineHeart />
              </MyBtnIcon>
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
