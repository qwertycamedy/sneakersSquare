import { React, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import All from "./components/all/All";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./styles/App.scss";
import Drawer from "./components/drawer/Drawer";
import axios from "axios";

function App() {
  const [cartPrices] = useState([
    {
      id: 1,
      descr: "Total:",
      price: "325",
    },
    {
      id: 2,
      descr: "Tax 5%:",
      price: "16.25",
    },
  ]);
  const [allCards, setAllCards] = useState([]);
  const [cartCards, setCartCards] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // data of api
  useEffect(() => {
    axios
      .get(
        "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/products"
      )
      .then(res => {
        setAllCards(res.data);
      });
  }, []);

  //cart
  const onCartClick = () => {
    setCartOpened(!cartOpened);
  };
  const addToCart = card => {
    setCartCards(prev => [...prev, card]);
  };
  const removeFromCart = card => {
    setCartCards(cartCards.filter(c => c !== card));
  };
  //search
  const onSearchValueChange = e => {
    setSearchValue(e.target.value);
  };
  const onSearchValueClear = e => {
    setSearchValue("");
  };

  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Drawer
            cards={cartCards}
            cartPrices={cartPrices}
            opened={cartOpened}
            onHide={onCartClick}
            removeFromCart={removeFromCart}
          />
          <Header onCartClick={onCartClick} />
          <Hero />
          <All
            cards={allCards}
            addToCart={addToCart}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchValueChange={onSearchValueChange}
            searchValueClear={onSearchValueClear}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
