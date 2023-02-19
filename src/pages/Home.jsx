import React from 'react'
import Hero from '../components/hero/Hero'
import All from '../components/all/All'

const Home = ({
    cards,
    addToCart,
    addToFav,
    searchValue,
    searchValueChange,
    searchValueClear,
  }) => {
  return (
    <>
    <Hero />
    <All
      cards={cards}
      addToCart={addToCart}
      addToFav={addToFav}
      searchValue={searchValue}
      searchValueChange={searchValueChange}
      searchValueClear={searchValueClear}
    />
    </>
  )
}

export default Home