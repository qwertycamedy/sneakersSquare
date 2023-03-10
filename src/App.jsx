import { React, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "./context";
import Header from "./components/header/Header";
import "./styles/App.scss";
import Drawer from "./components/drawer/Drawer";
// import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import heroImg1 from "./assets/img/hero-1.png";
import Orders from "./pages/Orders";

import cardImg1 from "./assets/img/all-1.jpg";
import cardImg2 from "./assets/img/all-2.jpg";
import cardImg3 from "./assets/img/all-3.jpg";
import cardImg4 from "./assets/img/all-4.jpg";
import cardImg5 from "./assets/img/all-5.jpg";
import cardImg6 from "./assets/img/all-6.jpg";
import cardImg7 from "./assets/img/all-7.jpg";
import cardImg8 from "./assets/img/all-8.jpg";

function App() {
  const [heroSlides] = useState([
    {
      id: 0,
      title: "Just Do It!",
      img: heroImg1,
      bgColor: "#F2F2F2",
      btn: {
        classNames: "uppercase",
        text: "BUY",
      },
    },
    {
      id: 1,
      title: "Basketball in the heart!",
      subtitle: "As our ancestors have bequeathed...",
      img: heroImg1,
      bgColor: "#F2F2F2",
      btn: {
        classNames: "uppercase",
        text: "BUY",
      },
    },
    {
      id: 2,
      title: "Sneaker's culture!",
      img: heroImg1,
      bgColor: "#F2F2F2",
      btn: {
        classNames: " uppercase",
        text: "BUY",
      },
    },
  ]);
  const [allCards, setAllCards] = useState([
    {
      id: 1,
      img: cardImg1,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 2,
      img: cardImg2,
      title: "Jordan Air Jordan 11",
      price: "100",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 3,
      img: cardImg3,
      title: "Nike Kyrie 7",
      price: "70",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 4,
      img: cardImg4,
      title: "Nike LeBron XVIII",
      price: "90",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 5,
      img: cardImg5,
      title: "Nike Air Max 270",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 6,
      img: cardImg6,
      title: "Aka Boku Future Rider",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 7,
      img: cardImg7,
      title: "Nike Lebron XVIII Low",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 8,
      img: cardImg8,
      title: "Under Armour Curry 8",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
  ]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartCards, setCartCards] = useState([
    // {
    //   id: 1,
    //   img: "./assets/img/all-1.jpg",
    //   title: "Nike Kyrie Flytrap IV",
    //   price: "150",
    //   isLiked: false,
    //   isAdded: true,
    // },
  ]);
  const totalPrice = cartCards.reduce(
    (sum, card) => Number(sum) + Number(card.price),
    0
  );
  const [favCards, setFavCards] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // data of api
  // useEffect(() => {
  //   async function fetchData() {
  // setIsLoading(true);
  //     const cartCards = await axios.get(
  //       "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/cart-products"
  //     );
  //     const favCards = await axios.get(
  //       "https://63ee4fc1388920150ddd704c.mockapi.io/sneakers-square/favorites"
  //     );

  // setIsLoading(false);

  //     setCartCards(cartCards.data);
  //     setFavCards(favCards.data);
  //   }

  //   fetchData();
  // }, []);

  //cart
  const onCart = () => {
    setCartOpened(!cartOpened);
  };
  const addToCart = async card => {
    try {
      if (cartCards.find(item => Number(item.id) === Number(card.id))) {
        setCartCards(prev =>
          prev.filter(item => Number(item.id) !== Number(card.id))
        );
        setAllCards([
          ...allCards.map(allCard => {
            if (Number(allCard.id) === Number(card.id)) {
              allCard.isAdded = false;
            }

            return allCard;
          }),
        ]);
        setFavCards([
          ...favCards.map(favCard => {
            if (Number(favCard.id) === Number(card.id)) {
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
            if (Number(allCard.id) === Number(card.id)) {
              allCard.isAdded = true;
            }

            return allCard;
          }),
        ]);
        setFavCards([
          ...favCards.map(favCard => {
            if (Number(favCard.id) === Number(card.id)) {
              favCard.isAdded = true;
            }

            return favCard;
          }),
        ]);

        setIsOrderComplete(false);
      }
    } catch (error) {
      alert("doesn't work");
    }
  };

  const removeFromCart = card => {
    setCartCards(prev =>
      prev.filter(item => Number(item.id) !== Number(card.id))
    );
    setAllCards([
      ...allCards.map(allCard => {
        if (Number(allCard.id) === Number(card.id)) {
          allCard.isAdded = false;
        }

        return allCard;
      }),
    ]);
    setFavCards([
      ...favCards.map(favCard => {
        if (Number(favCard.id) === Number(card.id)) {
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
        setFavCards(prev =>
          prev.filter(item => Number(item.id) !== Number(card.id))
        );
        setAllCards([
          ...allCards.map(allCard => {
            if (Number(allCard.id) === Number(card.id)) {
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
            if (Number(allCard.id) === Number(card.id)) {
              allCard.isLiked = true;
            }

            return allCard;
          }),
        ]);
      }
    } catch (error) {
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

  //totalPrice

  //loading
  const onLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(onLoading, 1000);
  }, []);


  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          heroSlides,
          allCards,
          cartCards,
          favCards,
          orders,
          setCartCards,
          isOrderComplete,
          setIsOrderComplete,
          setOrders,
          totalPrice,
        }}
      >
        <div className="container">
          <div className="App">
            <Drawer
              cards={cartCards}
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
                    heroSlides={heroSlides}
                    cards={allCards}
                    cartCards={cartCards}
                    addToCart={addToCart}
                    addToFav={addToFav}
                    searchValue={searchValue}
                    searchValueChange={onSearchValueChange}
                    searchValueClear={onSearchValueClear}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path="favorites"
                element={
                  <Favorites
                    addToCart={addToCart}
                    addToFav={addToFav}
                    searchValue={searchValue}
                    isLoading={isLoading}
                  />
                }
              />
              <Route
                path="orders"
                element={
                  <Orders
                    addToCart={addToCart}
                    addToFav={addToFav}
                    searchValue={searchValue}
                    isLoading={isLoading}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
