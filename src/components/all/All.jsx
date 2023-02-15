import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MyBtnIcon from "../../UI/btn-icon/MyBtnIcon";
import MyInput from "../../UI/input/MyInput";
import Cards from "../cards/Cards";

const All = ({cards}) => {
  return (
    <section className="all">
      <div className="container__inner">
        <div className="all__inner">
          <div className="flex justify-between items-center mb-10">
            <h3 className="title-section">All sneakers </h3>
            <div className="search">
              <MyInput classNames='search__input' placeholder="Search..." />
              <MyBtnIcon classNames='search__btn'>
                <AiOutlineSearch />
              </MyBtnIcon>
            </div>
          </div>
          <Cards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default All;
