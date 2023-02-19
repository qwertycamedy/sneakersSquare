import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import "./styles/App.scss";
import Drawer from "./components/drawer/Drawer";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [allCards, setAllCards] = useState([
    {
      id: 1,
      img: "./assets/img/all-1.jpg",
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 2,
      img: "./assets/img/all-2.jpg",
      title: "Jordan Air Jordan 11",
      price: "100",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 3,
      img: "./assets/img/all-3.jpg",
      title: "Nike Kyrie 7",
      price: "70",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 4,
      img: "./assets/img/all-4.jpg",
      title: "Nike LeBron XVIII",
      price: "90",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 5,
      img: "./assets/img/all-5.jpg",
      title: "Nike Air Max 270",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 6,
      img: "./assets/img/all-6.jpg",
      title: "Aka Boku Future Rider",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 7,
      img: "./assets/img/all-7.jpg",
      title: "Nike Lebron XVIII Low",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 8,
      img: "./assets/img/all-8.jpg",
      title: "Under Armour Curry 8",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
  ]);
  const [cartOpened, setCartOpened] = useState(false);
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
  const [cartCards, setCartCards] = useState([]);
  const [favCards, setFavCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // data of api
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/cart-products"
  //     )
  //     .then(res => {
  //       setCartCards(res.data);
  //     });
  //   axios
  //     .get(
  //       "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/favorites"
  //     )
  //     .then(res => {
  //       setFavCards(res.data);
  //     });
  // }, []);

  //cart
  const onCart = () => {
    setCartOpened(!cartOpened);
  };
  const addToCart = async card => {
    try {
      if (cartCards.find(item => item.id === card.id)) {
        setCartCards(prev => prev.filter(item => item.id !== card.id));
        setAllCards([
          ...allCards.map(allCard => {
            if (allCard.id === card.id) {
              allCard.isAdded = false;
            }

            return allCard;
          }),
        ]);
        setFavCards([
          ...favCards.map(favCard => {
            if (favCard.id === card.id) {
              favCard.isAdded = false;
            }

            return favCard;
          }),
        ]);

        // axios.delete(
        //   `https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/cart-products/${card.id}`
        // );
      } else {
        // const { data } = await axios.post(
        //   "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/cart-products",
        //   card
        // );
        setCartCards(prev => [
          ...prev,
          {
            ...card,
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
        setFavCards([
          ...favCards.map(favCard => {
            if (favCard.id === card.id) {
              favCard.isAdded = true;
            }

            return favCard;
          }),
        ]);
      }
    } catch {
      alert("doesn't work");
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
    setFavCards([
      ...favCards.map(favCard => {
        if (favCard.id === card.id) {
          favCard.isAdded = false;
        }

        return favCard;
      }),
    ]);
    // axios.delete(
    //   `https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/cart-products/${card.id}`
    // );
  };

  //favorite
  const addToFav = async card => {
    try {
      if (favCards.find(item => item.id === card.id)) {
        setFavCards(prev => prev.filter(item => item.id !== card.id));
        setAllCards([
          ...allCards.map(allCard => {
            if (allCard.id === card.id) {
              allCard.isLiked = false;
            }

            return allCard;
          }),
        ]);

        // axios.delete(
        //   `https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/favorites/${card.id}`
        // );
      } else {
        // const { data } = await axios.post(
        //   "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/favorites",
        //   card
        // );
        setFavCards(prev => [
          ...prev,
          {
            ...card,
            isLiked: true,
          },
        ]);
        setAllCards([
          ...allCards.map(allCard => {
            if (allCard.id === card.id) {
              allCard.isLiked = true;
            }

            return allCard;
          }),
        ]);
      }
    } catch {
      alert("doesn't work");
    }
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
          <Header onCart={onCart} searchValueClear={onSearchValueClear} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  cards={allCards}
                  addToCart={addToCart}
                  addToFav={addToFav}
                  searchValue={searchValue}
                  searchValueChange={onSearchValueChange}
                  searchValueClear={onSearchValueClear}
                />
              }
            />
            <Route
              path="favorites"
              element={
                <Favorites
                  cards={favCards}
                  addToCart={addToCart}
                  addToFav={addToFav}
                  searchValue={searchValue}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
