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
    axios
      .get(
        "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/cart-products"
      )
      .then(res => {
        setCartCards(res.data);
      });
  }, []);

  //cart
  const onCart = () => {
    setCartOpened(!cartOpened);
  };
  const addToCart = card => {
    if (card.isAdded === false) {
      setCartCards(prev => [
        ...prev,
        {
          id: card.id,
          img: card.img,
          title: card.title,
          price: card.price,
          isLiked: card.islLiked,
          isAdded: true,
        },
      ]);
      setAllCards([
        ...allCards.map(allCard => {
          if (allCard.id === card.id) {
            allCard.isAdded = true;
          }

          return allCard;
        }),
      ]);
      axios.post(
        "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/cart-products",
        card
      );
    }
  };

  const removeFromCart = card => {
    setCartCards(prev => prev.filter(item => item.id !== card.id));
    setAllCards([
      ...allCards.map(allCard => {
        if (allCard.id === card.id) {
          allCard.isAdded = false;
        }

        return allCard;
      }),
    ]);
    axios.delete(
      `https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/cart-products/${card.id}`
    );
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
            onHide={onCart}
            onRemove={removeFromCart}
          />
          <Header onCart={onCart} />
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
