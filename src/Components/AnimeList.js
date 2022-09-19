import React from 'react'
import { AnimeCtnr } from '../Styled'
import { AnimeCard } from './AnimeCard'

export const AnimeList = ({animeList}) => {
  return (
    <AnimeCtnr>
    {animeList.map((el) => {
        return (
         <AnimeCard {...el} />
        )
    }
        )}
    </AnimeCtnr>
  )
}
