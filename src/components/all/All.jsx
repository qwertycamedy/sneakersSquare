import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import MyBtnIcon from "../../UI/btn-icon/MyBtnIcon";
import MyInput from "../../UI/input/MyInput";
import Cards from "../cards/Cards";

const All = ({
  cards,
  cartCards,
  addToCart,
  addToFav,
  searchValue,
  searchValueChange,
  searchValueClear,
  isLoading,
}) => {
  return (
    <section className="all">
      <div className="container__inner">
        <div className="all__inner">
          <div className="flex justify-between items-center mb-10">
            <h3 className="title-section">
              {
                searchValue ? `Search for: "${searchValue}"` : 'All sneakers'
              }
              </h3>
            <div className="search">
              <MyInput
                classNames="search__input"
                placeholder="Search..."
                onChange={searchValueChange}
                value={searchValue}
              />
              <MyBtnIcon classNames="search__btn">
                <AiOutlineSearch />
              </MyBtnIcon>
              {searchValue && (
                <MyBtnIcon classNames="search__clear" onClick={searchValueClear}>
                  <IoClose />
                </MyBtnIcon>
              )}
            </div>
          </div>
          <Cards
            cards={cards}
            cartCards={cartCards}
            addToCart={addToCart}
            addToFav={addToFav}
            searchValue={searchValue}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
};

export default All;
