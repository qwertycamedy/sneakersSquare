import React, { useContext } from "react";
import MyBtnIcon from "../../UI/btn-icon/MyBtnIcon";
import MyLogo from "../../UI/logo/MyLogo";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import AppContext from "../../context";

const Header = ({ onCart, searchValueClear }) => {
  const { totalPrice } = useContext(AppContext);
  return (
    <header className="header">
      <div className="container__inner">
        <div className="header__inner flex items-center justify-between">
          <MyLogo />
          <div className="actions flex items-center gap-7">
            <MyBtnIcon classNames="flex gap-2.5" onClick={onCart}>
              <AiOutlineShoppingCart />
              {totalPrice} $
            </MyBtnIcon>
            <Link to="favorites" onClick={searchValueClear}>
              <MyBtnIcon>
                <AiOutlineHeart />
              </MyBtnIcon>
            </Link>
            <Link to="orders" onClick={searchValueClear}>
              <MyBtnIcon>
                <AiOutlineUser />
              </MyBtnIcon>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
