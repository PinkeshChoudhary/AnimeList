import React from 'react'
import WatchAnimeCard from './WatchAnimeCard'

export const Watchlist = (props) => {

  const watchlistIds = props.watchList.map(({ mal_id }) => mal_id)

  const onDrop = (e) => {
    const dragId = JSON.parse(e.dataTransfer.getData('item_id'))
    e.preventDefault()
    if (!watchlistIds.includes(dragId)) {
      props.updateWatchList(dragId)
    }
  }

  return (
    <>
      <div className="cart-container"
        droppable={true}
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}

      >
        <p className="cart-title">Your WatchList</p>
        <div className="watchlistcard">

          {props.watchList.length > 0 ?
            props.watchList.map((el) => <WatchAnimeCard item={el}
              deleteAnimeCard={props.deleteAnimeCard} />)
            :
            <p style={{ marginTop: '5rem' }}>
              Your wishlist is empty...
            </p>
          }
        </div>

      </div>

    </>
  )
}
