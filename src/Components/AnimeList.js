import React from 'react'
import { AnimeCtnr } from '../Styled'
import { AnimeCard } from './AnimeCard'
export const AnimeList = ({ animeList }) => {

  return (
    <AnimeCtnr>
      {animeList.length > 0 ?
        animeList.map((el) => {
          return (
            <AnimeCard {...el} />
          )
        })
        : <div style={{
          alignItems: 'center', fontWeight: '400', fontSize: '25px',
          display: 'flex', justifyContent: 'center'
        }}>
          No Anime to display...</div>
      }
    </AnimeCtnr>
  )
}
