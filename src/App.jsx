import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import All from "./components/all/All";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./styles/App.scss";
import allCardImg1 from "./assets/img/all-1.jpg";
import allCardImg2 from "./assets/img/all-2.jpg";
import allCardImg3 from "./assets/img/all-3.jpg";
import allCardImg4 from "./assets/img/all-4.jpg";
import allCardImg5 from "./assets/img/all-5.jpg";
import allCardImg6 from "./assets/img/all-6.jpg";
import allCardImg7 from "./assets/img/all-7.jpg";
import allCardImg8 from "./assets/img/all-8.jpg";

function App() {
  const [allCards, setAllCards] = useState([
    {
      id: 1,
      img: allCardImg1,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: true,
    },
    {
      id: 2,
      img: allCardImg2,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: true,
      isAdded: false,
    },
    {
      id: 3,
      img: allCardImg3,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 4,
      img: allCardImg4,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 5,
      img: allCardImg5,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 6,
      img: allCardImg6,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 7,
      img: allCardImg7,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
    {
      id: 8,
      img: allCardImg8,
      title: "Nike Kyrie Flytrap IV",
      price: "150",
      isLiked: false,
      isAdded: false,
    },
  ]);
  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Header />
          <Hero />
          <All cards={allCards} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
