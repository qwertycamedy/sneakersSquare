import { React, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import All from "./components/all/All";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./styles/App.scss";
import Drawer from "./components/drawer/Drawer";

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
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(
    () =>
      fetch(
        "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/products"
      )
        .then(res => {
          return res.json();
        })
        .then(json => {
          setAllCards(json);
        }),
    []
  );

  const onCartClick = () => {
    setCartOpened(!cartOpened);
  };
  const onLikeToggle = id => {
    setAllCards(
      allCards.map(card => {
        if (card.id === id) {
          card.isLiked = !card.isLiked;
        }
        return card;
      })
    );
  };
  const onAddToggle = id => {
    setAllCards(
      allCards.map(card => {
        if (card.id === id) {
          card.isAdded = !card.isAdded;
        }
        return card;
      })
    );
  };
  const onSearchValueChange = e => {
    setSearchValue(e.target.value);
  };
  const onSearchValueClear = e => {
    setSearchValue('');
  };

  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Drawer
            cards={allCards}
            cartPrices={cartPrices}
            opened={cartOpened}
            onHide={onCartClick}
            onAddToggle={onAddToggle}
          />
          <Header
            onCartClick={onCartClick}
          />
          <Hero />
          <All
            cards={allCards}
            onLikeToggle={onLikeToggle}
            onAddToggle={onAddToggle}
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
