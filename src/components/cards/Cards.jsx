import React from 'react'
import Card from './card/Card'
import cl from './Cards.module.scss'

const Cards = ({cards}) => {
  return (
    <div className={cl.cards}>
        {
            cards.map(card => (
                <Card key={card.id} card={card} />
            ))
        }
    </div>
  )
}

export default Cards